import { Component, OnInit } from '@angular/core';
import {TodoDTO} from "../../assets/models/TodoDTO";
import {TodoService} from "../todo.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: TodoDTO[] = [];
  selectedTodo: TodoDTO = {}
  constructor( private todoService: TodoService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void{
    this.todoService.findAll().subscribe(
      res => {
        this.todos = res.map( (todo:TodoDTO) => {
          let completed:any = todo.completed;
          todo.completed = completed===1 ? true : false;
          return todo;
        });
      },
      err => this.todos = []
    )
  }

  updateTodo(todo: TodoDTO):void{
    this.todoService.update( todo.id, todo ).subscribe(
      res => this.messageService.add({severity:'success', summary: 'Success', detail: "todo was update successfully" }),
      err => this.messageService.add({severity:'error', summary: 'Error', detail: 'todo was failed update'})
    )
  }

  deleteTodo(selectedTodo: TodoDTO): void{
    this.todoService.delete( selectedTodo.id ).subscribe(
      res => {
        this.todos = this.todos.filter( todo => todo.id !== selectedTodo.id )
        this.messageService.add({severity:'success', summary: 'Success', detail: "todo was deleted successfully" })
      },
      err => this.messageService.add({severity:'error', summary: 'Error', detail: 'todo was failed deleted'})
    )
  }

}
