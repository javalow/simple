import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AuthService } from '../auth/auth';
import * as firebase from 'firebase/app';
// import 'rxjs/add/operator/first';
// import { switchMap } from 'rxjs/operators';
// import { Observable } from 'rxjs/Observable';

@Injectable()




export class DataProvider {
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
  public id: string="";
  cdQ4;
  items;
  itemDetails;
  uid;

constructor(private db: AngularFireDatabase, private auth: AuthService){}

  getNewsList() {
  		return this.db.list('ftnews').valueChanges();

  	}

  public async updateDetails(){
    this.uid = await this.auth.upid;
    console.log('cid from data.getUID : ' + this.uid);
    this.cdQ4 = this.db.object('/ftuserprofiles/'+this.uid);
    this.title = this.cdQ4.title;
    console.log('title: ' + this.title);

      this.itemDetails = firebase.database().ref('/ftuserprofiles/' + this.uid).on('value', itemSnapshot => {
        // if (this.email$ == this.email) {
        //   console.log('same user, no call');
        // } else {
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



    console.log('title: ' + this.title);
    console.log('Alt numbeds: ' + this.numbeds);
    console.log('bedmap url ' + this.bedmap2);
    });

    return await this.title,this.address, this.email, this.numbeds;

  }


}
