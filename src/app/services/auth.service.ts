import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  getCurrentUser() {
    return firebase.auth().currentUser;
  }

  isAuthenticated(): boolean {
    return firebase.auth().currentUser !== null;
  }



}
