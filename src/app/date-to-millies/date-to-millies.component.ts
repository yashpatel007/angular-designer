import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'date-to-millies',
  templateUrl: './date-to-millies.component.html',
  styleUrls: ['./date-to-millies.component.css']
})
export class DateToMilliesComponent implements OnInit {



  currentDate: Date = new Date();

  subscription: Subscription = interval(1000).subscribe(val => this.currentDate = new Date());

  constructor() { }

  ngOnInit(): void {
    this.currentDate.getUTCMilliseconds()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
