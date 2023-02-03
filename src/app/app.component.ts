import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RoutesRecognized} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'interactivepharma';

}
