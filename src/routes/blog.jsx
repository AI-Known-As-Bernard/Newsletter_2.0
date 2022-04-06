import '../styles/css/main.css';
import BlogPost from '../components/elements/blogPost.jsx'

const Blog = ()=> {


    return(
        <div id='main' className='blog'>
            <div className='blogPostContainer'>
                <h1 className='pageTitle'>Blog</h1>
                <BlogPost/>
                <BlogPost/>
                <BlogPost/>
                <BlogPost/>
                <BlogPost/>
                <BlogPost/>
            </div>
            
        </div>
       
    )
}

export default Blog;