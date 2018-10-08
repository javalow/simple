import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AngularFireDatabase, AngularFireObject, AngularFireAction } from '@angular/fire/database';
import { map, catchError } from 'rxjs/operators';

@Injectable()

export class Users{


details: Observable<any>;
id: string;
public cdQ: AngularFireObject<any>;
public person: Observable<AngularFireAction<any>>;


constructor (public db: AngularFireDatabase){};
    // console.log("uid in getdata: " + this.uid2);

  //   getData(id): Observable<any> {
  //     this.details = this.db.list('/ftuserprofiles/'+this.id).snapshotChanges()
  //     .pipe(map(items => {
  //       return items.map(a => {
  //         const data = a.payload.val();
  //         const key = a.payload.key;
  //         return {key, data};
  //   });
  // }));
  //     console.log('users.getdata() details: ' + this.details)
  //     return this.details;
  //   }

  getData() {

    this.person = this.cdQ.snapshotChanges();

    // this.details = this.db.list('/ftuserprofiles/'+this.id).valueChanges();
//     .pipe(map(items => {
//       return items.map(a => {
//         const data = a.payload.val();
//         const key = a.payload.key;
//         return {key, data};
//   });
// }));
    console.log('users.getdata() person: ' + this.person)
    // return this.details;
  }

    getData2(id) {
    this.db.object('/ftuserprofiles/'+this.id).valueChanges()
    .pipe(map(actions => {
    return a => ({
      key: a.key, value: a.payload.val()}
    );
  }));
}

}
// title: string;
// numbeds:string;
// address:string;
// email:string;
// email2:string;
// hardware:string;
// bedmap1:string;
// edmap2:string;
// phoneNumber: string;
// startdate: Date;


//     .pipe(map((data: any[]) => {
//            this.fields = data;
//
//            return this.fields;
//          }), catchError(e => {
//            return throwError(e)
//          })
//       )
//       // console.log("this.fields.address: " + this.fields);
//       // console.log("fields[address]: " + this.fields['address']);
// }
