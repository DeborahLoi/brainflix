const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080;
const videos = require ('./routes/videos');
const cors = require ('cors');
require('dotenv').config();

app.use(cors())
app.use(express.json());
app.use("/videos", express.static("public/images"));
app.use("/videos", videos);
app.use ("/videos/:id",videos)

      
  

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
