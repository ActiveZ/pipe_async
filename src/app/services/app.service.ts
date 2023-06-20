import { Injectable } from '@angular/core';
import { Observable, Subject, map, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  listNumbers$ = new Subject<number[]>();

  constructor() {
    // this.listNumbers2$.next(this.generateArray(4));
  }

  refreshListNumbers() {
    timer(1000).subscribe(() => {
      this.listNumbers$.next(this.generateArray(4));
    });
  }

  generateArray(size: number): number[] {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 10));
  }
}
