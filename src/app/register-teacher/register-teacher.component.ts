import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css']
})
export class RegisterTeacherComponent implements OnInit {

  public profileForm = new FormGroup({
    nameControl: new FormControl(''),
    lastNameControl: new FormControl(''),
    emailControl: new FormControl(''),
    passControl: new FormControl(''),
    rePassControl: new FormControl(''),
  });

  private name: string;
  private lastName: string;
  private email: string;
  private pass: string;
  private rePass: string;

  isMatches = true;


  constructor(private router: Router, private route: ActivatedRoute,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onPress(): void {
    this.name = this.profileForm.get('nameControl').value;
    this.lastName = this.profileForm.get('lastNameControl').value;
    this.email = this.profileForm.get('emailControl').value;
    this.pass = this.profileForm.get('passControl').value;

    this.isMatches = this.isMatchesPass();
    if (this.isMatches) {
      const auth = firebase.auth();
      auth.createUserWithEmailAndPassword(this.email, this.pass)
      .then( (value) => {
        const db = firebase.firestore();
        db.collection('teacher').add({
          name: this.name,
          lastName: this.lastName,
          email: this.email,
        })
        .then( (docRef) => {
          this.router.navigate(['/home'], {relativeTo: this.route});
        })
        .catch( (error) => {
          console.log(error);
        });
      })
      .catch ((error) => {
        const errorCode: string = String(error.code);
        if (errorCode === 'auth/weak-password') {
          this.snackBar.open('La contraseña debe contener al menos 6 caracteres',
          'Ok', {duration: 3000});
        } else if (errorCode === 'auth/email-already-in-use') {
          this.snackBar.open('El correo electronico ya se encuentra registrado',
          'Ok', {duration: 3000});
        }
      });
    }
  }

  isMatchesPass(): boolean {
    this.pass = this.profileForm.get('passControl').value;
    this.rePass = this.profileForm.get('rePassControl').value;
    return this.pass === this.rePass;
  }
}
