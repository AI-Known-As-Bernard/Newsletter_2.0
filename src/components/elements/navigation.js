function openNav(){
    document.getElementById('mySidebar').style.width="15.625rem";
    document.getElementById('main').style.marginLeft ="15.625rem";
}
const closeNav=()=>{
    document.getElementById('mySidebar').style.width="0";
    document.getElementById('main').style.marginLeft ="0";
}
 
export {openNav, closeNav};
