import '../styles/css/main.css';
import BlogPost from '../components/elements/blogPost.jsx'

const Blog = ()=> {


    return(
        <div id='main'>
            <div className='blogPostContainer'>
                <BlogPost/>
                <BlogPost/>
                <BlogPost/>
            </div>
            
        </div>
        
    )
}

export default Blog;