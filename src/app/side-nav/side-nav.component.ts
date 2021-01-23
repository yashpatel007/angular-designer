import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {


  navOpen: Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  toggleNav() {
    if (this.navOpen) {
      this.closeNav();
      this.navOpen = false;
    } else {
      this.openNav();
      this.navOpen = true;
    }
  }

  openNav() {
    document.getElementById("mySidenav")!.style.width = "250px";
    document.getElementById("main")!.style.marginLeft = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav")!.style.width = "0";
    document.getElementById("main")!.style.marginLeft = "0";
  }

}
