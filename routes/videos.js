const express = require('express');
const router = express.Router() 
const fs = require('fs')


const videosJSON = fs.readFileSync("./data/videos.json", {encoding:"utf8"});
const videos = JSON.parse(videosJSON);



router.get("/", (request, response) => {
    response.json(videos);
  });

  module.exports= router;