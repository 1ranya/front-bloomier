import http from "../../http-commons";
import { sortByDate } from "../../utils/utils";

class PhotoDataService {
  async getAll() {
    let photos = http.get("/photos");
    photos = await photos
    let result = sortByDate(photos.data)
    return result;
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