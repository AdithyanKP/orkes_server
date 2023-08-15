import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 3000;
dotenv.config(); // Load environment variables from .env file

let baseUrl = process.env.BASEURL;
// Use the cors middleware
app.use(cors());

// Define a route
app.get("/orkes", async (req, res) => {
  let page = req.query.page;
  try {
    const response = await axios.get(`${baseUrl}/${page}`);
    const data = response?.data?.nodes;
    if (data) {
      res.send(data);
    } else {
      res.send([]);
    }
  } catch (error) {
    res.send([]);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
