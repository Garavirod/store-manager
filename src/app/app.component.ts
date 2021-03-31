import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sideBarOpen = false;

  title = 'store-manager';

  sideBarToggler(e:any){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
