import {closeNav,openNav} from './slidebarFunctions'
import {Link} from 'react-router-dom'
import '../../styles/css/main.css' ;
import favIcon from '../../components/images/favicon-32x32.png'
const slideNavBar = ()=>{
    return (
        <div>
            <button className='openButton' onClick={openNav}>&#9776;</button>
            <div id='mySidebar' className='sidebar'>
                <a href="#!" className='closeButton' onClick={closeNav}>
                <img src={favIcon}/></a>
                <Link to='./' onClick={closeNav}>Home</Link>
                <Link to='./blog' onClick={closeNav}>Blog</Link>
                <Link to='./about' onClick={closeNav}>About</Link>
                <Link to='./accomplishments' onClick={closeNav}>Accomplishments</Link>
            </div>
        </div>
    )
}

export default slideNavBar;