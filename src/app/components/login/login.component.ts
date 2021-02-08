import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
// Model
import { UserModel } from '../../models/userModel';
// Service
import { UsersService } from '../../services/users.service';
import { SharedService } from "../../services/shared.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id:number;
  users: UserModel[]
  constructor(
    private usersService: UsersService, private route:Router,private sharedService: SharedService
   ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.usersService.getUsers().subscribe(res=>{
      res.forEach((user)=>{
        if(f.controls['email'].value === user.email && f.controls['username'].value === user.name){
          this.sharedService.nextId(user.id)
          this.route.navigateByUrl('/todo')
        }
      })
    },
    err=>{
      
    })
  }


  getuser(){
    
    
  }

}
