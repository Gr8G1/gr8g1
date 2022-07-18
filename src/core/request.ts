import axios, { AxiosInstance } from 'axios';

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 6000
});

// # Cancel
(<any>request).isCancel = axios.isCancel;
// # Request
request.interceptors.request.use(function(config) {
  // ...

  return config;
}, function (error) {
  return Promise.reject(error);
});

// # response
request.interceptors.response.use(function(response) {
  // ...

  return response.data;
}, function (error) {
  return Promise.reject(error);
});

/**
 * * CancelToken (:ex)
 *
 * let cancel;
 *
 * @GET URLs, params: { cancelToken: new CancelToken(c => cancel = c) }
 * @POST URLs, payload, { cancelToken: new CancelToken(c => calcel = c) }
 *
 * @Handle request
    if (request.isCancel(err)) {
        console.log('%c', 'color: #fdd835', err.message);
    } else {
        // ... handle Error
    }
 *
 */
export const CancelToken = axios.CancelToken;

export default request;
