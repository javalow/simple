import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Intercom } from '@ionic-native/intercom';
import { AuthService } from '../../providers/auth/auth';
import { DataProvider } from '../../providers/data/data';
import * as firebase from 'firebase';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-garden',
  templateUrl: 'garden.html',
})
export class GardenPage {
  public items: any [] = [];
  public itemRef;
  public email$;

  // public cdRef: firebase.database.Reference = firebase.database().ref('/ftuserprofiles/2a2a18f2-49e6-3daf-9208-ef3f67c15e12');

  public clientDeets: any [] = [];
  public userDeets: any [] = [];
  public cdQ;
  public cdQ2;
  public cdQ3;
  public cdQ4;
  public title: string="";
  public numbeds:string="";
  public address:string="";
  public email:string="";
  public email2:string="";
  public hardware:string="";
  public bedmap1:string="";
  public bedmap2:string="";
  public phoneNumber: string="";
  public startdate: Date;
  public details;
  public fields;
  public id: string="";




  constructor(
    public navCtrl: NavController,
    // public http: HttpClient,
    public navParams: NavParams,
    private auth: AuthService,
    private intercom: Intercom,
    private data: DataProvider,
    private db: AngularFireDatabase,
  )
    {

    }



  ionViewDidLoad() {
    console.log('ionViewDidLoad GardenPage');
    this.email$ = this.auth.getEmailOnly();
    console.log(this.email$);

    this.cdQ2 = firebase.database().ref('/ftuserprofiles').orderByChild('email').equalTo(this.email$);
    this.details = this.cdQ2.once('value').then((snapshot) => {
      this.userDeets = [];
      snapshot.forEach( snap => {
          this.id = snap.key;
                  console.log(snap.key);
                  return false;
                });

                console.log('loggedin user id: ' + this.id);


});
this.cdQ4 = this.db.object('/ftuserprofiles/'+this.id);
this.title = this.cdQ4.title;
console.log('title: ' + this.title);

  this.cdQ3 = firebase.database().ref('/ftuserprofiles/' + this.id).on('value', itemSnapshot => {
    if (this.email$ == this.email) {
      console.log('same user, no call');
    } else {
      this.items = [];
    itemSnapshot.forEach(itemSnap => {
      this.items.push(
        this.title = itemSnap.child("title").val(),
        this.address = itemSnap.child("address").val(),
        this.email = itemSnap.child("email").val(),
        this.email2 = itemSnap.child("email2").val(),
        this.numbeds = itemSnap.child("numbeds").val(),
        this.hardware = itemSnap.child("hardware").val(),
        this.phoneNumber = itemSnap.child("phoneNumber").val(),
        this.startdate = itemSnap.child("startdate").val(),
        this.bedmap1 = itemSnap.child("bedmap/0/url").val(),
        this.bedmap2 = itemSnap.child("bedmap/1/url").val(),
  );
});
}


console.log('title: ' + this.title);
console.log('Alt email: ' + this.email2);
console.log('bedmap url ' + this.bedmap2);
});
// this.cdQ = this.db.object('/ftuserprofiles/'+this.id);
// snap.child("title").val()) );

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
//
