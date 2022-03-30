import studentImg from '../images/JDBlackman.jpg';
import dbList from './dbList'
// import Student from '../../models/studentModel.js'




const profileCardStandard = ()=> {
    // dbList()
    
    const user={
     firstName: 'James' ,
     lastName: 'Tibereous Kirk',
     year:2,
     featured:true,
     homeHighSchool:'Starfleet',
     message:'How we deal with death is at least as important as how we deal with life.',
     gitHub:'https://github.com/Jblack262'
    }

    const {firstName,lastName,year,featured,homeHighSchool,gitHub,message}=user
    return (
      <div className="card">
        <img src={studentImg} alt={firstName} className="profileImg"/>
        <h2 className="rank">Year {year} </h2>
        <div className="cardData">
            <h1>{firstName} {lastName}</h1>
            
            <h3>{homeHighSchool}</h3>
            <p className="message">{message}</p>
            <div className="socialLinks">
                <a href={gitHub}><i className="fa fa-github"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
            </div>
            
            {/* <p><button className='profileButton'>Contact</button></p> */}
        </div>
    </div>
        
  
    )

}

export default profileCardStandard;