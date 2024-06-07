import axios, { AxiosError, AxiosResponse } from "axios";

// let's setup axios config default value

const api = axios.create({
  baseURL: "http://localhost:1337",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
export enum HttpStatus {
  NO_CONTENT = 204,
}

api.interceptors.request.use(
  (config) => {
    const accessToken = "random";
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return error;
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    //const statusCode = (error as AxiosError).response?.status;
    // you can do anything with your statusCode here
    //console.log(statusCode);
    return Promise.reject(error);
  }
);

const consolidateResponse = <T>(res: AxiosResponse) => {
  const httpStatus = res.status;
  return {
    data: httpStatus == HttpStatus.NO_CONTENT ? null : (res.data as T),
    headers: res.headers,
    error: null,
  };
};

const consolidateError = (error: AxiosError) => {
  return {
    data: null,
    headers: (error as AxiosError).response?.headers,
    error,
  };
};

export default {
  option(path: string) {
    return api.options(path);
  },
  async get<T>(path: string, params = {}) {
    try {
      const res = await api.get(path, {
        params,
      });
      return consolidateResponse<T>(res);
    } catch (error) {
      return consolidateError(error as AxiosError);
    }
  },
  async post<T>(path: string, data = {}, params = {}) {
    try {
      const res = await api.post(path, data, {
        params,
      });
      return consolidateResponse<T>(res);
    } catch (error) {
      return consolidateError(error as AxiosError);
    }
  },
  async put<T>(path: string, data = {}, params = {}) {
    try {
      const res = await api.put(path, data, {
        params,
      });
      return consolidateResponse<T>(res);
    } catch (error) {
      return consolidateError(error as AxiosError);
    }
  },
  async patch<T>(path: string, data = {}, params = {}) {
    try {
      const res = await api.patch(path, data, {
        params,
      });
      return consolidateResponse<T>(res);
    } catch (error) {
      return consolidateError(error as AxiosError);
    }
  },
  async delete<T>(path: string, params = {}) {
    try {
      const res = await api.delete(path, {
        params,
      });
      return consolidateResponse<T>(res);
    } catch (error) {
      return consolidateError(error as AxiosError);
    }
  },
  async deleteWithPayload<T>(path: string, params = {}, data = {}) {
    try {
      const res = await api.delete(path, {
        data,
        params,
      });
      return consolidateResponse<T>(res);
    } catch (error) {
      return consolidateError(error as AxiosError);
    }
  },
  getBlob(path: string, params = {}) {
    return api.get(path, {
      responseType: "blob",
      params,
    });
  },
  postBlob(path: string, data = {}, params = {}) {
    return api.post(path, data, {
      responseType: "blob",
      params,
    });
  },
  postFileAndData(path: string, data = {}, params = {}) {
    return api.post(path, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      params,
    });
  },
};
