import { Component, OnInit } from '@angular/core';
import {TodoDTO} from "../../assets/models/TodoDTO";
import {TodoService} from "../todo.service";
import {MessageService} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo: TodoDTO = {};
  constructor( private todoService: TodoService, private messageService: MessageService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  create(): void{
    console.log( this.todo );
    if( !this.todo.title ){
      return this.messageService.add({severity:'error', summary: 'Error', detail: 'Please enter non empty title'});
    }
    this.todoService.create( { title: this.todo.title, completed: false}).subscribe(
      res => {
        this.todo = {}
        //window.location.reload();
        this.messageService.add({severity:'success', summary: 'Success', detail: "todo was create successfully" });
      },
      err => {
        this.messageService.add({severity:'error', summary: 'Error', detail: 'todo was failed creating'});
      }
    )
  }

}
