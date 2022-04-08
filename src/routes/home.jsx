import '../styles/css/main.css';
import React, {useState,lazy,Suspense} from 'react'
import list from '../students.json'
import { next } from '../components/elements/slidebarFunctions';

// const loadingDOM = document.querySelector('.loading-text')
// import studentList from '../components/elements/studentList'
const Card = lazy(()=> import('../components/elements/profileCardWeb.jsx'));
let x = 0
const Home = ()=> {
  
    const [student, setStudent]= useState(list[x]);
    const renderLoader = () => <p>Loading</p>;
    const next = () => {
        if(x==list.length-1){x=0}
        else{x++}
        
        setStudent(list[x])
        console.log('next' + x)
    };
    const previous = () => {
        if(x==0){x=list.length-1}
        else{x--}
        
        setStudent(list[x])
        console.log('next' + x)
    };
    console.log(list)
    return <div id='main' className='home'>
        <div className='loadingText'></div>
        <h1 className='pageTitle'>Coding Newsletter</h1>
        <div id='cardGalleryContainer'>
            <button className='next' onClick={()=>next()}>Next</button>
            <button className='previous' onClick={()=>previous()}>Previous</button>
            <Suspense fallback={renderLoader()}>
                <Card user={student} key={x}/>
            </Suspense>
            
        </div>
    
    </div>
}

export default Home;