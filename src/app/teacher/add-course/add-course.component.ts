import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GradeCourse } from 'src/app/models/gradecourse';
import { AuthService } from 'src/app/services/auth.service';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/models/course';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  public courseForm = new FormGroup({
    nameControl: new FormControl(''),
    descriptionControl: new FormControl(''),
  });

  public grades = [
    {value: 0, viewValue: GradeCourse.M1},
    {value: 1, viewValue: GradeCourse.M2},
    {value: 2, viewValue: GradeCourse.M3},
    {value: 3, viewValue: GradeCourse.M4},
  ];

  gradeSelected: number;

  constructor(private auth: AuthService, private courseService: CourseService,
              private snackBar: MatSnackBar, private location: Location) { }

  ngOnInit() {

  }

  gradeSelectionChange(event) {
    this.gradeSelected = event.value;
  }

  onPressCompleted(): void {
    const user = this.auth.getCurrentUser();
    if (user !== null) {
      const teacherId = user.uid;
      const name = this.courseForm.get('nameControl').value;
      const description = this.courseForm.get('descriptionControl').value;
      const grade = this.grades[this.gradeSelected].viewValue;
      const id = this.courseService.getIdCourse();

      const course = new Course(id, name, description, grade, teacherId);
      const courseJson = Course.toJson(course);
      this.courseService.addCourse(courseJson)
      .then((value) => {
        this.snackBar.open('Course creado', 'Ok', {duration: 3000});
        this.location.back();
      })
      .catch((error) => {
        this.snackBar.open('Hubo un problema', 'Ok', {duration: 3000});
      });

    } else {

    }

  }

}
