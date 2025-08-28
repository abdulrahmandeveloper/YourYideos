import axios from "axios";
import { header } from "./constant";
import {
  ICreateRequest,
  IFiltredResponse,
  IRecievedResponse,
} from "../interfaces/api.interface";

const GOOGLE_BASE_URL = import.meta.env.VITE_GOOGLE_API_BASE_URL;
const RAPID_BASE_URL = import.meta.env.VITE_RAPID_API_BASE_URL;

const API_HEADERS = header;

export class FetchDataFromAPI {
  public async fetchFromAPI(api: string, endpoint: string, queryParams = {}) {
    const request = this.createRequest(api, endpoint, queryParams);

    let response;
    if ((await request).api === "google") {
      response = this.chooseAndRequestFromAPI(api, request);
    } else if ((await request).api === "rapid") {
      response = this.chooseAndRequestFromAPI(api, request);
    }

    return this.manageResponse(response);
  }

  public async createRequest(
    api: string,
    endpoint: string,
    queryParams = {}
  ): Promise<ICreateRequest> {
    let googleRequestOptions;
    if (api === "google") {
      googleRequestOptions = {
        method: "GET",
        url: `${GOOGLE_BASE_URL}/${endpoint}`,
        params: { ...queryParams },
      };
      return { request: googleRequestOptions, api: "google" };
    } else if (api === "rapid") {
      const rapidApiRequestOptions = {
        method: "GET",
        url: `${RAPID_BASE_URL}/${endpoint}`,
        params: { ...queryParams },
        headers: API_HEADERS,
      };
      return { request: rapidApiRequestOptions, api: "rapid" };
    }
    return { request: googleRequestOptions, api: "google" };
  }

  public async chooseAndRequestFromAPI(api = "google", request: any) {
    if (api === "google") {
      return await axios.request(request);
    } else if (api === "rapid") {
      return await axios.request(request);
    }
  }

  public async manageResponse(
    response: IRecievedResponse[]
  ): Promise<IFiltredResponse> {
    return response.data;
  }
}
