import './VideoDetails.scss';
import VideoHeroItems from '../VideoHeroItems/VideoHeroItems';
import VideoHeroDescription from '../VideoHeroDescription/VideoHeroDescription';
import CommentsDisplay from '../CommentsDisplay/CommentsDisplay';
import { useState, useEffect } from "react";
import axios from 'axios';

//display all the infos of the video selected(date, vues, likes, etc..)
function VideoDetails({ selectedVideoId }) {
    const [video, setVideo] = useState([0]);
    useEffect(() => {
        if (selectedVideoId === null) {
            return;
        }
        axios.get(`http://localhost:8080/videos/${selectedVideoId}`)
            .then((response) => {
                console.log(response.data);
                setVideo(response.data);

            })

            .catch((error) => {
                console.log(error);
                // display an error message to the user
                alert("Sorry, we couldn't load the video. Please try again later.");

            });
    }, [selectedVideoId])

    return (
        <div>
            <VideoHeroItems title={video.title} channel={video.channel} timestamp={video.timestamp} views={video.views} likes={video.likes} />
            <VideoHeroDescription description={video.description} />
            <CommentsDisplay comments={video.comments} />
        </div>

    );
}

export default VideoDetails;
