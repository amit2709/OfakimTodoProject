import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SharedService } from "../../services/shared.service";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  id:number;
  check1:boolean=false;
  check2:boolean=true;
  constructor(
     private route:Router,private sharedService: SharedService
   ) { }

  ngOnInit(): void {
    this.sharedService.sharedId.subscribe(id => this.id = id)
  }

  onSubmit(f: NgForm) {

  }
}
