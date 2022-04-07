//Collasping navbar left side
function openNav() {
  document.getElementById('mySidebar').style.width = '15.625rem';
  document.getElementById('main').style.marginLeft = '15.625rem';
}
const closeNav = () => {
  document.getElementById('mySidebar').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
};

//Profile Card Web Functions

const createKeyFrames = (name, skillCompletion) => {
  let keyFrames = `@-webkit-keyframes ${name} {
        0% {width:0;} 
        100% {width:${skillCompletion}}
    }`;
  return keyFrames;
};

const cardSkills = (skillsProgress) => {
  //takes in an array of objects with properties name, and progress
  var animations = [];
  for (let skill = 0; skill < skillsProgress.length; skill++) {
    let animationName = `${skillsProgress[skill].name}Skill`;
    animations.push(
      createKeyFrames(animationName, skillsProgress[skill].progress)
    );
    document.styleSheets[0].insertRule(
      animations[skill],
      document.styleSheets.cssRules.length
    );
  }
};

//Next Student

export { openNav, closeNav, cardSkills };
