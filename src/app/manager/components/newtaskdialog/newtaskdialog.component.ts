import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newtaskdialog',
  templateUrl: './newtaskdialog.component.html',
  styleUrls: ['./newtaskdialog.component.scss']
})
export class NewtaskdialogComponent implements OnInit {

  minDate:Date;

  constructor() {
    this.minDate = new Date();
  }

  ngOnInit(): void {
  }

}
