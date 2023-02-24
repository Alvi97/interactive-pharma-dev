import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration-and-profiling',
  templateUrl: './registration-and-profiling.component.html',
  styleUrls: ['./registration-and-profiling.component.scss']
})
export class RegistrationAndProfilingComponent implements OnInit {
  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;
  profileForm = new FormGroup({
    title: new FormControl(''),
    location: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    seniority: new FormControl(''),
    speciality: new FormControl(''),
    placeOfWork: new FormControl(''),
    email: new FormControl(''),
    professionalNumber: new FormControl(''),
    cellPhoneNumber: new FormControl(''),
    password: new FormControl(''),
    newPassword: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {

  }
  createProfile() {
    console.log(this.profileForm.value);
  }
}

