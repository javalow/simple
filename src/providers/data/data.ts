// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
// import { AuthService } from '../auth/auth';
// import * as firebase from 'firebase/app';
// // import 'rxjs/add/operator/first';
// // import { switchMap } from 'rxjs/operators';
// // import { Observable } from 'rxjs/Observable';
//
// @Injectable()
//
// // class User {
// // }
// //   const email$ = this.auth.getEmailOnly.toString;
// //   // public user: AngularFireList<User[]>;
// //   public user$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
// //
// //   constructor(public http: HttpClient, private db: AngularFireDatabase, private auth: AuthService) { }
// //
// //   getUserProfile() {
// //       this.user$= this.db.list('ftuserprofiles', ref => {
// //         let q = ref.orderByChild('email').equalTo('email$').limitToFirst(1);
// //         return q;}).snapshotChanges();
// //   	}
// //
// // }
//
//
// export class DataProvider {
//   public email$ = this.auth.getEmailOnly();
//   // public items: any [] = [];
//   public itemRef: firebase.database.Query = firebase.database().ref('/ftuserprofiles/').equalTo(this.email$);
//
//   constructor(public http: HttpClient, private db: AngularFireDatabase, private auth: AuthService) {
//     console.log('Hello DataProvider Provider');
//   }
//   // const email$ = this.auth.getEmailOnly.toString;
//   // public user: AngularFireList<User[]>;
//   // const items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
//
//
//
//   getUserProfile() {
//     var ref = this.itemRef.once("value")
//     .then(function(snapshot){
//       var name = snapshot.child("title").val();
//       // var address = snapshot.child("address").val();
//       // var email = snapshot.child("email").val();
//       // var email2 = snapshot.child("email2").val();
//       // var numbeds = snapshot.child("numbeds").val();
//       // var startdate = snapshot.child("startdate").val();
//       // var hardware = snapshot.child("hardware/0").val();
//       // var bm1 = snapshot.child("bedmap/0/url").val();
//       // var bm2 = snapshot.child("bedmap/1/url").val();
//       // var bm3 = snapshot.child("bedmap/2/url").val();
//
// })
//     // this.user= this.db.list('ftuserprofiles', ref => {
//     //   let q = ref.orderByChild('email').equalTo('email$').limitToFirst(1).on('value', itemSnapshot => {
//     //   this.items = [];
//     //   itemSnapshot.forEach( itemSnap => {
//     //     this.items.push(itemSnap.val());
//     //     return false;
//     //   }););
//     //   return q;});
//     //   var email = this.user.firstName;
// 	}
//
//   getActivityFeed(): AngularFireList<any[]> {
// 		return this.db.list('ftactivityfeed');
// 	}
//
// 	getNewsList(): AngularFireList<any[]> {
// 		return this.db.list('ftnews');
// 	}
//
// 	getCatalogItems() {
// 		return this.db.list('ftcatalogitems');
// 	}
//
// 	getProducts() {
// 		return this.db.list('ftproducts');
// 	}
//
//
//
// 	getChatRooms() {
// 		return this.db.list('ftchatrooms');
// 	}
//
// 	getChatMessages(chatId: string) {
// 		return this.db.list(`ftchatrooms/${chatId}/messages`);
// 	}
// }
