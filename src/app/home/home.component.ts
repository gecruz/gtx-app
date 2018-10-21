import { Component, Host } from '@angular/core';
import { AppComponent } from '@app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  menu = new Array();

  constructor(
    @Host() parent: AppComponent,
  ) {
    this.menu = parent.menu;
  }

}
