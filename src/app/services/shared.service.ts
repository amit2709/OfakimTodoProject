import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private id = new BehaviorSubject(0);
  sharedId = this.id.asObservable();

  constructor() { }

  nextId(id: number) {
    this.id.next(id)
  }
  
}
