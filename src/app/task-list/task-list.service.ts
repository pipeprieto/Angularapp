import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  constructor(private http:HttpClient) { }

  getData():any{
    return this.http.get<any>('');
  }
}
