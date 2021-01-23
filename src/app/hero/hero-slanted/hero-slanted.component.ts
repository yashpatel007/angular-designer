import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero-slanted',
  templateUrl: './hero-slanted.component.html',
  styleUrls: ['./hero-slanted.component.css']
})
export class HeroSlantedComponent implements OnInit {


  heroTextContent: any = {
    title: "This is a heading",
    subtitle: "this is a sub titile",
    buttontext: "Click me"

  };
  constructor() { }

  ngOnInit(): void {
  }

}
