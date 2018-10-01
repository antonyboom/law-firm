import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor (
    private http: HttpClient
  ) {}

  private subject = new Subject<any>();

  sendFragment(path: string) {
    this.subject.next(path);
  }

  clearFragment() {
    this.subject.next();
  }

  getFragment(): Observable<any> {
    return this.subject.asObservable();
  }

  sendRequest (data) {
    return this.http.post(environment.sender, data, {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });
  }
}
