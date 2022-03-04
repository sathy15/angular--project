import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private url = 'https://shravanworksheet.herokuapp.com/api/alltasks/';

  constructor(private httpClient: HttpClient) {}

  public getAllTasksService() {
    return this.httpClient.get(this.url);
  }
  public createTaskService(task) {
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.post(this.url, JSON.stringify(task), {
      headers: headers,
    });
  }
  public getTaskService(id) {
    return this.httpClient.get(this.url + id);
  }
  public deleteTaskService(id) {
    return this.httpClient.delete(this.url + id);
  }
  public updateTaskService(id, task) {
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.put(this.url + id, JSON.stringify(task), {
      headers: headers,
    });
  }
}
