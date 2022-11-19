import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TodoDTO} from "../assets/models/TodoDTO";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private resourceUrl: string = "http://localhost/api/todos"
  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<TodoDTO[]>{
    return this.httpClient.get<TodoDTO[]>( this.resourceUrl);
  }

  findOne(id: number): Observable<TodoDTO>{
    return this.httpClient.get<TodoDTO>( `${this.resourceUrl}/${id}`)
  }

  update(id: number | undefined, todo: TodoDTO):Observable<TodoDTO>{
    return this.httpClient.put( `${this.resourceUrl}/${id}`, {...todo}, {
      headers:{
        ContentType: 'application/json'
      }
    } )
  }

  create( todo: TodoDTO):Observable<TodoDTO>{
    return this.httpClient.post<TodoDTO>( this.resourceUrl, {...todo}, {
      headers:{
        ContentType: 'application/json'
      }
    } );
  }

  delete(id: number | undefined):Observable<any>{
    return this.httpClient.delete( `${this.resourceUrl}/${id}`);
  }
}
