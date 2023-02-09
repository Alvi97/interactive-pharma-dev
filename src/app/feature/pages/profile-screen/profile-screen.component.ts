import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.scss']
})


export class ProfileScreenComponent {

  profileForm = new FormGroup({
    country:new FormControl(''),
    firstName:new FormControl(''),
    title:new FormControl(''),
    lastName:new FormControl(''),
    seniority: new FormControl(''),
    speciality: new FormControl(''),
    placeOfWork: new FormControl(''),
    email: new FormControl(''),
    mobileNumber: new FormControl(''),
    researchInterests: new FormControl(''),
    previousSpeakerExperiences: new FormControl(''),
    languages: new FormControl(''),
    biografy: new FormControl('')

  });

  constructor() { }

  ngOnInit() {

  }
  createProfile() {
    console.log(this.profileForm.value);
  }
}
