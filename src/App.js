import './App.scss';
import Home from './Pages/Home-Page/Home';
import UploadPage from './Pages/Upload-Page/UploadPage';
import Header from './components/Header/Header';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='upload-page' element={<UploadPage />} />
          <Route path='uploadPage' element={<Navigate to='/upload-page' />} />
          <Route path='/video/:idFromParams' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


