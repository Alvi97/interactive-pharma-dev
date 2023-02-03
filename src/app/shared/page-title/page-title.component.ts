import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RoutesRecognized} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent {
  pageTitle: string = '';

  constructor( private active: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.active.snapshot
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {

        //work in progress to be rechecked
        // will there be multiple page title levels?
        this.pageTitle = data.state.root.children[0].children[0].data['pageTitle'];

      }
    })
  }
}
