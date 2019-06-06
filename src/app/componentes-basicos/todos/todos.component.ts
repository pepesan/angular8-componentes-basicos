import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  variable = 'Valor';
  todos = [];
  todoText: any = '';
  todo;
  constructor() { }

  ngOnInit() {
    this.variable = 'Variable modificada';
    this.todoText = 'Valor inicial';
    this.todos = [
      {text: 'hacer la compra'},
      {text: 'revisar el coche'}
    ];
  }

  addTodo() {
    // console.log(this);
    const mitodo = {text: this.todoText};
    this.todos.push(mitodo);
    this.todoText = '';
  }

}
