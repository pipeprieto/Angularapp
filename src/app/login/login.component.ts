import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login!:FormGroup;
  constructor(private readonly fg:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.login = this.initForm();
  }

  initForm():FormGroup{
    return this.fg.group({
      username:['',[Validators.required]],
      pass:['',[Validators.required]]
    })
  }

  formSubmit(){
    this.router.navigate(['/taskList']);
  }

}
