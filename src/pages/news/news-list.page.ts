import { Component } from '@angular/core';
import { AngularFireList } from '@angular/fire/database';

import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { NewsItemPage } from './news-item.page';

@Component({
	templateUrl: './news-list.page.html',
	selector: 'as-page-news-list'
})
export class NewsListPage {
	items;


	constructor(private data: DataProvider, private nav: NavController) {

	}
ionViewDidLoad() {
	this.items = this.data.getNewsList();
	console.log(this.items.length);
}
	public itemTapped(item) {
		this.nav.push(NewsItemPage, {
			item: item
		});
	}
}
