import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CurrentItemsListComponent} from './item/current-items-list.component';
import {ItemTypeComponent} from './item-type/item-type.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'currentItemsList'},
  {path: 'currentItemsList', component: CurrentItemsListComponent},
  {path: 'item', component: CurrentItemsListComponent},
  {path: 'itemType', component: ItemTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
