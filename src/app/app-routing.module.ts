import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemComponent} from './item/item.component';
import {ItemTypeComponent} from './item-type/item-type.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'item'},
  {path: 'item', component: ItemComponent},
  {path: 'itemType', component: ItemTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
