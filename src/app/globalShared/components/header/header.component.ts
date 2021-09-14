import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appRoutesNames } from 'src/app/app.routes.names';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(protected router: Router,
    ) { }

  ngOnInit(): void {
  }
  

  logOut() {
    window.sessionStorage.clear();
    this.router.navigate([`${appRoutesNames.LOGIN}`]);
  }
}
