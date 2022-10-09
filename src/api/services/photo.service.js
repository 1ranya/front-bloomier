import http from "../../http-commons";

class PhotoDataService {
  getAll() {
    return http.get("/photos");
  }

//   get(id) {
//     return http.get(`/tutorials/${id}`);
//   }

  create(data) {
    return http.post("/photos", data);
  }

  update(id, data) {
    return http.put(`/photos/${id}`, data);
  }

//   delete(id) {
//     return http.delete(`/tutorials/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new PhotoDataService();