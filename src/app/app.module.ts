import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import { MainComponent } from './main/main.component';
import { LoginTeacherComponent } from './login-teacher/login-teacher.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { TeacherModule } from './teacher/teacher.module';
import { AuthService } from './services/auth.service';


const routes: Routes = [
  {path: 'login', component: MainComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginTeacherComponent,
    RegisterTeacherComponent,
    MainComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    ReactiveFormsModule,
    FormsModule,
    TeacherModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
