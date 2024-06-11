interface IUser {
    id: string;
    firstName: string;
    lastName: string;
}

const defaultUser: IUser = {
    id: '',
    firstName: '',
    lastName: '',
}

interface INews {
    id: string;
    content: string;
    title: string;
    user: string;
    date: string;
    likeNumber: number;
    isLiked: boolean;
}

interface IStore {
    user: IUser;
    news: INews[];
    likedPost: string;
    lastUpdateHash: string;
    newPost: {
        title: string;
        content: string;
    };
}
const defaultStore: IStore = {
    user: defaultUser,
    news: [],
    likedPost: '',
    lastUpdateHash: '',
    newPost: {
        title: '',
        content: '',
    },
};

export const useStore = defineStore('main', {
    state: () => ({...defaultStore}),
    actions: {
        setUser(user: IUser) {
            this.$patch({ user });
        },
        setUpdateHash(hash: string) {
            this.$patch({ lastUpdateHash: hash });
        },
        setNewsPosts(news: INews[]) {
            this.$patch({ news });
        },
        addNewPost(post: INews) {
            this.$patch({ news: [...this.news, post] });
        },
        updateLikes(likes: { postId: string; likeNumber: number, isLiked: boolean }[]) {
            this.news.forEach((post) => {
                const like = likes.find((l) => l.postId === post.id);
                if (like) {
                    post.likeNumber = like.likeNumber;
                    post.isLiked = like.isLiked;
                }
            });
        },
        setLikedPost(postId: string) {
            const post = this.news.find((p) => p.id === postId);
            if (post) {
                post.isLiked = !post.isLiked;
                post.likeNumber += post.isLiked ? 1 : -1;
            }

            this.$patch({ likedPost: postId });
        },
        setNewPost(post: { title: string; content: string }) {
            this.$patch({ newPost: post });
        },
    },
});