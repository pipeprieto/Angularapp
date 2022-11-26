import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angularapp';
  @ViewChild(TaskListComponent) 
   private taskData!:TaskListComponent;

  ngAfterViewInit(){
    console.log(this.taskData)
  }
}
