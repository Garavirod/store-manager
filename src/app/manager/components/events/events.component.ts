import {ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NewtaskdialogComponent } from '../newtaskdialog/newtaskdialog.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  items: string[] = ['Sneakers','Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers','Loafers', 'Moccasins', 'Sneakers'];
  
  ngOnInit(): void {
  }

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(NewtaskdialogComponent);
  }
}
