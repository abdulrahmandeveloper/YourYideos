import { IGoogleResponse } from "./google.api.interface";
import { IRapidAPIResponse } from "./rapid.api.interface";

export interface ICreateRequest {
  request: GoogleRequestOptions | RapidApiRequestOptions;
  api: "google" | "rapid";
}

interface GoogleRequestOptions {
  method: string;
  url: string;
  params: {};
}

interface RapidApiRequestOptions {
  method: string;
  url: string;
  params: {};
}

export interface IRecievedResponse {
  response: IGoogleResponse[] | IRapidAPIResponse[];
}

export interface IFiltredResponse {}
