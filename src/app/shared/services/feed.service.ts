import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  getAllQuestions() {
    return this.http.get('https://api.myjson.com/bins/dck5b');
  }

  getAllAnswers() {
    return this.http.get('https://api.myjson.com/bins/hildr');
  }

}


