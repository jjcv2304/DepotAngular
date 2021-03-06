import { Injectable } from '@angular/core';
// import { Subject, Observable } from 'rxjs/Rx';
import { IItem } from '../models/item.model';

@Injectable()
export class ItemService {

  // getItems(): Observable<IItem[]> {
  //   const subject = new Subject<IItem[]>();
  //   setTimeout(() => { subject.next(ITEMS); subject.complete(); }, 100);
  //   return subject;
  // }

  getItems(): IItem[] {
    return ITEMS;
  }

  getItem(id: number): IItem {
    return ITEMS.find(event => event.id === id);
  }
}

const ITEMS: IItem[] = [
  {
    id: 1,
    name: 'Lentejas con pimiento',
    description: 'Potaje lentejas con verduras y pimiento',
    expirationDate: new Date('10/25/2017'),
    width: 1,
    height: 1,
    type: [
      {
        id: 1,
        name: 'Alimento',
        description: 'Se puede comer'
      },
      {
        id: 11,
        name: 'Verdura',
        description: 'Es una verdura o vegetal'
      },
      {
        id: 12,
        name: 'Legumbre',
        description: 'Es legumbre'
      },
      {
        id: 13,
        name: 'Listo para comer',
        description: 'Es un alimento/plato que esta listo para ser consumido sin mas elaboracion'
      }
    ],
    shelf: {
      id: 2,
      name: 'Congelador',
      description: 'Congelador para comida T entre -4 y 0',
      height: 10,
      width: 10,
      location: 'Cocina, parte baja de la nevera',
      shelfParent: null,
      type: {
        id: 2,
        name: 'Congelador',
        description: 'Congelador para comida T entre -4 y 0'
      }
    }

  },
  {
    id: 2,
    name: 'Alubias con alcachofa y jamon',
    description: 'Potaje de alubias con alcachofas y jamon',
    expirationDate: new Date('10/25/2017'),
    width: 1,
    height: 1,
    type: [
      {
        id: 1,
        name: 'Alimento',
        description: 'Se puede comer'
      },
      {
        id: 12,
        name: 'Legumbre',
        description: 'Es legumbre'
      },
      {
        id: 13,
        name: 'Listo para comer',
        description: 'Es un alimento/plato que esta listo para ser consumido sin mas elaboracion'
      }
    ],
    shelf: {
      id: 2,
      name: 'Congelador',
      description: 'Congelador para comida T entre -4 y 0',
      height: 10,
      width: 10,
      location: 'Cocina, parte baja de la nevera',
      shelfParent: null,
      type: {
        id: 2,
        name: 'Congelador',
        description: 'Congelador para comida T entre -4 y 0'
      }
    }

  },
  {
    id: 3,
    name: 'Alubias con alcachofa y jamon',
    description: 'Potaje de alubias con alcachofas y jamon',
    expirationDate: new Date('10/25/2017'),
    width: 1,
    height: 1,
    type: [
      {
        id: 1,
        name: 'Alimento',
        description: 'Se puede comer'
      },
      {
        id: 12,
        name: 'Legumbre',
        description: 'Es legumbre'
      },
      {
        id: 13,
        name: 'Listo para comer',
        description: 'Es un alimento/plato que esta listo para ser consumido sin mas elaboracion'
      }
    ],
    shelf: {
      id: 2,
      name: 'Congelador',
      description: 'Congelador para comida T entre -4 y 0',
      height: 10,
      width: 10,
      location: 'Cocina, parte baja de la nevera',
      shelfParent: null,
      type: {
        id: 2,
        name: 'Congelador',
        description: 'Congelador para comida T entre -4 y 0'
      }
    }

  },
  {
    id: 4,
    name: 'Queso manchego semi',
    description: 'Queso manchego semi',
    expirationDate: new Date('02/15/2018'),
    width: 1,
    height: 1,
    type: [
      {
        id: 1,
        name: 'Alimento',
        description: 'Se puede comer'
      },
      {
        id: 12,
        name: 'Embutido',
        description: 'Es un embutido'
      },
      {
        id: 13,
        name: 'Listo para comer',
        description: 'Es un alimento/plato que esta listo para ser consumido sin mas elaboracion'
      }
    ],
    shelf: {
      id: 1,
      name: 'Nevera',
      description: 'Conserva la comida fresca mas tiempo',
      height: 30,
      width: 30,
      location: 'Cocina',
      shelfParent: null,
      type: {
        id: 1,
        name: 'Refrigerador',
        description: 'Conserva la comida fresca mas tiempo'
      }
    }

  }
];


