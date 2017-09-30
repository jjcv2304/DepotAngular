import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ItemComponent } from './item/item.component';
import { ItemTypeComponent } from './item-type/item-type.component';
import { ShelfComponent } from './shelf/shelf.component';
import { ShelfTypeComponent } from './shelf-type/shelf-type.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemTypeComponent,
    ShelfComponent,
    ShelfTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
