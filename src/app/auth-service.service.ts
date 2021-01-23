import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }


  authenticate(type: any, username?: any, password?: any) {
    switch (type) {
      case 'login_password':
        if (username && password) {
          if (username == "yash@mail.com" && password == "1234") {
            let user_from_server = {
              name: "Yash Patel",
              login: "yash@mail.com",
              context: []
            }
          }
        }

    }
  }


}
