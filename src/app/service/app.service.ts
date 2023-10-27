import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor() {}

  /**
   * A service method to simulate API request with a delay. This method returns an observable of an object.
   * @param milliseconds waiting time
   */
  apiCall(milliseconds: number): Observable<any> {
    return timer(milliseconds).pipe(
      map(_ => {
        return {
          make: 'abc',
          year: 2019,
          price: 29000
        };
      })
    );
  }
}
