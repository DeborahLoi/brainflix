import './UploadVideo.scss';
import UploadImage from '../../assets/Images/Upload-video-preview.jpg';

//his parent is in the UploadPage
function UploadVideo(){
    return(
        <div className ="upload-video">
            <h2 className="upload-video__subtitle">VIDEO THUMBNAIL</h2>
            <img className="upload-video__image" src= {UploadImage} alt = "Image uploaded"/>
        </div>
    )

}

export default UploadVideo