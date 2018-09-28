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
      this.intercom.setLauncherVisibility('VISIBLE');
      console.log("Intercom alive!");
    }

icmsg(){
  this.intercom.displayMessenger();
}
}
