import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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


  constructor(private http: HttpClient,) {
    // this.angulartics2GoogleAnalytics.startTracking();
  }

    ngOnInit(): void {

  
      // this.profileForm.get('country').valueChanges
      // .subscribe(country => console
      // .log('this.profileForm.get("country").valueChanges', country));
      
      //     this.countryFormControl.valueChanges
      // .subscribe(country => console
      // .log('this.countryFormControl.valueChanges', country));
        }
      
  
    // onCountrySelected($event: Country) {
    //   console.log($event);
    // }
  
    
  createProfile() {
    console.log(this.profileForm.value);
  }
}
