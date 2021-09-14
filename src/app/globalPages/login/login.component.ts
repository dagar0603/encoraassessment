import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { appRoutesNames } from 'src/app/app.routes.names';
import { AuthService } from 'src/app/globalShared/service/auth.service';
import { user } from '../../globalShared/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    readonly authService: AuthService,
    protected router: Router,
    readonly login: FormBuilder
  ) { }

  ngOnInit(): void {
    window.localStorage.clear();
    this.initializeForm();
  }

  initializeForm() {
    let formcontrol = {};
    formcontrol = {
      email: new FormControl(null, [Validators.required]),
      pwd: new FormControl(null, [Validators.required])
    };

    this.loginForm = this.login.group(formcontrol);
  }

  getUser() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm).subscribe(
        data => {
          const user = data.filter((userData: user) => { return userData.email === this.loginForm.value.email; });
          if (user.length) {
            localStorage.setItem("user_data", JSON.stringify(user[0]));
            this.router.navigate([`${appRoutesNames.ENCORA}`]);
          }

        },
        err => {
          console.log(err);
        }
      );
    }

  }

}
