import { Schema, model } from 'mongoose';

interface INewsPost {
    id: string;
    content: string;
    title: string;
    userId: string;
    user: string;
    date: number;
    likeNumber: number;
    isLiked: boolean;
}

interface ILike {
    postId: string;
    userId: string;
}

const NewsPostSchema = new Schema<INewsPost>({
    id: String,
    content: String,
    title: String,
    userId: String,
    user: String,
    date: Number,
    likeNumber: { type: Number, default: 0 },
    isLiked: { type: Boolean, default: false },
});

const LikeSchema = new Schema<ILike>({
    postId: String,
    userId: String,
});

export const NewsPostModel = model<INewsPost>('NewsPost', NewsPostSchema);
export const LikePostModel = model<ILike>('Like', LikeSchema);