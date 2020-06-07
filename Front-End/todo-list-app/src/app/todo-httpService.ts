import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export class TodoHttpService {
  private baseUrl = "https://localhost:5050";

  constructor(private http: HttpClient) { }

  getAllTasks() {
    return this.http.get(this.baseUrl + "/view-all");
  }

  getTask(blogId): any {
    let myResponse = this.http.get(
      this.baseUrl + "/view" + "/" + blogId
    );
    return myResponse;
  }

  deleteTask(blogId): any {
    let data = {};
    let myResponse = this.http.post(
      this.baseUrl + "/" + blogId + "/delete",
      data
    );
    return myResponse;
  }

  editTask(blogId, blogData): any {
    let myResponse = this.http.put(this.baseUrl + '/' + blogId + '/edit', blogData)
    return myResponse;
  }

  SendUserData(blogData): any {
    let myResponse = this.http.post(this.baseUrl + '/registration', blogData)
    return myResponse;
  }
}
