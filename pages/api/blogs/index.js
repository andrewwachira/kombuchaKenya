import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function allBlogs(req,res){
    try {
        const blogs = await prisma.blogs.findMany();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(404).json(error.message);
    }        
}