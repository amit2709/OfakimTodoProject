import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Model
import { TodoModel } from '../../models/todosModel';
// Service
import { SharedService } from "../../services/shared.service";
import { TodosService } from "../../services/todos.service"


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  id:number;
  status: boolean = false;
  todos: TodoModel[] = new Array();

  constructor(private sharedService: SharedService,private todosService: TodosService,private route:Router ) { }

  ngOnInit() {
    this.sharedService.sharedId.subscribe(id => this.id = id)
    this.todosService.getTodos().subscribe(res=>{
      res.forEach((todo)=>{
        if(todo.userId === this.id){
          this.todos.push(todo);
        }
      })

    },
    err=>{
      
    })
  }

  iscomplete(x:number){
    this.todos.forEach((todo)=>{
      if(todo.id === x){
        todo.completed = !todo.completed;
      }
  })
  }
  open(){
    this.route.navigateByUrl('/addTodo')
  }
}
