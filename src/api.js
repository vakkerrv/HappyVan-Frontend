import axios from "axios";

import store from './store'
import { logout } from './actions/userActions'

const baseUrl = "http://178.154.241.63:8000/api/1";




//request interceptor to add the auth token header to requests
axios.interceptors.request.use(
    (config) => {
      // const accessToken = localStorage.getItem("accessToken");
      // const accessToken = getState().userLogin.userInfo.access;
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      if (userInfo) {
        const accessToken = userInfo.access;
        config.headers['Authorization'] = 'Bearer ' + accessToken;
        config.headers['Content-type'] = 'application/json';
      }
      return config;
      },
      (error) => {
      Promise.reject(error);
      }
);

//response interceptor to refresh token on receiving token expired error
axios.interceptors.response.use(
  (response) => {
    return response;
  },
    function (error) {
      const originalRequest = error.config;

      let data = localStorage.getItem('userInfo') ? 
                JSON.parse(localStorage.getItem('userInfo')) : null
      let refreshToken = localStorage.getItem('userInfo') ? 
                data.refresh : null

      if (error.response.status === 401 && originalRequest.url === 
        `${baseUrl}/token/refresh/`) {
            store.dispatch(logout())
            // history.push(redirect)
            return Promise.reject(error);
          }

      if (
            refreshToken &&
            error.response.status === 401 &&
            !originalRequest._retry
          ) {
            originalRequest._retry = true;
            return axios
              .post(`${baseUrl}/token/refresh/`, { refresh: refreshToken })
              .then((res) => {
                if (res.status === 200) {
                  // localStorage.setItem("access", res.data.accessToken);
                  data['access'] = res.data.access
                  localStorage.setItem('userInfo', JSON.stringify(data));
                  console.log("Access token refreshed!");
                  return axios(originalRequest);
                }
              });
          }
      return Promise.reject(error);
      }
);



//functions to make api calls
const api = {
  signup: (body) => {
    return axios.post(`${baseUrl}/accounts/signup/`, body);
  },
  login: (body) => {
    return axios.post(`${baseUrl}/accounts/login/`, body);
  },
  refreshToken: (body) => {
    return axios.post(`${baseUrl}/accounts/refresh/`, body);
  },
  get: (link) => {
    return axios.get(`${baseUrl}/${link}`);
  },
  post: (link, body) => {
    return axios.post(`${baseUrl}/${link}`, body);
  },
  put: (link, body) => {
    return axios.put(`${baseUrl}/${link}`, body);
  },
  delete: (link) => {
    return axios.delete(`${baseUrl}/${link}`);
  },
};
export default api;
