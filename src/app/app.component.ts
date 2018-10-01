import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { Intercom } from '@ionic-native/intercom';
import { AuthService } from '../providers/auth/auth';



import { HomePage } from '../pages/home/home';
import { NewsListPage } from '../pages/news/news-list.page';
import { LoginPage } from '../pages/login/login';
import { GardenPage } from '../pages/garden/garden';

declare var cordova:any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(
    public platform: Platform,
    public intercom: Intercom,
    private auth: AuthService,
    public menu: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'leaf' },
      { title: 'Recipes & Tips', component: NewsListPage, icon: 'paper' },
      { title: 'Garden Support', component: GardenPage, icon: 'ios-chatbubbles-outline' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.


    });
    this.auth.afAuth.authState
      			.subscribe(
      				user => {
      					if (user) {
      						this.rootPage = HomePage;
                  console.log('signed in user:');
                  console.log(user.email);
                  cordova.plugins.intercom.registerIdentifiedUser({email: user.email});
                  console.log('intercom register user');
                  cordova.plugins.intercom.registerForPush();
                  console.log('intercom register for push');
      					} else {
      						this.rootPage = LoginPage;
      					}
      				},
      				() => {
      					this.rootPage = LoginPage;
      				}
      			);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  logout() {
      		this.menu.close();

      		this.auth.signOut();

      		this.nav.setRoot(LoginPage);
      	}

  	login() {
  		this.menu.close();

  		this.auth.signOut();
  		this.nav.setRoot(LoginPage);
  	}
}
