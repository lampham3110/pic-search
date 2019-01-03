import axios from "axios";

//Initialize axios request //
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID d92dafe63b3a2b12cb5e18cb6e2635f09f11b67b6add3eaf15fe8a018b5ca2d9"
  }
});
