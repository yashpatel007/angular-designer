import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page-hero',
  templateUrl: './home-page-hero.component.html',
  styleUrls: ['./home-page-hero.component.css']
})
export class HomePageHeroComponent implements OnInit {


  heroTextContent: any = {
    title: "This is a heading",
    subtitle: "this is a sub titile",
    buttontext: "Click me"

  };
  constructor() { }

  ngOnInit(): void {
  }

}
