import studentImg from '../images/JDBlackman.jpg';
import {FaGithubSquare,FaTwitterSquare,FaLinkedin,FaInstagramSquare,FaReact,FaCss3,FaNode,FaHtml5} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si'
import { IconContext } from "react-icons";


const profileCardWeb= (user) =>{
    // const user={
    //  firstName: 'James' ,
    //  lastName: ' Kirk',
    //  year:2,
    //  featured:true,
    //  homeHighSchool:'Starfleet',
    //  message:'How we deal with death is at least as important as how we deal with life.',
    //  gitHub:'https://github.com/Jblack262',
    //  html:'95%',
    //  css:'90%',
    //  js:'75%',
    //  react:'95%',
    //  node:'90%'
    // }

    const {firstName,id,lastName,year,featured,homeHighSchool,message,html,css,js,node,react,socialMediaHandles,currentProgress}=user.user

    // console.log(user)
    return (
        <div className="card" id={id} >
            <div className="ds-top"><h2 className="nameTop">{firstName} {lastName}</h2></div>
            
            <div className="avatar-holder">
                <img src={studentImg} alt="J Di"/>
            </div>
            <div className="name">
                <h2>Year {year} </h2>
                <h3>{homeHighSchool}</h3>
                <IconContext.Provider value={{ className: 'socialIcons' }}>
                <div className="socialLinks">
                    <a href={socialMediaHandles.gitHub}><FaLinkedin/></a>
                    <a href={socialMediaHandles.linkedIn}><FaGithubSquare/></a>
                    <a href={socialMediaHandles.twitter}><FaTwitterSquare/></a>
                    <a href={socialMediaHandles.instagram}><FaInstagramSquare/></a>
                </div>
                </IconContext.Provider>
            </div>
        
            <div className="ds-skill">
                <IconContext.Provider value={{ className: 'skillsIcon' }}>
                <h6>Skills <i className="fa fa-code" aria-hidden="true"></i></h6>
                <div className="skill html">
                    <h6><FaHtml5/> HTML5 </h6>
                    <div className="bar bar-html" style={{width:html}}>
                        <p>95%</p>
                    </div>
                </div>
                <div className="skill css">
                    <h6><FaCss3/> CSS3 </h6>
                    <div className="bar bar-css" style={{width:css}}>
                        <p>90%</p>
                    </div>
                </div>
                <div className="skill javascript">
                    <h6><SiJavascript/> JavaScript </h6>
                    <div className="bar bar-js" style={{width:js}}>
                        <p>75%</p>
                    </div>
                </div>
                <div className="skill react">
                    <h6><FaReact/> React </h6>
                    <div className="bar bar-react" style={{width:react}}>
                        <p>75%</p>
                    </div>
                </div>
                <div className="skill node" style={{width:node}}>
                    <h6><FaNode/> Node </h6>
                    <div className="bar bar-node">
                        <p>75%</p>
                    </div>
                </div>
                </IconContext.Provider>
            </div>
           
        </div>
    )
}
export default profileCardWeb;