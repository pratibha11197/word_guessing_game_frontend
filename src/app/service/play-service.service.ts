import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayServiceService {

  constructor(private http: HttpClient) {}

  getWord(): Observable<any> {
    return this.http.get('http://localhost:8081/game/word');
  }
}
