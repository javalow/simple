import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Intercom } from '@ionic-native/intercom';


@Component({
  selector: 'page-garden',
  templateUrl: 'garden.html',
})
export class GardenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private intercom: Intercom) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GardenPage');

    this.intercom.hideMessenger();
  }


}
