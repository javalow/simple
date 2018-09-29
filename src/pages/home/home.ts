import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Intercom } from '@ionic-native/intercom';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private intercom: Intercom) {

  }
  ionViewDidLoad() {
      // this.intercom.setLauncherVisibility('VISIBLE');
      // this.intercom.displayMessenger();
      console.log("Page loaded - no messenger display");
    }

icmsg(){
  this.intercom.displayMessenger();
  console.log("Intercom display Messenger");
}
}
