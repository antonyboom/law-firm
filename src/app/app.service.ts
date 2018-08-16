import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

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
}
