import Comment from "./comment.model.js"

const postCommentService = async (userData, commentData) => {
    const { comment, blog, author } = commentData;
    if(!userData) {
        throw new Error("Unauthorized");
    }
    const res = await Comment.create({
        comment,
        author,
        blog
    })

    return res;
}

export default {
    postCommentService
}