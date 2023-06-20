import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  listNumbers$?: Observable<number[]>;
  title = 'pipe_async';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.listNumbers$ = this.appService.listNumbers$.asObservable();
    this.appService.refreshListNumbers();
  }

  reload() {
    this.listNumbers$ = undefined;
    this.appService.refreshListNumbers();
    this.listNumbers$ = this.appService.listNumbers$.asObservable();
    this.appService.listNumbers$.asObservable().subscribe({ // affiche les mêmes données dans la console, recrée une nouvelle instance ?
      next: (data) => console.log('data', data),
    });
  }
}
