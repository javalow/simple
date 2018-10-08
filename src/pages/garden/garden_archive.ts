import { Component } from '@angular/core';
// import { Users } from './profile';
import {  NavController, NavParams } from 'ionic-angular';
import { Intercom } from '@ionic-native/intercom';
import { AuthService } from '../../providers/auth/auth';
import { DataProvider } from '../../providers/data/data';
import * as firebase from 'firebase';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireDatabase, AngularFireObject, AngularFireAction } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// import { throwError } from "rxjs";
// import 'rxjs/add/observable/fromPromise';

interface Person {
  title: String;
  numbeds: String;
  address: String;
  email: String;
  email2: String;
  hardware: String;
  bedmap1: String;
  bedmap2: String;
  phoneNumber: String;
  startdate: Date;
}


@Component({
  selector: 'page-garden',
  templateUrl: 'garden.html',
})
export class GardenPage {
  public items: any [] = [];
  public itemRef;
  public email$;
  public cdQ4;

  public fields;
  public id: string="";
  // public cdRef: firebase.database.Reference = firebase.database().ref('/ftuserprofiles/2a2a18f2-49e6-3daf-9208-ef3f67c15e12');

  public clientDeets: any [] = [];
  public userDeets: any [] = [];
  public cdQ: AngularFireObject<any>;
  public cdQ2;
  public cdQ3;


  public details;

  uid1;
  uid2;

  private itemDetails: Observable<any[]>;
  // public profile : Observable<Users>;
  public person: Observable<AngularFireAction<any>>;
  title: String;
  numbeds: String;
  address: String;
  email: String;
  email2: String;
  hardware: String;
  bedmap1: String;
  bedmap2: String;
  phoneNumber: String;
  startdate: Date;






  constructor(
    public navCtrl: NavController,
    // public http: HttpClient,
    public navParams: NavParams,
    private auth: AuthService,
    private intercom: Intercom,
    private data: DataProvider,
    private db: AngularFireDatabase,
    // public users: Users
  )
    {
      // this.getUID();
      //
      // console.log('cid from getUID-constructor : ' + this.uid2);
    //   this.fields = this.users.getData(this.uid2).subscribe(fields => {
    //   this.fields = fields;
    //   console.log(fields);
    // });
      // this.cdQ = this.db.object('/ftuserprofiles/'+this.getUID());
      // this.person = this.cdQ.snapshotChanges();

      // this.users.person = this.person;
      // console.log('person from getUID-garden : ' + this.person);
      // console.log('this.person : ', this.person);
      // this.fields = this.users.getData(this.uid2);
      // console.log('this.fields : ', this.fields);
      // console.log('this.fields : ' + this.fields.key);
      // .then((result) => {
      //     // all good, lets move on
      //     console.log('auth uid2: '+ this.uid2);
      //         this.uid2 = this.auth.upid;
      // },
      // (err) => {
      //     // something didn't work
      //    console.log(err);
      // }
      // );
    //   this.cdQ = this.users.getData2(this.uid2).subscribe(
    // (items) => {
    //   console.log('Data with key:', items);

    }

    getUID() {
      this.email$ = this.auth.getEmailOnly();
      this.cdQ3 = firebase.database().ref('/ftuserprofiles').orderByChild('email').equalTo(this.email$);
      this.details = this.cdQ3.once('value').then((snapshot) => {
        this.userDeets = [];
        snapshot.forEach( snap => {
            this.uid2 = snap.key;

                    console.log('cid from getUID-garden : ' + this.uid2);

                    // console.log('details from getUID-garden : ' + this.details);
                    return false;
                  });
      });
      return this.uid2;
    }

getData(id) {
  // this.getUID();
  // this.uid2;
  // console.log('cid from getdata : ' + this.uid2);
  this.cdQ = this.db.object('/ftuserprofiles/'+ this.id);
  this.person = this.cdQ.snapshotChanges().pipe(map(c => {
                    const data = c.payload.val();
                    const id = c.payload.key;
                    return { id, ...data };
    }));

  // console.log('this.person : ', this.person);
  this.details = JSON.stringify(this.person);
}
    //
    // console.log('this.cdQ : ', this.cdQ);
    // this.person = this.users.getData();
    // console.log('this.person : ', this.person);




  ionViewDidLoad() {
    console.log('ionViewDidLoad GardenPage');
    // this.getUID();
    // this.email$ = this.auth.getEmailOnly();
    // this.getData(this.uid2);
    this.getData('2a2a18f2-49e6-3daf-9208-ef3f67c15e1');
    // this.person = this.getFields();
    // this.cdQ4 = this.users.getData(this.uid2);
    // this.uid1 = JSON.parse(this.fields);
    // this.address = this.fields['address'];
    // this.title = this.fields.title;
    // console.log('title ' + this.title);
    // console.log('address ' + this.person['address']);

    // this.uid1 = this.auth.getUID();
    //
    console.log(this.email$);
    // this.address = this.profile.address;

    // console.log("title: " + this.fields.title);
    // console.log('auth uid1: '+ this.auth.getUID());


}

icmsg(){
  this.intercom.displayMessenger();
  console.log("Intercom display Messenger");
}
}




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


    // this.itemRef = firebase.database().ref('/ftuserprofiles').on('value', itemSnapshot => {
    //   this.items = [];
    //   itemSnapshot.forEach( itemSnap => {
    //     this.items.push(itemSnap.key
    //     );
    //     return false;
    //   });
    // });

    // this.cdQ = firebase.database().ref('/ftuserprofiles').orderByChild('email').equalTo(this.email$).once('value', itemSnapshot => {
    //   this.clientDeets = [];
    //   itemSnapshot.forEach( itemSnap => {
    //     this.clientDeets.push(
    //       itemSnap.val().title,
    //       itemSnap.val().address,
    //       itemSnap.val().email,
    //       itemSnap.val().numbeds,
    //       itemSnap.val().hardware,
    //       itemSnap.val().startdate,
    //       itemSnap.val().bedmap
    //   );
    //
    //     return false;
    //   });
    // });



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
//@Pipe({
//   name: 'keys',
//   pure: false
// })
// export class KeysPipe implements PipeTransform {
//   transform(value: any, args: any[] = null): any {
//     return Object.keys(value)
//   }
// }
