import { API_ENDPOINTS } from "./config/endpoints";
import { apiRequest } from "./client";
import { CoWorker } from "@/app/_types/coworker";

export interface CoWorkersResponse {
  coWorkers: CoWorker[];
}

export const coWorkersApi = {
  async getCoWorkers(): Promise<CoWorkersResponse> {
    return apiRequest<CoWorkersResponse>(
      API_ENDPOINTS.coWorkers.get(),
      {
        method: "GET",
      }
    );
  },
};

