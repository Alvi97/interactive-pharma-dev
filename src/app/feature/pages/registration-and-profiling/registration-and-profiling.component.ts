import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration-and-profiling',
  templateUrl: './registration-and-profiling.component.html',
  styleUrls: ['./registration-and-profiling.component.scss']
})
export class RegistrationAndProfilingComponent implements OnInit {

  profileForm = new FormGroup({
    title: new FormControl(''),
    location: new FormControl(''),
    fullName: new FormControl(''),
    seniority: new FormControl(''),
    speciality: new FormControl(''),
    placeOfWork: new FormControl(''),
    email: new FormControl(''),
    mobileNumber: new FormControl(''),
    researchInterests: new FormControl(''),
    previousSpeakerExperiences: new FormControl(''),
    languages: new FormControl('')
  });

  constructor() { }

  ngOnInit() {

  }
  createProfile() {
    console.log(this.profileForm.value);
  }
}

