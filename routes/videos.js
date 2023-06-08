const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


const videosJSON = fs.readFileSync("./data/videos.json", { encoding: "utf8" });
const videos = JSON.parse(videosJSON);

const currentDate = new Date();
const timestamp = currentDate.getTime();


router.get("/", (request, response) => {
  response.json(videos);
});git 

router.get("/:id", (request, response) => {
  const selectedVideo = videos.find((video) => video.id === request.params.id);
  response.json(selectedVideo);
});

router.post("/", (req, res) => {
  // Makes a new video with an unique id
  const newVideo = {
    id: uuidv4(),
    title: req.body.title,
    channel: "Deboeazy",
    image: req.body.image,
    description: req.body.description,
    views: "0",
    likes: "0",
    duration: req.body.duration,
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: timestamp,
    comments: [],


  };


  videos.push(newVideo);

  res.status(200).send({ message: 'Success' })
  fs.writeFileSync("./data/videos.json", JSON.stringify(videos));


});

module.exports = router;