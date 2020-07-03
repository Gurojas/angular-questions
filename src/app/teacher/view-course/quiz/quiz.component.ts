import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { CreateQuizComponent } from '../create-quiz/create-quiz.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef, static: true}) entry: ViewContainerRef;
  rowNumber = 0;

  constructor(private cfr: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  onCreateQuiz() {
    this.rowNumber++;
    const comp = this.cfr.resolveComponentFactory(CreateQuizComponent);
    const expComponent = this.entry.createComponent(comp);
    expComponent.instance.index = this.rowNumber;
    console.log(expComponent);

  }

}
