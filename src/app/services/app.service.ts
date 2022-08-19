import { Injectable } from '@angular/core';
import { Subject, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  listNumbers$ = new Subject<number[]>();

  constructor() { }

  refreshListNumbers() {
    timer(1000).subscribe(x => {
      const tmp = [];
      for (let i = 0; i < 4; i++) {
        tmp.push(Math.floor(Math.random() * 10));
      }
      this.listNumbers$.next(tmp);
    });
  }

}
