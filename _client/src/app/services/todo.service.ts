import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
  private apiUrl = '/api/v1/';
  constructor(private _http: Http) {

  }

  getTodos() {
    return this._http.get(this.apiUrl + 'todos');
  }

  saveTodo(todo) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(this.apiUrl + 'todo');
    return this._http.post(this.apiUrl + 'todo', JSON.stringify(todo),
      { headers: headers })
      .map(res => res.json());
  }

  updateTodo(todo) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(this.apiUrl + 'todo');
    return this._http.put(this.apiUrl + 'todo/' + todo._id, JSON.stringify(todo),
      { headers: headers });
      
  }

  deleteTodo(id){
    return this._http.delete(this.apiUrl + 'todo/' + id);
  }

}
