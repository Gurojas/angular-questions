import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { FirebaseRoute } from '../models/firebase-routes';
import { Quiz } from '../models/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  createQuiz(data: any){
    return firebase.firestore().collection(FirebaseRoute.REF_QUIZ).add(data);
  }


}
