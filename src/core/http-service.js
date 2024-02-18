import axios from "axios";
import { cookies } from "next/headers";

const cookiesStore = cookies();

const httpService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOCAL_API_URL,
});

// for access token
httpService.interceptors.request.use(
  (req) => {
    const accessToken = cookiesStore.get("accessToken");
    // add token to headers
    if (accessToken) {
      req.headers["Authorization"] = `${accessToken.value}`;
    }
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export { httpService };
