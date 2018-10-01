import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
// import { PipesModule } from '../../pipes/pipes.module';
import { NewsItemPage } from './news-item.page';
import { NewsListPage } from './news-list.page';
// import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
	declarations: [NewsItemPage, NewsListPage],
	entryComponents: [NewsItemPage, NewsListPage],
	imports: [IonicModule]
})
export class NewsModule {
}
