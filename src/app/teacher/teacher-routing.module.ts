import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { QuizComponent } from './view-course/quiz/quiz.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'create-course', component: AddCourseComponent},
  {path: 'course/:id', component: ViewCourseComponent,
  children: [
    {path: 'quiz', component: QuizComponent},
  ]},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
