import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

  index = 0;

  constructor() { }

  ngOnInit() {
  }

  deleteQuestion(): void {

  }

}
