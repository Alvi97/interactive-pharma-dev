import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.scss']
})
export class CreateNewPasswordComponent implements OnInit{
public successMessage: boolean = false;
public showPassword: boolean = false;
public showConfirmPassword: boolean = false;

  newPasswordForm = new FormGroup({
    password: new FormControl(''),
    newPassword: new FormControl(''),
  });
   changePassword() {
      console.log(this.newPasswordForm.value);
      this.successMessage = true;
    }
      constructor() { }

      ngOnInit() {

      }
}
