import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pipe_async';
  listNumbers$?: Observable<number[]>; // v1
  data?: number[]; // v2

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.listNumbers$ = this.appService.listNumbers$.asObservable();
    this.reload();
  }
  
  reload() {
    this.appService.refreshListNumbers();
    // v1
    this.listNumbers$ = undefined;
    this.listNumbers$ = this.appService.listNumbers$.asObservable();
    this.appService.listNumbers$.asObservable().subscribe({ // affiche les mêmes données dans la console, recrée une nouvelle instance ?
      next: (data: any) => console.log('data', data),
    });
    
    // v2
    this.appService.data$.subscribe({
      next: (newData: number[] | undefined) => this.data = newData
    });
    this.data = undefined;
  }
}
