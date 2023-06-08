
import './VideoHero.scss';

//Video hero display
function VideoHero ({selectedVideoId, videos}) {
    const selectedVideo = videos.find((video) => video.id === selectedVideoId);

    if(!selectedVideo){
    return <div>Loading...</div>;

    }

    const {id} = selectedVideo
      return(
      <div className="hero" key={id} >    
        <video className="hero__video"controls poster= {"http://localhost:8080/videos/" + selectedVideo.image}></video>
      </div>
      
  );
}



export default VideoHero;
