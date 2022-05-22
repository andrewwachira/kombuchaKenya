import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function singleBlog(req,res){
    try {
        const {blogId} = req.query
        const blogpost = await prisma.blogs.findUnique({
            where:{
                blog_id : parseInt(blogId)
            }
        });
        res.status(200).send(blogpost);
    } catch (error) {
        res.status(404).json(error.message);
    }        
}