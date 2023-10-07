const createBlog = async (blogData) => {
    const userData = req.user;
    const newBlog = await blogService.CreateBlogService(userData, blogData);

    res.status(201).json({
        status: "success",
        data: newBlog
    })
}

const getBlogs = async (req, res) => {
    const {searchText, limit} = req.query;
    const blogs = await blogService.GetBlogService(searchText, limit);

    res.status(200).json({
        status: "success",
        data: blogs
    })
}

const getSingleBlog = async (req, res) => {
    const blogId = req.params.id;
    const blog = await blogService.GetSingleBlogService(blogId);

    res.status(200).json({
        status: "success",
        data: blog
    })
}

export default {
    createBlog,
    getBlogs,
    getSingleBlog
}