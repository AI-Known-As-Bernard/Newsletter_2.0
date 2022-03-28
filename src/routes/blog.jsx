import '../styles/css/main.css';
import {openNav} from '../components/elements/navigation'

const Blog = ()=> {


    return(
        <div id='main' className='blog'>
            <button className='openButton' onClick={openNav}>&#9776; Menu</button>
            <h1>Blog Template</h1>
        </div>
    )
}

export default Blog;