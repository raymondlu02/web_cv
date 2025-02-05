import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-skills',
    imports: [
        NgOptimizedImage,
    ],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.css'
})
export class SkillsComponent {
  constructor(private http: HttpClient) {
  }
  downloadCv() {
    const url = 'cv.pdf';  // Chemin direct vers le fichier dans les assets
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CV_Raymond_LU.pdf';
    a.click();
  }
}
