import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login-mordern',
  templateUrl: './login-mordern.component.html',
  styleUrls: ['./login-mordern.component.css']
})
export class LoginMordernComponent implements OnInit {

  user_login: any;
  user_password: any;
  constructor(private auth: AuthServiceService, private rout: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.user_login && this.user_password) {
      let user = this.auth.authenticate("login_password", this.user_login, this.user_password);
      console.log(`User login ${this.user_login} and pass ${this.user_password}`);
      this.router.navigate(['/']);
    }
  }
}
