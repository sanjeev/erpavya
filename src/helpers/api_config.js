//export const BASEAPI_URL_LOCAL = "http:/ / 127.0.0.1: 4000 / ";
export const BASEAPI_URL_LOCAL = "https://erp-apis.avyatech.com/";
export const BASEAPI_URL = "https://erp-apis.avyatech.com/";

//export const BASEAPI_URL = "http://127.0.0.1:4000/";
const APIURL = window.location.host.includes('localhost') ? BASEAPI_URL_LOCAL : BASEAPI_URL;
export const API_BASE_URL = APIURL + 'api/';
export const API_PUBLIC_BASE_URL = APIURL + 'public/uploads/';
export const LoginAPIURL = APIURL + 'web-api/';