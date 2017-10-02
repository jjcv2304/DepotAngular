import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IItem } from '../models/item.model';

@Component({
  selector: 'depot-current-item-thumbnail',
  templateUrl: './current-item-thumbnail.component.html'

})
export class CurrentItemThumbnailComponent {
  @Input() item: IItem;
}
