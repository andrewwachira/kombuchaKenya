import {useRouter} from 'next/router';
import axios from 'axios';

import Image from 'next/image';
import parse from 'html-react-parser';
import { server } from '../../../config';

export const getServerSideProps = async (context)=>{
    const {data} = await axios.get(`${server}/api/blogs/${context.params.blogId}`)
    return {
      props : {blogpost: data}
    }
}

// export const getStaticPaths = async()=>{
//     const {data} = await axios.get(`${server}/api/blogs`)
//     const blogs = data;
//     const paths = blogs.map((blog)=> ({params:{blogId : `${blog.blog_id}`}}))
//     return {
//       paths,
//       fallback : false
//     }

// }


const Blog = ({blogpost}) => {
    const router = useRouter();
    const {blogId} = router.query;

    return (
      <>
        <div className={`r${blogId}-content`}>
          <div className="banner">
          <Image src = {require(`../../../public${blogpost.blog_image}`)}  />
          </div>
          <div className="modal-content">
              <h4 className="font-style-4-h4">{blogpost.blog_title}</h4>
              {parse(blogpost.blog_post)}
          </div>    

        </div>
        
      </>
    
    )
}

export default Blog;
