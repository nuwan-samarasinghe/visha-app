import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public success: boolean;
  public error: boolean;

  lat = 38.81326876117266;
  lng = -121.22274450431374;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      const success = params[`success`];
      if (success === 'true') {
        this.success = true;
      } else if (success === 'false') {
        this.error = true;
      }
    });
  }

  ngOnInit(): void {
  }

}
