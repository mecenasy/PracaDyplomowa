const protocol = 'http://';
const host = 'localhost';
const port = ':3005';
const path = '';
const basePath = [protocol, host, port, path].join('');

const authorizationHeaders = {
  'Content-Type': 'application/json',
};

export { basePath, authorizationHeaders };
