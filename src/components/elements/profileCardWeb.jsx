import studentImg from '../images/JDBlackman.webp';
import {FaGithubSquare,FaTwitterSquare,FaLinkedin,FaInstagramSquare,FaReact,FaCss3,FaNode,FaHtml5} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si'
import { IconContext } from "react-icons";


const profileCardWeb= (user) =>{
    const {firstName,id,lastName,year,featured,homeHighSchool,message,html,css,js,node,react,socialMediaHandles,currentSkills}=user.user
    
     const emptyZero = (skillPts) =>{
         console.log(skillPts)
         if(skillPts==0){return ''}
         else{return skillPts+"%"}
     }
    console.log(currentSkills)
    return (
        <div className="card" id={id} >
            <div className="ds-top"><h2 className="nameTop">{firstName} {lastName}</h2></div>
            
            <div className="avatar-holder">
                <img src={studentImg} alt="J Di"/>
            </div>
            <div className="name">
                <h4 className="year">Year {year} </h4>
                <div className="school"><h4>{homeHighSchool}</h4></div>
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
                    <div className="bar bar-html" style={{width:currentSkills.htmlSkill+'%', animate:([
                        0%{width:0},
                        100%{width:currentSkills.htmlSkill+'%'}
                    ])}}>
                        <p>{emptyZero(currentSkills.htmlSkill)}</p>
                    </div>
                </div>
                <div className="skill css">
                    <h6><FaCss3/> CSS3 </h6>
                    <div className="bar bar-css" style={{width:currentSkills.cssSkill+'%', animate:([
                        0%{width:0},
                        100%{width:currentSkills.cssSkill+'%'}
                    ])}}>
                        <p>{emptyZero(currentSkills.cssSkill)}</p>
                    </div>
                </div>
                <div className="skill javascript">
                    <h6><SiJavascript/> JavaScript </h6>
                    <div className="bar bar-js" style={{width:currentSkills.jsSkill+'%', animate:([
                        0%{width:0},
                        100%{width:currentSkills.jsSkill+'%'}
                    ])}}>
                        <p>{emptyZero(currentSkills.jsSkill)}</p>
                    </div>
                </div>
                <div className="skill react">
                    <h6><FaReact/> React </h6>
                    <div className="bar bar-react" style={{width:currentSkills.reactSkill+'%', animate:([
                        0%{width:0},
                        100%{width:currentSkills.reactSkill+'%'}
                    ])}}>
                        <p>{emptyZero(currentSkills.reactSkill)}</p>
                    </div>
                </div>
                <div className="skill node" style={{width:currentSkills.nodeSkill+'%', animate:([
                        0%{width:0},
                        100%{width:currentSkills.nodeSkill}
                    ])}}>
                    <h6><FaNode/> Node </h6>
                    <div className="bar bar-node">
                        <p>{emptyZero(currentSkills.nodeSkill)}</p>
                    </div>
                </div>
                </IconContext.Provider>
            </div>
           
        </div>
    )
}
export default profileCardWeb;