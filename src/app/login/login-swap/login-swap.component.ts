import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-swap',
  templateUrl: './login-swap.component.html',
  styleUrls: ['./login-swap.component.css']
})
export class LoginSwapComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  toggleSignin() {
    // imp : diable null checking by ! in ts
    document.querySelector('.cont')!.classList.toggle('s--signup');
  }

}
