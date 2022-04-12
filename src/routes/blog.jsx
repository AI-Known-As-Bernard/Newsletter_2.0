import '../styles/css/main.css';
import BlogPost from '../components/elements/blogPost.jsx'
import blogs from '../blogs.json'

const Blog = ()=> {
    

    return(
        <div id='main' className='blog'>
            <h1 className='pageTitle'>Blog</h1>
            <div className='blogPostContainer'>
                
                {
                    blogs.map((blog)=>{
                        // console.log(blog);
                        var temp = blog.id;
                        return <BlogPost key={temp} blog={blog}/>
                    })
                }
                {/* <BlogPost/>
                <BlogPost/>
                <BlogPost/>
                <BlogPost/>
                <BlogPost/>
                <BlogPost/> */}
            </div>
            
        </div>
       
    )
}

export default Blog;