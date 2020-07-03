import { Component, OnInit } from '@angular/core';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-questions';


  ngOnInit() {
// Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyCSZCmSnUSr3z_DCdimRLfob-oPUpkQXaA',
      authDomain: 'ng-questions.firebaseapp.com',
      databaseURL: 'https://ng-questions.firebaseio.com',
      projectId: 'ng-questions',
      storageBucket: 'ng-questions.appspot.com',
      messagingSenderId: '739553370287',
      appId: '1:739553370287:web:55d44ae3144e76dca1345a',
      measurementId: 'G-KNREP71FD7'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // firebase.analytics();

  }

}
