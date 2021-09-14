import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditContactModalComponent } from '../edit-contact-modal/edit-contact-modal.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  @Input() contacts: any
  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.contacts);
  }

  update(contact: any) {
    this.editViewNav(false, contact);
  }

  addContact(){
    this.editViewNav(true);
  }

  editViewNav(isAdd: boolean, contact: any = {}) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '600px';
    dialogConfig.height = '350px';
    dialogConfig.data = {
      "contact": contact,
      "isAdd": isAdd
  };
    const dialogRef = this.matDialog.open(EditContactModalComponent, dialogConfig);
    const dialogSubmitSubscription = 
    dialogRef.componentInstance.updateContactList.subscribe(result => {
      if(result.isAdd){
        this.contacts.push(result.contact.value)
      }else{
        for (let x = 0; x < this.contacts.length; x++) {
          if (this.contacts[x].id === result.contact.value.id) {
            this.contacts[x].id = this.contacts.length;
            this.contacts[x].name = result.contact.value.name;
            this.contacts[x].phone = result.contact.value.phone;
            this.contacts[x].country = result.contact.value.country;
          }
    
        }
      }
    dialogSubmitSubscription.unsubscribe();
  });
  
  }

  delete(contact: any) {
    for (let x = 0; x < this.contacts.length; x++) {
      if (this.contacts[x].id === contact.id) {
        this.contacts.splice(this.contacts[x], 1);
      }

    }
  }

}
