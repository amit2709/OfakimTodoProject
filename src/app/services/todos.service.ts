import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TodoModel } from '../models/todosModel'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  constructor(
    private http: HttpClient
  ) { }

  getTodos(): Observable<TodoModel[]> {
    console.log(this.todosUrl);
    
    return this.http.get<TodoModel[]>(this.todosUrl)
  }
}
