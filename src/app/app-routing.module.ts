import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskformComponent } from './taskform/taskform.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"taskList", component:TaskListComponent},
  {path:"taskForm", component:TaskformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
