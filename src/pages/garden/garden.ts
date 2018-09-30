import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Intercom } from '@ionic-native/intercom';
import { AuthService } from '../../providers/auth/auth';
// import { DataProvider } from '../../providers/data/data';
import * as firebase from 'firebase';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Component({
  selector: 'page-garden',
  templateUrl: 'garden.html',
})
export class GardenPage {
  // public email;
  public items: any [] = [];
  public itemRef: firebase.database.Reference = firebase.database().ref('/ftproducts');
  public email$ = this.auth.getEmailOnly();
  // public items: any [] = [];
  public cdRef: firebase.database.Query = firebase.database().ref('/ftuserprofiles/').equalTo(this.email$);


  // public clientDeets: any [] = [];
  // public cdRef: firebase.database.Reference = firebase.database().ref('/ftuserprofiles');
  // public cdQ;

  constructor(
    public navCtrl: NavController,
    // public http: HttpClient,
    public navParams: NavParams,
    private auth: AuthService,
    private intercom: Intercom,
    private db: AngularFireDatabase,
    public toastCtrl: ToastController
  )
    {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GardenPage');
    // this.intercom.hideMessenger();
    this.itemRef.on('value', itemSnapshot => {
    this.items = [];
    itemSnapshot.forEach( itemSnap => {
      this.items.push(itemSnap.val());
      return false;
    });
  });
    console.log('user details');
    // data.getUserProfile();


    // this.email = this.auth.getEmailOnly();
    // // this.cdQ = this.cdRef.orderByChild('email').equalTo(this.email);
    // this.cdRef.on('value', itemSnapshot => {
    //   this.clientDeets = [];
    //   itemSnapshot.
    //
    //   // forEach( clientSnap => {
    //   //   this.clientDeets.push(clientSnap.val());
    //     return false;
    //   });
    //
    // })

    }
    getUserProfile() {

      var ref = this.itemRef.on("value", (snapshot) => {
        let cd = snapshot.val();
        var name = snapshot.child("title").val();
        var address = snapshot.child("address").val();
        var email = snapshot.child("email").val();
        // console.log({name,address,email});
        const toast = this.toastCtrl.create({
              message: name + ' ' + email,
              duration: 4000
            });
            toast.present();
      });

}
}
//     class data {
//       public email$ = this.auth.getEmailOnly();
//       // public items: any [] = [];
//       public itemRef: firebase.database.Query = firebase.database().ref('/ftuserprofiles/').equalTo(this.email$);
//
//       constructor(public http: HttpClient, private db: AngularFireDatabase, private auth: AuthService) {
//         console.log('Hello DataProvider Provider');
//       }
//       // const email$ = this.auth.getEmailOnly.toString;
//       // public user: AngularFireList<User[]>;
//       // const items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
//
//
//
//       getUserProfile() {
//
//         var ref = this.itemRef.on("value", (snapshot) => {
//           let cd = snapshot.val();
//           var name = cd.child("title").val();
//           var address = cd.child("address").val();
//           var email = cd.child("email").val();
//           console.log({name,address,email});
//         });
//
//           // var name = cd.child("title").val();
// //           // var address = snapshot.child("address").val();
// //           // var email = snapshot.child("email").val();
// //           // var email2 = snapshot.child("email2").val();
// //           // var numbeds = snapshot.child("numbeds").val();
// //           // var startdate = snapshot.child("startdate").val();
// //           // var hardware = snapshot.child("hardware/0").val();
// //           // var bm1 = snapshot.child("bedmap/0/url").val();
// //           // var bm2 = snapshot.child("bedmap/1/url").val();
// //           // var bm3 = snapshot.child("bedmap/2/url").val();
//
//     }
// }

// class userprofile {
//   constructor(private data: DataProvider){
//     const details = this.data.getUserProfile();
//     var email = details.email
//   }
//
// }

// console.log('user details');
// this.email = this.auth.getEmailOnly();
// this.cdQ = this.cdRef.orderByChild('email').equalTo(this.email);
// this.cdQ.on('value', Query => {
//   this.clientDeets = [];
//   Query.forEach( clientSnap => {
//     this.items.push(clientSnap.val());
//     return false;
//   });
//
// })
