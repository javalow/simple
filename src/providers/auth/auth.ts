import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFireDatabase } from '@angular/fire/database';
import { Intercom } from '@ionic-native/intercom';
import * as firebase from 'firebase/app';
// import AuthProvider = firebase.auth.AuthProvider;
// import { auth } from 'firebase/app';
// import { Observable } from 'rxjs/Observable';
// import { Http } from '@angular/http';
// import { map } from 'rxjs/operators';


@Injectable()
export class AuthService {
	private user: firebase.User;
  email$;
  emailz;
  cdQ2;
  cdQ3
  public upid;
  upid2;
  details;
  userDeets;


	constructor(public afAuth: AngularFireAuth, private intercom: Intercom) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});
    // this.email$ = this.user.email;
    // console.log('email from auth top : ' + this.email$);

	}

	getName() {
		return this.user && (this.user.displayName);

	}
  // getUID() {
  //   this.cdQ2 = firebase.database().ref('/users/'+this.user.uid);
  //
  //   this.cdQ2.once('value').then((snapshot) => {
  //     this.userDeets = snapshot.val();
  //     this.upid = this.userDeets.cid;
  //     console.log('cid from getUID : ' + this.upid);
  //   });
  //
  //
  //     return this.upid;
  //   }

  public  getUID() {
      this.cdQ3 = firebase.database().ref('/ftuserprofiles').orderByChild('email').equalTo(this.user.email);
      this.details = this.cdQ3.on('value',((snapshot) => {
        this.userDeets = [];
        snapshot.forEach( snap => {
            this.upid = snap.key;
                    // console.log('cid from getUID : ' + this.upid);
                    return false;
                  });
      }));
      return this.upid;
    }

//   var newPost = snapshot.val();
//   console.log("Author: " + newPost.author);
//   console.log("Title: " + newPost.title);
//   console.log("Previous Post ID: " + prevChildKey);
// });
    // console.log('Sign in with email');
    // this.email$ = this.user.email;
    // console.log(this.email$);
    //
    // this.cdQ2 = firebase.database().ref('/ftuserprofiles').orderByChild('email').equalTo(this.email$);
    // this.details = this.cdQ2.once('value').then((snapshot) => {
    //   this.userDeets = [];
    //   snapshot.forEach( snap => {
    //       this.upid = snap.key;
    //               console.log(snap.key);
    //               return false;
    //             });
    //
    //             console.log('loggedin user id: ' + this.id);
    //
    //
    // });
    //
    // return this.upid;



	getUsername() {
    this.emailz = this.user.email;
    console.log('cid from getUID : ' + this.emailz);
    return this.emailz;

	}
	// getId() {
	// 	return this.user.uid;
	// }

	getEmail() {
		return this.user && this.user.email;

	}
	getEmailOnly() {
		return this.user.email;

	}

	get authenticated(): boolean {
		return this.afAuth.authState !== null;
	}

	get id(): string {
		return this.authenticated ? this.user.uid : '';
	}

	signInWithEmail(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);



	}

	signUp(credentials) {
		return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
	}

	signOut() {
    this.afAuth.auth.signOut();
    this.intercom.reset();
	}


	resetPassword(email: string) {
		return this.afAuth.auth.sendPasswordResetEmail(email);
	}

}


// signOut(): firebase.Promise<void> {
// 	return this.afAuth.auth.signOut();
// }

// signInWithGoogle() {
// 	console.log('Sign in with google');
// 	return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
// }
//
// signInWithTwitter() {
// 	console.log('Sign in with twitter');
// 	return this.oauthSignIn(new firebase.auth.TwitterAuthProvider());
// }
