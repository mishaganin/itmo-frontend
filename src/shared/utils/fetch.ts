import { isServer, PORT } from '../env';

const envAwareFetch = async (url: string, options?: Record<string, unknown>) => {
  const fetchUrl =
    isServer && url.startsWith('/') ? `http://localhost:${PORT}${url}` : url;

  const res = await fetch(fetchUrl, options);
  return await res.json();
};

export { envAwareFetch as fetch };
