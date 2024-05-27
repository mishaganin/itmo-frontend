import { isServer, PORT } from '../env';

const envAwareFetch = async (url: string, options?: Record<string, unknown>) => {
  console.log(PORT, url, options);
  console.log(`http://localhost:${PORT}${url}`);
  const fetchUrl =
    isServer && url.startsWith('/') ? `http://localhost:${PORT}${url}` : url;

  const res = await fetch(fetchUrl, options);
  return res.json();
};

export { envAwareFetch as fetch };
