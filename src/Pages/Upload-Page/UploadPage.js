
import './UploadPage.scss';
import UploadVideo from '../../components/UploadVideoComponent/UploadVideo';
import ButtonCancel from '../../components/ButtonCancel/ButtonCancel';
import UploadVideoTitle from '../../components/TitleUploadVideo/TitleUploadVideo';
import PublishdIcon from '../../assets/Icons/publish.svg';
import { useNavigate, Navigate } from 'react-router-dom';
import { useState,useRef} from 'react';
import axios from 'axios';


function UploadPage() {

  const [shouldRedirect, setShouldRedirect] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Your video is uploaded.');
    setShouldRedirect(true);
    navigate ('/');

    const formData = new FormData(formRef.current);
    const newVideo = {
    "title": formData.get('title'),
    "image": 'image9.jpeg',
    "description": formData.get('description'),

  } 

    axios
    .post('http://localhost:8080/videos', newVideo)
      
    
    .then((response) => {
      console.log(response)
    
    }).catch((error) => {
      console.error(error);
    });
};
 

  return (
    <main>
      <UploadVideoTitle />
      <div className="upload-page">
        <UploadVideo />
        <form ref={formRef} className="form__container" >
          <label className="input">
            TITLE YOUR VIDEO
            <input
              className="input__field input__field--text-color"
              type="text"
              wrap="hard"
              name="title"
              placeholder="Add a title to your video"
             
            />
          </label>
          <label className="input">
            ADD A VIDEO DESCRIPTION
            <textarea
              className="input__field input__field--text-color input__field--sizing"
              type="textarea"
              wrap="hard"
              name="description"
              placeholder="Add a descrition to your video"
          
            />
          </label>
        </form>
      </div>
      <div className="buttons__container">
      {shouldRedirect && <Navigate to="/" />}
      <form  className="button__container">
        <button onClick = {handleFormSubmit} className="button__field" type="submit">
          <img
            src={PublishdIcon}
            alt="Icon of the publish button"
            className="button__field-icon"
          />
          PUBLISH
        </button>
      </form>
        <ButtonCancel />
      </div>
    </main>

  );
}


export default UploadPage
