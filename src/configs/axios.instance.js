import axios from "axios";
import { CONST } from "../utils/constant";

export const axiosInstance = axios.create({
  baseURL: CONST.BASE_URL_API,
  headers: {
    "app-id": "651a2054340309952f0ce26a",
  },
});
