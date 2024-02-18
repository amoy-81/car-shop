"use client";
import { useState } from "react";

import axios from "axios";
import { useCookies } from "next-client-cookies";

function useRequest(url, method, headers) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [percentProgress, setPercentProgress] = useState(0);

  const fetchRequest = (payload) => {
    setLoading(true);
    const configs = {
      headers: { ...headers },
      onUploadProgress: (pe) => {
        setPercentProgress((pe.loaded / pe.total) * 100);
      },
    };
    httpService[method.toLowerCase()](
      url,
      method.toLowerCase() === "post" ? payload : configs,
      !(method.toLowerCase() === "post") && configs
    )
      .then((res) => {
        setResponse(res?.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err?.response?.data);
      });
  };

  // ++++++++++++++++++++++++++++++
  const cookiesStore = useCookies();

  const httpService = axios.create({
    baseURL: process.env.NEXT_PUBLIC_LOCAL_API_URL,
  });

  // for access token
  httpService.interceptors.request.use(
    (req) => {
      const accessToken = cookiesStore.get("accessToken");
      // add token to headers
      if (accessToken) {
        req.headers["Authorization"] = `${accessToken}`;
      }
      return req;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  return { response, error, loading, fetchRequest, percentProgress };
}

export default useRequest;
