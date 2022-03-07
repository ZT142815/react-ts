const isDev = process.env.NODE_ENV === 'development';
const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = 9000;

module.exports = {
  isDev,
  SERVER_HOST,
  SERVER_PORT,
};
