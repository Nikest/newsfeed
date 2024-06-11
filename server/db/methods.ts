import { NewsPostModel, LikePostModel } from '~/server/db';

export async function getPosts(userId: string) {
    const posts = (await NewsPostModel.find().sort({ date: -1 }).limit(10)).reverse();

    for (const post of posts) {
        const isUserLiked = await LikePostModel.findOne({ postId: post.id, userId });
        post.isLiked = !!isUserLiked;
    }

    return posts;
}

export async function getLikesForPosts(postIds: string, userId: string) {
    const posts = await NewsPostModel.find({ id: { $in: postIds } });
    const likes = [];

    for (const post of posts) {
        const isUserLiked = await LikePostModel.findOne({ postId: post.id, userId });

        likes.push({
            postId: post.id,
            likeNumber: post.likeNumber,
            isLiked: !!isUserLiked,
        });
    }

    return likes;
}

export async function createNewPost(post: any) {
    const newPost = new NewsPostModel(post);
    return await newPost.save();
}

export async function likePost(like: any) {
    const newLike = new LikePostModel(like);
    await newLike.save();

    await NewsPostModel.findOneAndUpdate(
        { id: like.postId },
        { $inc: { likeNumber: 1 } }
    );

    return true;
}