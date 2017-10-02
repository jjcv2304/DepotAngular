import { Component, OnInit } from '@angular/core';
import { IItem } from '../models/item.model';
import { ItemService } from '../data/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'depot-current-items-list',
  templateUrl: './current-items-list.component.html',
  styleUrls: ['./current-items-list.components.scss']
})
export class CurrentItemsListComponent implements OnInit {
  items: IItem[];

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.items = this.route.snapshot.data['items'];
    this.items = this.itemService.getItems();
  }
}
