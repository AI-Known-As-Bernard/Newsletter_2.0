import ImageGallery from 'react-image-gallery'
import studentImage from '../images/JDBlackman.jpg'

const monthlyEvent = {blogTitle:'Mary March', blogMessage: 'This March We accomplished a lot'}
const blogPost =()=>{
    const images =[
        {
            original:studentImage,
            thumbnail:studentImage
        },{
            original:studentImage,
            thumbnail:studentImage
        },{
            original:studentImage,
            thumbnail:studentImage
        }
    ]
    var {blogTitle, blogMessage} = monthlyEvent;
        const imgFunction=(productSmallImg)=> {
            var productFullImg = document.getElementsByClassName("img-Box");
            productFullImg.map((fullImage)=>{
                fullImage.src = productSmallImg.src
            })
            // productFullImg.src = productSmallImg.src;
        }
    return(
        <div class="myProducts">
        <div class="myProducts-gallery">
            <img src={studentImage} className="smallImg" alt="click here" onClick={imgFunction(this)}/>
            <img src={studentImage} className="smallImg" alt="click here" onClick={imgFunction(this)}/>
            <img src={studentImage} className="smallImg" alt="click here" onClick={imgFunction(this)}/>
            <img src={studentImage} className="smallImg" alt="click here" onClick={imgFunction(this)}/>
        </div>
        <div class="image-container">
            <img id="img-Box" src="#" alt="click here"/>
        </div>
    </div>
    )
}

export default blogPost;