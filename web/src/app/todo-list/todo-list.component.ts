import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { TodoCreateComponent } from '../todo-create/todo-create.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoService]
})

export class TodoListComponent implements OnInit {
  todos: Todo[];
  completeds: Todo[];
  pendings: Todo[];

  selectedTodo: Todo;

  todo: Todo;

  constructor(private todoService: TodoService) {}

  getTodos() {
     this.todoService.getTodos().then(todos => this.todos = todos);
  }

  getCompleteds() {
     this.todoService.getCompleteds().then(completeds => this.completeds = completeds);
  }

  getPendings() {
     this.todoService.getPendings().then(pendings => this.pendings = pendings);
  }

  update() {
    this.todoService.update(this.todo);
  }

  ngOnInit(): void {
     this.getTodos();
     this.getCompleteds();
     this.getPendings();
  }

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }
}
