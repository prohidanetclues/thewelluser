import axios from "axios";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import authOptions  from "@/app/api/auth/[...nextauth]/options";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const client = process.env.NEXT_PUBLIC_CLIENT_ID;

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers.client = client;

    if (typeof window !== "undefined") {
      // Client-side
      const session = await getSession();
      if (session?.accessToken) {
        config.headers.Authorization = `Bearer ${session.accessToken}`;
      }
    } else {
      // Server-side
      const req = config.headers.req;
      const session = await getServerSession({ req, ...authOptions });
      if (session?.accessToken) {
        config.headers.Authorization = `Bearer ${session.accessToken}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
