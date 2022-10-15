import http from "../../http-commons";

class PhotoDataService {
  getAll() {
    return http.get("/photos");
  } 

  get(id) {
    return http.get(`/photos/${id}`);
  }

  create(data) {
    return http.post("/photos", data);
  }

  update(id, data) {
    return http.put(`/photos/${id}`, data);
  };

//   delete(id) {
//     return http.delete(`/photos/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/photos`);
//   }

//   findByTitle(title) {
//     return http.get(`/photos?title=${title}`);
//   }
}

export default new PhotoDataService();