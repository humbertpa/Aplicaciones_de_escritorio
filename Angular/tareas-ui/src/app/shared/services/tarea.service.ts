import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private httpClient: HttpClient) {
  }
  
  find(): Observable<any> {
    const url: string = 'https://jsonplaceholder.typicode.com/posts/1';
    return this.httpClient.get(url);
  }

}
