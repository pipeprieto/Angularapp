import { Component, OnInit } from '@angular/core';
import {TaskListService} from './task-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks!:any;
  constructor(private service:TaskListService, private router:Router) { }

  ngOnInit(): void {
     this.tasks = [{title:'task 1',description:'kasdbasbdkaskjd'},{title:'task 2', description:'sbdhasjdashdba'}]
  }

  editTask(){
    this.router.navigate(['/taskForm']);
  }

  deleteTask(){

  }

}
