import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    // Object.assign(config.headers, { elvin: "1234" });
    // console.log(config);
    console.log("requset");
    document.getElementById("overlay").style.display = "block";
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    // Object.assign(response, {
    //   data: { list: response.data, userList: "Elvin user List" },
    // });
    document.getElementById("overlay").style.display = "none";

    console.log("response");
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default api;
