import { Component, Inject, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-contact-modal',
  templateUrl: './edit-contact-modal.component.html',
  styleUrls: ['./edit-contact-modal.component.scss']
})
export class EditContactModalComponent implements OnInit {
  updateContactList = new EventEmitter<any>();
  cotactForm: FormGroup;
  isAdd = false;
  constructor(
    readonly matDialogRef: MatDialogRef<EditContactModalComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    readonly contact: FormBuilder,
  ) { }

  ngOnInit(): void {
    console.log(this.dialogData);
    this.isAdd = this.dialogData.isAdd 
    this.initializeForm();
  }

  initializeForm() {
    let formcontrol = {};
    formcontrol = {
      name: new FormControl(!this.isAdd ? this.dialogData.contact.name : null, [Validators.required]),
      country: new FormControl(!this.isAdd ? this.dialogData.contact.country : null, [Validators.required]),
      phone: new FormControl(!this.isAdd ? this.dialogData.contact.phone : null, [Validators.required])
    };

    this.cotactForm = this.contact.group(formcontrol);
  }

  saveContact() {
    this.cotactForm.value.id = this.dialogData.contact.id;
    const data = {
      "contact": this.cotactForm,
      "isAdd": this.isAdd
    };
    this.updateContactList.emit(data);
    this.matDialogRef.close();
  }

  closeDialog() {
    this.matDialogRef.close();
  }

}
