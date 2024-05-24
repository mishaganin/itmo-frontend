export const isServer = typeof window === 'undefined';
export const isClient = !isServer;
export const {NODE_ENV} = process.env;
export const PORT = 3000;
