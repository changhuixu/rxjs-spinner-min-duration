import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { combineLatest, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-spinner-with-min-duration',
  templateUrl: './spinner-with-min-duration.component.html',
  styleUrls: ['./spinner-with-min-duration.component.css']
})
export class SpinnerWithMinDurationComponent implements OnInit {
  loading = false;

  constructor(private svc: AppService) {}
  ngOnInit() {}

  load(miliseconds: number) {
    this.loading = true;
    combineLatest(timer(1000), this.svc.apiCall(miliseconds))
      .pipe(map(x => x[1]))
      .subscribe(x => {
        console.log(x);
        this.loading = false;
      });
  }
}
