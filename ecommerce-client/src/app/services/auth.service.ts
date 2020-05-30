import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';
// import { firebase } from '@firebase/app';
// import * as firebase from 'firebase/app';
import * as firebase from 'firebase';
import { Observable } from "rxjs";
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: Object = {
  }

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) { }

  // Sign in with Facebook
  FacebookAuth() {
    // return this.AuthLogin(new auth.FacebookAuthProvider());
    return new Promise<any>((resolve, reject) => {
      // console.log(new firebase.auth.GoogleAuthProvider());
      let provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth
        .signInWithPopup(provider)
        .then(res => {
          // resolve(res);
          console.log(res);
          this.user['name'] = res['user']['displayName']
          this.user['email'] = res['user']['email']
          this.user['userId'] = res['user']['uid']
          this.user['image'] = res['user']['photoURL']
        }, err => {
          console.log(err);
          reject(err);
        })
    })
  }

  getUser(): Observable<Object> {
    return of(this.user);
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!')
      }).catch((error) => {
        console.log(error)
      })
  }
}
