import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private goals = new BehaviorSubject<any>(['The initial goal', 'Another Silly life goal']);
  goal = this.goals.asObservable();
  constructor() { }
  chageGoal(goal){
    this.goals.next(goal);
  }
}
