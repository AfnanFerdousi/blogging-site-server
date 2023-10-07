import commentService from "./comment.service.js";

const postComment = async (req, res) => {
    const userData = req.user;
    const commentData = req.body;

    const response = await commentService.postCommentService(userData, commentData);
   
    res.status(201).json({
        status: "success",
        data: response
    })
}

export default {
    postComment
}