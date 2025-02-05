import {Component, OnInit} from '@angular/core';
import {Post, todoService} from "../../Service/todo/todo.service";
import { TableModule } from 'primeng/table';


@Component({
  selector: 'todo-list',
  standalone: true,
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss',
  imports: [
    TableModule
  ]
})
export class TodolistComponent implements OnInit {
  jsonPlaceholder : Post[] = [];

  constructor (private todoService : todoService){}

  ngOnInit(): void {
    this.todoService.pokemonDitto().subscribe((elem :Post[]) =>{
        this.jsonPlaceholder = elem;
      }
    );

  }
}


