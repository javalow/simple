import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Intercom } from '@ionic-native/intercom';
// import * as firebase from 'firebase/app';
// import AuthProvider = firebase.auth.AuthProvider;
// import { auth } from 'firebase/app';
// import { Observable } from 'rxjs/Observable';
// import { Http } from '@angular/http';
// import { map } from 'rxjs/operators';


@Injectable()
export class AuthService {
	private user: firebase.User;

	constructor(public afAuth: AngularFireAuth, private intercom: Intercom) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});
	}

	getName() {
		return this.user && (this.user.displayName);

	}

	getUsername() {
		return this.user.email;
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
