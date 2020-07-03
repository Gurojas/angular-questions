import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/models/course';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  constructor(private courseService: CourseService, private auth: AuthService,
              private router: Router) { }

  teacherId: string;
  courses = [];

  ngOnInit() {
    this.getCourses();
  }

  private getTeacherId(): void {
    this.teacherId = this.auth.getCurrentUser().uid;
  }

  getCourses() {
    //this.getTeacherId();
    this.courseService.getCourses('1JD9NJgU24dJ0DZJlQjP7bITXuj2')
    .then((querySnapshot) => {
      querySnapshot.forEach((result) => {
        console.log(result.id, '=>', result.data());
        this.courses.push(result.data());
      });
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
  });
  }

  onPressCourse(id) {

    this.router.navigate(['/course/' + id]);
  }

}
