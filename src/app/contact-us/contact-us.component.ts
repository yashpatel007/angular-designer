import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  @Input('backdropColor') backdropColor: any;
  @Input('backdropImage') backdropImage: any;

  contact: any = {
    street: "555 N Broad street",
    city: "Doylestown",
    state: "PA",
    zip: "18901"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
