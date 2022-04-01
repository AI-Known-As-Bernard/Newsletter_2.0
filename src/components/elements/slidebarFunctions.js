//Collasping navbar left side
function openNav(){
    document.getElementById('mySidebar').style.width="15.625rem";
    document.getElementById('main').style.marginLeft ="15.625rem";
}
const closeNav=()=>{
    document.getElementById('mySidebar').style.width="0";
    document.getElementById('main').style.marginLeft ="0";
}
 


//Profile Card Web Functions
const target = {
  clicked: 0,
  currentFollowers: 90,
  btn: document.querySelector("a.btn"),
  fw: document.querySelector("span.followers")
};

const follow = () => {
  target.clicked += 1;
  target.btn.innerHTML = 'Following <i class="fas fa-user-times"></i>';

  if (target.clicked % 2 === 0) {
    target.currentFollowers -= 1;
    target.btn.innerHTML = 'Follow <i class="fas fa-user-plus"></i>';
  }
  else {
    target.currentFollowers += 1;
  }

  target.fw.textContent = target.currentFollowers;
  target.btn.classList.toggle("following");
}



const createKeyFrames = (name,skillCompletion) => {
  let keyFrames = `@-webkit-keyframes ${name} {
        0% {width:0;} 
        100% {width:${skillCompletion}}
    }`;
    return keyFrames;
}

const cardSkills=(skillsProgress)=>{
  //takes in an array of objects with properties name, and progress
  var animations=[];
  for(let skill=0;skill<skillsProgress.length;skill++){
    let animationName= `${skillsProgress[skill].name}Skill`
    animations.push(createKeyFrames(animationName,skillsProgress[skill].progress))
    document.styleSheets[0].insertRule(animations[skill], document.styleSheets.cssRules.length);
  }
}

export {openNav, closeNav, follow,cardSkills};