import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Intercom } from '@ionic-native/intercom';
import { AuthService } from '../../providers/auth/auth';
import * as firebase from 'firebase';


@Component({
  selector: 'page-garden',
  templateUrl: 'garden.html',
})
export class GardenPage {
  public email;
  public items: any [] = [];
  public itemRef: firebase.database.Reference = firebase.database().ref('/ftproducts');
  public clientDeets: any [] = [];
  public cdRef: firebase.database.Reference = firebase.database().ref('/ftuserprofiles');
  public cdQ;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthService,
    private intercom: Intercom)
    {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GardenPage');
    this.intercom.hideMessenger();
    this.itemRef.on('value', itemSnapshot => {
    this.items = [];
    itemSnapshot.forEach( itemSnap => {
      this.items.push(itemSnap.val());
      return false;
    });
    })
    console.log('user details');
    this.email = this.auth.getEmailOnly();
    // this.cdQ = this.cdRef.orderByChild('email').equalTo(this.email);
    this.cdRef.on('value', itemSnapshot => {
      this.clientDeets = [];
      itemSnapshot.forEach( clientSnap => {
        this.clientDeets.push(clientSnap.val());
        return false;
      });

    })

    }


}

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
