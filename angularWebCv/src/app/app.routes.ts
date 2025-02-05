import { Routes } from '@angular/router';
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {ProjectComponent} from "./components/project/project.component";
import {ContactComponent} from "./components/contact/contact.component";
import {SkillsComponent} from "./components/skills/skills.component";
import {TodolistComponent} from "./components/todolist/todolist.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige vers /home
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'json', component: TodolistComponent},
];
