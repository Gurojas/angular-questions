import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TeacherRoutingModule } from './teacher-routing.module';
import { HomeComponent } from './home/home.component';
import { AuthService } from '../services/auth.service';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { CreateQuizComponent } from './view-course/create-quiz/create-quiz.component';
import { QuizComponent } from './view-course/quiz/quiz.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListCoursesComponent,
    AddCourseComponent,
    ProfileComponent,
    ViewCourseComponent,
    CreateQuizComponent,
    QuizComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MaterialModuleModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AuthService],
  entryComponents: [CreateQuizComponent],
})
export class TeacherModule { }
