import {useRouter} from 'next/router';
import Image from 'next/image';
import parse from 'html-react-parser';
import { server } from '../../../config';

 const Blog = ({blogpost}) => {
    const router = useRouter();
    const {blogId} = router.query


  return (
  <>
    <div className={`r${blogId}-content`}>
      <div className="banner">
      <Image src = {require(`../../../public${blogpost.blog_image}`)}/>
      </div>
      <div className="modal-content">
          <h4 className="font-style-4-h4">{blogpost.blog_title}</h4>
          {parse(blogpost.blog_post)}
      </div>    

    </div>
    
  </>
    
  )
}

export const getStaticProps = async (context)=>{
  const res = await fetch(`${server}/api/blogs/${context.params.blogId}`,{
    headers: {
      'User-Agent': 'ANYTHING_WILL_WORK_HERE'
    }})
  const blogpost = await res.json();
  
  return {
    props : {blogpost}
  }
}
export const getStaticPaths = async()=>{
  const res = await fetch(`${server}/api/blogs`)
  const blogs = await res.json();

  const paths = blogs.map((blog)=> ({params:{blogId : `${blog.blog_id}`}}))

  return {
    paths,
    fallback : false
  }
}

export default Blog;
