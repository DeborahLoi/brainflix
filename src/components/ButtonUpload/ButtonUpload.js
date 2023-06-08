import './ButtonUpload.scss';
import UploadIcon from '../../assets/Icons/upload.svg';
import { Link } from 'react-router-dom';

function Button() {
  return (
    <Link className="button" to="/upload-page">
        <img src={UploadIcon} alt="Upload Icon" className="button__icon" />
        UPLOAD
    </Link>
  );
}

export default Button;