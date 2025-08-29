import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 nav={
  item1:'Categories',
  item2:'Furniture',
  item3:'Interior Design',
  item4:'Signup'
  }
}
