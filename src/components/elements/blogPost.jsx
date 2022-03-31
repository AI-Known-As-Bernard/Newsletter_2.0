import ImageGallery from 'react-image-gallery'
import "../../styles/css/main.css";
import pokemon from '../images/pokemon.png'
import studentImage from '../images/JDBlackman.jpg'
import bloodCell from '../images/blood cell.jpg'
import op from '../images/one piece.png'
import beast from '../images/Hyper Beast [3440 x 1440] - Imgur.jpg'


const blogPost =()=>{
    const monthlyEvent = {blogTitle:'Mary March', blogMessage: 'This March We accomplished a lot This March We accomplished a lot This March We accomplished a lot This March We accomplished a lot This March We accomplished a lot This March We accomplished a lot This March We accomplished a lot This March We accomplished a lot',month:'March'}
    const images =[
        
        {
            original:op,
            thumbnail:op
        },{
            original:studentImage,
            thumbnail:studentImage
        },{
            original:pokemon,
            thumbnail:pokemon
        },{
            original:bloodCell,
            thumbnail:bloodCell
        },{
            original:beast,
            thumbnail:beast
        }
    ]
    var {blogTitle, blogMessage, month} = monthlyEvent;
        
    return(
        <div className="blogPost">
            <div className="postGallery">
                <ImageGallery
                    items={images}
                    // defaultImage={studentImage}
                    thumbnailHeight={'2rem'}
                    thumbnailWidth={'3rem'}
                    showBullets={true}
                    showIndex={true}
                    showThumbnails={false}
                    lazyLoad={true}
                    showPlayButton={true}
                    // renderCustomControls={someComponent}
                />
            </div>
            <div className='postContent'>
                <p>
                    <h2 className='postTitle'><b>{month}: {blogTitle}</b></h2>
                    <p>{blogMessage}</p>
                </p>
                
            </div>
        </div>
    )
}

export default blogPost;

