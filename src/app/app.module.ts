import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';

import { CurrentItemsListComponent } from './item/current-items-list.component';
import { CurrentItemThumbnailComponent } from './item/current-item-thumbnail.component';
import { ItemTypeComponent } from './item-type/item-type.component';

import { ShelfComponent } from './shelf/shelf.component';
import { ShelfTypeComponent } from './shelf-type/shelf-type.component';

import { ItemService } from './data/item.service';


@NgModule({
  declarations: [
    AppComponent,
    CurrentItemsListComponent,
    CurrentItemThumbnailComponent,
    ItemTypeComponent,
    ShelfComponent,
    ShelfTypeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
