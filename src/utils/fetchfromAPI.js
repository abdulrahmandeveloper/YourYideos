// src/utils/fetchfromAPI.js (Your existing file, ensure it's like this)
import axios from "axios";

// Replace with your actual RapidAPI Key
const API_KEY = "YOUR_RAPIDAPI_KEY_HERE"; // Make sure this is YOUR key
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const API_HEADERS = {
  "x-rapidapi-key": API_KEY,
  "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
};

export const FetchFromAPI = async (endpoint, queryParams = {}) => {
  try {
    const requestOptions = {
      method: "GET",
      url: `${BASE_URL}/${endpoint}`,
      params: { ...queryParams }, // Spreads dynamic query parameters
      headers: API_HEADERS,
    };
    const response = await axios.request(requestOptions);
    console.log(
      `WorkspaceFromAPI - Success for endpoint: ${endpoint} with params:`,
      queryParams
    );
    return response.data;
  } catch (error) {
    console.error(
      `WorkspaceFromAPI Error for endpoint: ${endpoint} with params:`,
      queryParams,
      error
    );
    throw error; // Re-throw the error so the component can handle it
  }
};
