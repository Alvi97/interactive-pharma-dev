import {Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation} from '@angular/core';
// import {MatDatepicker} from '@angular/material/datepicker';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';



@Component({
  selector: 'app-sticky-left-card',
  templateUrl: './sticky-left-card.component.html',
  styleUrls: ['./sticky-left-card.component.scss']
})
export class StickyLeftCardComponent {
  selected: Date | null | undefined;
  // @ViewChild('keepOpen') _input: ElementRef | undefined;
  // _openCalendar(picker: MatDatepicker<Date>) {
  //   picker.open();
  // }

  selectedMonth = 'option2';

}
