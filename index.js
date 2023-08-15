import express from "express";
import axios from "axios";
const app = express();
const port = 3000;

let baseUrl =
  "https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page";

// Define a route
app.get("/orkes", async (req, res) => {
  let page = req.query.page;
  try {
    const response = await axios.get(`${baseUrl}/${page}`);
    const data = response?.data?.nodes;
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
