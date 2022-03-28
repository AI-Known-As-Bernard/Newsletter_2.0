import {closeNav} from './navigation'
import {Link} from 'react-router-dom'

const Navigation = ()=>{


    return (
        <div>
            <div id='mySidebar' className='sidebar'>
                <a href="#!" className='closeButton' onClick={closeNav}>
                X</a>

                <Link to='./' onClick={closeNav}>Home</Link>
                <Link to='./blog' onClick={closeNav}>Blog</Link>
                <Link to='./about' onClick={closeNav}>About</Link>
                <Link to='./accomplishments' onClick={closeNav}>Accomplishments</Link>
            </div>
                {/* <button class='openButton' onclick={openNav()}>&#9776; Open Sidebar</button> */} 
        </div>
    )
}

export default Navigation;