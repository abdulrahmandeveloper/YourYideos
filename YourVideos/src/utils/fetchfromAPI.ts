import { FetchDataFromAPI } from "./manageAPI";

export const FetchFromAPI = async (
  api: string,
  endpoint: string,
  queryParams = {}
) => {
  const fetchData = new FetchDataFromAPI();

  fetchData.fetchFromAPI(api, endpoint, queryParams);
};
