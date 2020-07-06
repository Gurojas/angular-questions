import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private deleteQuestion = new Subject<number>();
  private emptyConfirmed = new Subject();

  constructor() { }


  announceDelete(index: number) {
    this.deleteQuestion.next(index);
  }

  getAnnounceDelete(): Observable<number> {
    return this.deleteQuestion.asObservable();
  }

  announceEmpty() {
    this.emptyConfirmed.next();
  }

  getAnnounceEmpty(): Observable<any> {
    return this.emptyConfirmed.asObservable();
  }
}
