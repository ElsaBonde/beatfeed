export type PostWithAuthor = {
    id: string;
    title: string;
    content: string;
    song: string;
    likes: number;
    author: {
        userName: string;
    }
};