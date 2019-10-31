import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

import {Numbers} from './numbers';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor( private http: HttpClient) { }

  getTask(): Observable<Numbers[]> {
    return this.http.get<Numbers[]>('http')
      .pipe(
        tap(() => console.log('successful '))
      );
  }
}
