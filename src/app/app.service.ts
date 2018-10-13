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

  getFragment(): Observable<any> {
    return this.subject.asObservable();
  }

  sendRequest (data) {

    const formData = new FormData();

    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('email', data.email);
    formData.append('message', data.message);

    return this.http.post(environment.sender, data, {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });
  }
}
