import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../shared/service/company.service';
import { company } from '../../globalShared/model/company';
import { user } from 'src/app/globalShared/model/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  companyDetails!: any;
  user!: user;
  showCompany: boolean = false;
  contacts = [];

  constructor(private companyService: CompanyService) {

  }

  ngOnInit(): void {
    if (localStorage.getItem("user_data")) {
      this.user = JSON.parse(localStorage.getItem("user_data") as string)
    }
    this.fetchCompany();

  }

  fetchCompany() {
    this.companyService.getCompany().subscribe((res) => {
      this.companyDetails = res.filter((company: company) => {
        return company.id === this.user.companyId;
      });
      if (this.companyDetails.length > 0) {
        this.showCompany = true;
      }
      console.log(this.companyDetails);
    },
      err => {
        console.log(err);
      })
  }

  getContacts(company: company) {
    this.companyService.getContacts().subscribe((res) => {
      this.contacts = res;
    },
      err => {
        console.log(err);
      })
  }

}
