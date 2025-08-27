import { FetchDataFromAPI } from "./manageAPI";

export const FetchFromAPI = async (
  api: string,
  endpoint: string,
  queryParams = {}
) => {
  const fetchData = new FetchDataFromAPI();

  try {
    fetchData.fetchFromAPI(api, endpoint, queryParams);
  } catch (error: unknown) {
    console.log(error);
  }
};
