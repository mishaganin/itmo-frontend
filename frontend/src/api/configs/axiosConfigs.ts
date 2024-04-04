import axios from 'axios';

interface ErrorResponse {
  response?: {
    status: number;
  };
}

export const api = axios.create({
  withCredentials: false,
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 72a2ca284231755115720589c868be9c3caf5122bea2304c12cbdbefabffde1f',
  },
});

const errorHandler = (error: ErrorResponse): Promise<ErrorResponse> => {
  const statusCode = error.response?.status;

  if (statusCode) {
    // TODO create Toast component
    console.error(error);
  }

  return Promise.reject(error);
};

api.interceptors.response.use(undefined, (error) => errorHandler(error));
