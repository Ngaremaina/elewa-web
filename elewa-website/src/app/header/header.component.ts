import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuopen = false;

  toggleMenu() {
    this.menuopen = !this.menuopen;
  }

}
