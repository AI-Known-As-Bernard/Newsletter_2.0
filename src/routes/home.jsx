import '../styles/css/main.css';
import Card from '../components/elements/profileCardWeb.jsx'
// const loadingDOM = document.querySelector('.loading-text')
// import studentList from '../components/elements/studentList'
import list from '../students.json'
import { next } from '../components/elements/slidebarFunctions';

const Home = ()=> {
    let x = 0;
    const next = () => {
        document.getElementById(0).style.display = 'none';
        x++;
        console.log('next')
    };
    console.log(list)
    return <div id='main' className='home'>
        <div className='loadingText'></div>
        <h1 className='pageTitle'>Coding Newsletter</h1>
        <div id='cardGalleryContainer'>
            {/* <Card/> */}
            <button className='next' onClick={()=>next()}>Next</button>
        {list.map((student, i)=> {
           return <Card user={student} key={i}/>
        })}
        </div>
    
    </div>
}

export default Home;