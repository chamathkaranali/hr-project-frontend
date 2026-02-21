import { Component } from '@angular/core';
import { Dashboard } from "../dashboard/dashboard";

@Component({
  selector: 'app-header',
  imports: [Dashboard],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
