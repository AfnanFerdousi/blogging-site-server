import Blog from "./blog.model";

const CreateBlogService = async (blogData, userData) => {
    if(!userData) {
        throw new Error("Unauthorized");
    }
    const newBlog = await Blog.create(blogData);
    return newBlog;
  
}

const GetBlogService = async ( searchText, limit) => {
    let query = {};

    if (searchText) {
        query.$or = [
            { title: { $regex: searchText, $options: "i" } },
            { content: { $regex: searchText, $options: "i" } }
        ];
    }

    const blogs = await Blog.find(query).limit(limit);
        
    return blogs;
}

const GetSingleBlogService = async (blogId) => {
    const blog = await Blog.findById(blogId);
    return blog;
}


export default {
    CreateBlogService,
    GetBlogService,
    GetSingleBlogService
};