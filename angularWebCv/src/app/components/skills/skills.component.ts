import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {app} from "../../../../server";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
