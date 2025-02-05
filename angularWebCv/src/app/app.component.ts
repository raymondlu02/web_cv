import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Raymond LU';
}
