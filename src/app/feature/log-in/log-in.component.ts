import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

  });


  constructor(private http: HttpClient,) {

  }

    ngOnInit(): void {
        }
      
  
        // onCountrySelected($event: Country) {         
        //   console.log("hoiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",$event);
        // }
         
       createProfile() {
         console.log(this.loginForm.value);
       }

}
