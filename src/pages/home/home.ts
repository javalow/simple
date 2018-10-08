import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Tile } from './models/tile.model';
import { GardenPage } from '../garden/garden';
import { NewsListPage } from '../news/news-list.page';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public tiles: Tile[][];

  	private nav;

  	constructor(
  		nav: NavController
  	) {
  		this.nav = nav;
  		this.initTiles();
  	}

  	public navigateTo(tile) {
  		this.nav.push(tile.component);
  	}

  	private initTiles(): void {
  		this.tiles = [
  			[
  			// 	{
  			// 		title: 'Garden Chat',
  			// 		path: 'chat-rooms',
  			// 		icon: 'menu',
  			// 		component: ChatRoomsPage
  			// 	},
  			// 	{
  			// 		title: 'Activity',
  			// 		path: 'catalog-items',
  			// 		icon: 'list-box',
  			// 		component: CatalogItemsPage
  			// 	}
  			// ],
  			// [
  			// 	{
  			// 	title: 'Products',
  			// 	path: 'products',
  			// 	icon: 'cart',
  			// 	component: ProductsPage
  			// },
  			{
  				title: 'Your Garden',
  				path: 'user-profiles',
  				icon: 'analytics',
  				component: GardenPage
  			}
  		],
  			[
  				{
  					title: 'Avalow Updates',
  					path: 'news',
  					icon: 'flask',
  					component: NewsListPage
  				},
  				// {
  				// 	title: 'Garden Sharing',
  				// 	path: 'activity-feed',
  				// 	icon: 'list',
  				// 	component: ActivityFeedPage
  				// }
  			],


  		];
  	}
  }
