import axios from 'axios';
import { API_BASE_URL } from './api_config';
import { toast } from 'react-hot-toast';

const baseURL = API_BASE_URL;

const instance = axios.create({
    baseURL,
});

/**
 * Retrieves the value of a cookie by its name from the document's cookies.
 *
 * @function
 * @param {string} name - The name of the cookie to retrieve.
 * @returns {string | undefined} The value of the cookie if found, or `undefined` if the cookie is not found.
 */
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length > 1) {
    return parts.pop().split(';').shift();
  }
};

/**
 * Retrieves and validates an authentication token from cookies.
 *
 * @function
 * @returns {string} The authentication token if found in cookies.
 * @throws {Error} If the token is not found or is invalid, an error is thrown with an error message.
 */
const getToken = () => {
  const token = getCookie('token');
  
  if(!token)
  {
    //toast.error('Invalid Token');
    //throw new Error('Invalid Token');
  }
  return token;
};

const headers_with_file = {
  headers: {
    Authorization: `Bearer ${getToken()}`,
    'Content-Type': 'multipart/form-data',
  }
}

const headers_with_token = {
  headers: {
    Authorization: `Bearer ${getToken()}`,
  }
}

/**
 * Handles and displays error messages from API responses.
 *
 * @function
 * @param {Error} error - The error object received from an API response, which may contain an error message.
 */
export const handleError = (error) => {
  if (error.response.data.error) {
    toast.error(error.response.data.error);
  }
  else {
    toast.error('Authentication failed');
  }
}

/**
 * Makes a GET request without requiring a token.
 *
 * @async
 * @function
 * @param {string} url - The URL for the GET request.
 * @param {Object} params - Query parameters to include in the request.
 * @returns {Object} The response data from the GET request.
 * @throws {Error} If the request encounters an error.
 */
export const getWithoutToken = async (url, params) => {
  try {
    const response = await instance.get(url, { params });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Makes a GET request with a valid token for authentication.
 *
 * @async
 * @function
 * @param {string} url - The URL for the GET request.
 * @returns {Object} The response data from the GET request.
 * @throws {Error} If the request encounters an error or the token is invalid.
 */
export const get = async (url) => {
  try {
    const response = await instance.get(url, headers_with_token);
    return response.data;
  } catch (error) {
    handleError(error);
    return [];
  }
};

/**
 * Makes a POST request with data and a valid token for authentication.
 *
 * @async
 * @function
 * @param {string} url - The URL for the POST request.
 * @param {Object} values - The data to send in the request.
 * @returns {Object} The response data from the POST request.
 * @throws {Error} If the request encounters an error, including authentication errors.
 */
export const post = async (url, values) => {
  try {
    const response = await instance.post(url, values, headers_with_file);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Makes a PUT request with data and a valid token for authentication.
 *
 * @async
 * @function
 * @param {string} url - The URL for the PUT request.
 * @param {Object} values - The data to send in the request.
 * @returns {Object} The response data from the PUT request.
 * @throws {Error} If the request encounters an error, including authentication errors.
 */
export const put = async (url, values) => {
  try {
    const response = await instance.put(url, values, headers_with_file);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Makes a POST request without requiring a token.
 *
 * @async
 * @function
 * @param {string} url - The URL for the POST request.
 * @param {Object} values - The data to send in the request.
 * @returns {Object} The response data from the POST request.
 * @throws {Error} If the request encounters an error.
 */
export const simplePost = async (url, values) => {
  try {
    const response = await instance.post(url, values, headers_with_token);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Makes a POST request without requiring a token.
 *
 * @async
 * @function
 * @param {string} url - The URL for the POST request.
 * @param {Object} values - The data to send in the request.
 * @returns {Object} The response data from the POST request.
 * @throws {Error} If the request encounters an error.
 */
export const postWithoutToken = async (url, values) => {
  try {
    const response = await instance.post(url, values);
    return response.data;
  } catch (error) {
    if (error.response.data.error) {
      toast.error(error.response.data.error);
    }
    else {
      toast.error('Authentication failed');
    }
  }
};


/**
 * Makes a PUT request with data and a valid token for authentication.
 *
 * @async
 * @function
 * @param {string} url - The URL for the PUT request.
 * @param {Object} data - The data to send in the request.
 * @returns {Object} The response data from the PUT request.
 * @throws {Error} If the request encounters an error.
 */
export const simplePut = async (url, data) => {
  try {
    const response = await instance.put(url, data, headers_with_token);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Makes a DELETE request with a valid token for authentication.
 *
 * @async
 * @function
 * @param {string} url - The URL for the DELETE request.
 * @returns {Object} The response data from the DELETE request.
 * @throws {Error} If the request encounters an error.
 */
// Function to make a DELETE request
export const remove = async (url) => {
  try {
    const response = await instance.delete(url, headers_with_token);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};