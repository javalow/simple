import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { Intercom } from '@ionic-native/intercom';
import { AuthService } from '../../providers/auth/auth';
import { DataProvider } from '../../providers/data/data';
import * as firebase from 'firebase';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'page-garden',
  templateUrl: 'garden.html',
})
export class GardenPage {
  // public email;
  public items: any [] = [];
  public itemRef;
  // public email$ = this.auth.getEmailOnly();
  public email$;
  // public items: any [] = [];
  // public cdRef: firebase.database.Query = firebase.database().ref('/ftuserprofiles/').orderByChild('email').equalTo(this.email$);
  // public cdRef: firebase.database.Reference = firebase.database().ref('/ftuserprofiles/2a2a18f2-49e6-3daf-9208-ef3f67c15e12');

  // public clientDeets: any [] = [];
  // public cdRef: firebase.database.Reference = firebase.database().ref('/ftuserprofiles');
  // public cdQ;
  ListCategory = [];
  temparrUser= [];

  constructor(
    public navCtrl: NavController,
    // public http: HttpClient,
    public navParams: NavParams,
    private auth: AuthService,
    // private intercom: Intercom,
    private db: AngularFireDatabase,
    private data: DataProvider,
    // public toastCtrl: ToastController
  )
    {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GardenPage');
    this.email$ = this.auth.getEmailOnly();
    console.log(this.email$);
    this.itemRef = firebase.database().ref('/ftuserprofiles').on('value', itemSnapshot => {
      this.items = [];
      itemSnapshot.forEach( itemSnap => {
        this.items.push(itemSnap.val().numbeds,
        itemSnap.key,
        itemSnap.val().hardware
      );
        return false;
      });
    });
    // this.intercom.hideMessenger();
  //   this.itemRef.on('value', itemSnapshot => {
  //   this.items = [];
  //   itemSnapshot.forEach( itemSnap => {
  //     this.items.push(itemSnap.val());
  //     return false;
  //   });
  // });
    // console.log(this.items[0].numbeds);
    // this.data.getUserProfile();


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

        this.data.getUserProfile().then((res: any) => {
            this.ListCategory = res;
             this.temparrUser = res;
             console.log(this.temparrUser);
         })

//
//       // var ref = this.cdRef.on("value", (snapshot) => {
//         // let cd = snapshot.val();
//         // var name = snapshot.child("title").val();
//         // var address = snapshot.child("address").val();
//         // var email = snapshot.child("email").val();

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
