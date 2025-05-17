import axios from "axios";

const base_url = "https://youtube-v31.p.rapidapi.com/";
const options = {
  method: "GET",
  url: base_url,
  params: {
    relatedToVideoId: "7ghhRHRP6t4",
    part: "id,snippet",
    type: "video",
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": process.env.React_app_rapid_API_key,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

export const FetchFromAPI = async (url) => {
  const { data } = await axios.get(`${base_url}/${url}`, options);

  return data;
};
