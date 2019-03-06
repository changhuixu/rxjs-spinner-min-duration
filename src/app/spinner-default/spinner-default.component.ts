import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-spinner-default',
  templateUrl: './spinner-default.component.html',
  styleUrls: ['./spinner-default.component.css']
})
export class SpinnerDefaultComponent implements OnInit {
  loading = false;

  constructor(private svc: AppService) {}
  ngOnInit() {}

  load(miliseconds: number) {
    this.loading = true;
    this.svc.apiCall(miliseconds).subscribe(x => {
      console.log(x);
      this.loading = false;
    });
  }
}
