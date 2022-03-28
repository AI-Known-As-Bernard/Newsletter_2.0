import '../styles/css/main.css';
import {openNav} from '../components/elements/navigation'
import Card from '../components/elements/StudentCard.jsx'
import Student from '../models/studentModel'
const loadingDOM = document.querySelector('.loading-text')

const Home = ()=> {
    
//    var list  = Student.find({})
//     console.log(list)
    return <div id='main' className='home'>
        <button className='openButton' onClick={openNav}>&#9776; Menu</button>
        <h1 className='title-1'> Template</h1>
        <div className='loadingText'></div>
        <div id='cardGalleryContainer'>
            <Card/>
        {/* {list.map((student, i)=> {
            <Card user={student}/>
        })} */}
        </div>
    
    </div>
}

export default Home;