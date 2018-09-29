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
  public items: any [] = [];
  public itemRef: firebase.database.Reference = firebase.database().ref('/ftproducts');

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
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
    }


}
