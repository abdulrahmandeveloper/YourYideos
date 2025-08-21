import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_RAPID_API_KEY;
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const API_HEADERS = {
  "x-rapidapi-key": API_KEY,
  "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
};

export const FetchFromAPI = async (endpoint: string, queryParams = {}) => {
  try {
    const requestOptions = {
      method: "GET",
      url: `${BASE_URL}/${endpoint}`,
      params: { ...queryParams },
      headers: API_HEADERS,
    };
    const response = await axios.request(requestOptions);

    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};
