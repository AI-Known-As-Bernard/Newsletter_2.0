import studentImg from '../images/JDBlackman.jpg';
import {FaGithubSquare,FaTwitterSquare,FaLinkedin,FaInstagramSquare,FaReact,FaCss3,FaNode,FaHtml5} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si'
import { IconContext } from "react-icons";

const profileCardWeb= () =>{
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
            <IconContext.Provider value={{ className: 'react-icons' }}>
            <div className="ds-top"><h2 className="nameTop">{firstName} {lastName}</h2></div>
            
            <div className="avatar-holder">
                <img src={studentImg} alt="J Di"/>
            </div>
            <div className="name">
                <h2>Year {year} </h2>
                <h3>{homeHighSchool}</h3>
                
                <div className="socialLinks">
                    <a href={gitHub}><FaLinkedin/></a>
                    <a href="#"><FaGithubSquare/></a>
                    <a href="#"><FaTwitterSquare/></a>
                    <a href="#"><FaInstagramSquare/></a>
                </div>
            </div>
            <div className="ds-info">
                <div className="ds pens">
                    <h6 title="Number of pens created by the user">Github Pushes<i className="fas fa-edit"></i></h6>
                    <p>29</p>
                </div>
                <div className="ds projects">
                    <h6 title="Number of projects created by the user">Projects <i className="fas fa-project-diagram"></i></h6>
                    <p>0</p>
                </div>
                <div className="ds posts">
                    <h6 title="Number of posts">Posts <i className="fas fa-comments"></i></h6>
                    <p>0</p>
                </div>
            </div>
            <div className="ds-skill">
                <h6>Skills <i className="fa fa-code" aria-hidden="true"></i></h6>
                <div className="skill html">
                    <h6><FaHtml5/> HTML5 </h6>
                    <div className="bar bar-html">
                        <p>95%</p>
                    </div>
                </div>
                <div className="skill css">
                    <h6><FaCss3/> CSS3 </h6>
                    <div className="bar bar-css">
                        <p>90%</p>
                    </div>
                </div>
                <div className="skill javascript">
                    <h6><SiJavascript/> JavaScript </h6>
                    <div className="bar bar-js">
                        <p>75%</p>
                    </div>
                </div>
                <div className="skill react">
                    <h6><FaReact/> React </h6>
                    <div className="bar bar-js">
                        <p>75%</p>
                    </div>
                </div>
                <div className="skill node">
                    <h6><FaNode/> Node </h6>
                    <div className="bar bar-js">
                        <p>75%</p>
                    </div>
                </div>
            </div>
            </IconContext.Provider>
        </div>
    )
}
export default profileCardWeb;