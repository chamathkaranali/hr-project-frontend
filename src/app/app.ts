import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./page/home/home";
import { Dashboard } from "./page/dashboard/dashboard";
import { Header } from "./page/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Dashboard, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('forHRProject');
}
