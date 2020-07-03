import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-teacher',
  templateUrl: './login-teacher.component.html',
  styleUrls: ['./login-teacher.component.css']
})
export class LoginTeacherComponent implements OnInit {

  public credentialForm = new FormGroup({
    emailControl: new FormControl(''),
    passControl: new FormControl(''),
  });

  private email: string;
  private pass: string;

  constructor(private router: Router, private route: ActivatedRoute,
              private snackBar: MatSnackBar, private auth: AuthService) { }

  ngOnInit() {

  }

  onPressLogin(): void {
    this.email = this.credentialForm.get('emailControl').value;
    this.pass = this.credentialForm.get('passControl').value;

    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(this.email, this.pass)
    .then((value) => {
      this.snackBar.open('Bienvenido',
          'Ok', {duration: 3000});
      this.router.navigate(['/home'], {relativeTo: this.route});
    })
    .catch((error) => {
      console.log(error);
    });

  }

}
