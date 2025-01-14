import { Subject } from 'rxjs';

export class SubjectManager {
  subject$ = new Subject<any>();

  getSubject() {
    return this.subject$.asObservable();
  }

  setSubject(value: any) {
    this.subject$.next(value);
  }
}
