const express = require('express');
const router = express.Router() 
const fs = require('fs')


const videosJSON = fs.readFileSync("./data/videos.json", {encoding:"utf8"});
const videos = JSON.parse(videosJSON);


router.get("/", (request, response) => {
    response.json(videos);
  });

  router.get("/:id", (request, response) => {
    const selectedVideo = videos.find((video) => video.id === request.params.id);
    response.json(selectedVideo);
  });


  module.exports= router;