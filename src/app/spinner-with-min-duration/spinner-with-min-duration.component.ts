import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { combineLatest, timer } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-spinner-with-min-duration',
  templateUrl: './spinner-with-min-duration.component.html',
  styleUrls: ['./spinner-with-min-duration.component.css']
})
export class SpinnerWithMinDurationComponent implements OnInit {
  loading = false;

  constructor(private svc: AppService) {}
  ngOnInit() {}

  load(milliSeconds: number) {
    this.loading = true;
    combineLatest([timer(1000), this.svc.apiCall(milliSeconds)])
      .pipe(
        map(x => x[1]),
        finalize(() => (this.loading = false))
      )
      .subscribe(x => {
        console.log(x);
      });
  }
}
