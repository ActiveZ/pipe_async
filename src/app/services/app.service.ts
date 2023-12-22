import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  listNumbers$ = new Subject<number[]>(); // v1
  
  private dataSubject = new BehaviorSubject<number[]>([]); // v2
  data$ = this.dataSubject.asObservable(); // v2

  constructor() { }

  // v1
  refreshListNumbers() {
    timer(1000).subscribe(() => {
      this.listNumbers$.next(this.generateArray(4));
      this.updateData(this.generateArray(4));
    });
  }

  // v2
  updateData(newData: number[]) {
    this.dataSubject.next(newData);
  }

  generateArray(size: number): number[] {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 10));
  }
}
