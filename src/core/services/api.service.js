import axios from "axios";

const http = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  }
});

const ApiService = {
  init() {

  },

  query(resource, params) {
    return http.get(resource, params).catch(error => {
      throw new Error(`${error}`);
    });
  },

  get(resource, slug = "") {
    return http.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`${error}`);
    });
  },

  post(resource, params) {
    return http.post(`${resource}`, params).catch(error => {
      throw new Error(`${error}`);
    });
  },

  update(resource, slug, params) {
    console.log("update")

    return http.put(`${resource}/${slug}`, params).catch(error => {
      throw new Error(`${error}`);
    });
  },

  put(resource, params) {
    console.log("put")
    return http.post(`${resource}`, {...params, _method: "put"}).catch(error => {
      throw new Error(`${error}`);
    });
  },

  delete(resource) {
    return http.delete(resource).catch(error => {
      throw new Error(`${error}`);
    });
  }
};

window.axios = http;
export default ApiService;
