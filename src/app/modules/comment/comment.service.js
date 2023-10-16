import Blog from "../blog/blog.model.js";
import Comment from "./comment.model.js";

const postCommentService = async (userData, commentData) => {
    const { comment, blog, author } = commentData;
    if (!userData) {
        throw new Error("Unauthorized");
    }

    // Create the new comment with author population
    const newComment = await Comment.create({
        comment,
        author, // Assuming author is an ObjectId referencing a User document
        blog
    });

    // Populate the author field in the newComment
    await newComment.populate("author")

    const updatedBlog = await Blog.findByIdAndUpdate(
        blog,
        { $push: { comments: newComment._id } },
        { new: true }
    );

    return { newComment, updatedBlog };
}

export default {
    postCommentService
}
