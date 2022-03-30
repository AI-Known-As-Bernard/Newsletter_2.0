import '../styles/css/main.css';
import Card from '../components/elements/profileCardWeb.jsx'
// const loadingDOM = document.querySelector('.loading-text')

const Home = ()=> {
    
    return <div id='main' className='home'>
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