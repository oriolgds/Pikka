import { Routes } from '@angular/router';
import { SearchResultsPageComponent } from './search-results-page/search-results-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DetailedViewPageComponent } from './detailed-view-page/detailed-view-page.component';
export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'search-results', component: SearchResultsPageComponent },
    { path: 'detailed-view', component: DetailedViewPageComponent },
    { path: '**', component: NotFoundPageComponent },
];
