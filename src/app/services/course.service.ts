import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { FirebaseRoute } from '../models/firebase-routes';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }


  addCourse(data) {
    return firebase.firestore().collection(FirebaseRoute.REF_COURSE).doc(data.id).set(data);
  }

  getCourses(idTeacher: string) {
    return firebase.firestore().collection(FirebaseRoute.REF_COURSE)
    .where('teacherId', '==', idTeacher).get();
  }

  getCourse(idCourse: string){
    return firebase.firestore().collection(FirebaseRoute.REF_COURSE)
    .doc(idCourse)
    .get();
  }

  getIdCourse(): string {
    return firebase.firestore().collection(FirebaseRoute.REF_COURSE).doc().id;
  }

}
