import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hero-content-text',
  templateUrl: './hero-content-text.component.html',
  styleUrls: ['./hero-content-text.component.css'],
})
export class HeroContentTextComponent implements OnInit {


  @Input('color') color: any;
  @Input('content') content: any;
  constructor() { }

  ngOnInit(): void {
  }

}
