import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  private id: string;
  public course: any = null;

  constructor(private courseService: CourseService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCourse();
  }

  getCourse() {
    this.courseService.getCourse(this.id)
    .then((res) => {
      this.course = Course.toObject(res.data());
      console.log('curso', this.course);
    })
    .catch((error) => {
      console.log('Error', error);
    });
  }

  quiz(): void {
    this.router.navigate(['quiz'], {relativeTo: this.route});
  }



}
