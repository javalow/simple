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

constructor(private db: AngularFireDatabase){}

  getNewsList() {
  		return this.db.list('ftnews').valueChanges();

  	}

  

}
