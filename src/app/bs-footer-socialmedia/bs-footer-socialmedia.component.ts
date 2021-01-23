import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-footer-socialmedia',
  templateUrl: './bs-footer-socialmedia.component.html',
  styleUrls: ['./bs-footer-socialmedia.component.css']
})
export class BsFooterSocialmediaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
