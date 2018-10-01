import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

@Component({
	templateUrl: './news-item.page.html',
	selector: 'as-page-news-item'
})
export class NewsItemPage {
	item: any;

	constructor(navParams: NavParams) {
		this.item = navParams.get('item');
	}
}
