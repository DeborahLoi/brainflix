import './Home.scss';
import VideoHero from '../../components/VideoHero/VideoHero'
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import VideoList from '../../components/VideoList/VideoList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Home() {

  const { idFromParams } = useParams();
  const [videos, setVideos] = useState([]);


  let defaultVideoId = null;

  if (videos.length > 0) {
    defaultVideoId = videos[0].id;
  }


  let videoIdToDisplay = idFromParams || defaultVideoId;

  const filteredVideos = videos.filter(video => video.id !== videoIdToDisplay)

  useEffect(() => {
    axios.get('http://localhost:8080/videos')
         .then((response) => {
         console.log(response.data);
         setVideos(response.data);

      })
      .catch((error) => {
        console.log(error);
        
    });
  }, []);

  return (

      <main>
        <VideoHero selectedVideoId={videoIdToDisplay} videos={videos} />
        <section className="hero-items">
          <div className="hero-items__container">
            <VideoDetails selectedVideoId={videoIdToDisplay} />
          </div>
          <div>
            <VideoList videos={filteredVideos} />
          </div>
        </section>
      </main>
  );
};

export default Home