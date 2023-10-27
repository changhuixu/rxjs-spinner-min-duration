import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-spinner-default',
  templateUrl: './spinner-default.component.html',
  styleUrls: ['./spinner-default.component.css']
})
export class SpinnerDefaultComponent implements OnInit {
  loading = false;

  constructor(private svc: AppService) {}
  ngOnInit() {}

  load(milliseconds: number) {
    this.loading = true;
    this.svc
      .apiCall(milliseconds)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(x => {
        console.log(x);
      });
  }
}
