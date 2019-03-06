import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * An observable of current DateTime string. It renders asynchronously in web page.
   */
  time$ = interval(1000).pipe(map(_ => new Date().toString()));
}
