import { Injectable } from '@angular/core';
import { Products } from 'src/app/shared/models/product';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProductById(id:number): Products{
    return this.getAll().find(product => product.id == id)!;
  }

  getAllProductByTag(tag: string): Products[] {
    return tag == "All" ?
      this.getAll() : this.getAll().filter(product => product.tags?.includes(tag));
  }
  
  getAllTag():Tag[]{
    
    return [
      { name: 'All', count: 12},
      { name: 'verduras', count: 4},
      { name: 'frutas', count: 4},
      { name: 'carnicos', count: 4},
    ]
  }

  getAll(): Products[] {

    return [

      {
        id: 1,
        name: 'cebolla',
        productTime: '10-20',
        price: 1,
        favorite: false,
        origins: ['vergel'],
        imageUrl: '/assets/img/cebolla.jpg',
        tags: ['verduras'],

      },


      {
        id: 2,
        name: 'lechuga',
        productTime: '10-20',
        price: 1,
        favorite: false,
        origins: ['vergel'],
        imageUrl: '/assets/img/lechuga.jpg',
        tags: ['verduras'],

      },


      {
        id: 3,
        name: 'salvia',
        productTime: '10-20',
        price: 1,
        favorite: false,
        origins: ['vergel'],
        imageUrl: '/assets/img/salvia.jpg',
        tags: ['verduras'],

      },

      {
        id: 4,
        name: 'cilantro',
        productTime: '10-20',
        price: 1,
        favorite: false,
        origins: ['vergel'],
        imageUrl: '/assets/img/cilantro.jpg',
        tags: ['verduras'],

      },

      {
        id: 5,
        name: 'guayaba',
        productTime: '10-20',
        price: 1,
        favorite: false,
        origins: ['vergel'],
        imageUrl: '/assets/img/guayaba.jpg',
        tags: ['frutas'],

      },

      {
        id: 6,
        name: 'mango',
        productTime: '10-20',
        price: 1,
        favorite: false,
        origins: ['vergel'],
        imageUrl: '/assets/img/mango.jpg',
        tags: ['frutas'],

      },

      {
        id: 7,
        name: 'papaya',
        productTime: '10-20',
        price: 1,
        favorite: false,
        origins: ['vergel'],
        imageUrl: '/assets/img/papaya.jpg',
        tags: ['frutas'],

      },

      {
        id: 8,
        name: 'tomate',
        productTime: '10-20',
        price: 1,
        favorite: false,
        origins: ['vergel'],
        imageUrl: '/assets/img/tomate.jpg',
        tags: ['frutas'],

      },

      {
        id: 9,
        name: 'cerdo',
        productTime: '10-20',
        price: 1,
        favorite: false,
        origins: ['vergel'],
        imageUrl: '/assets/img/cerdo.jpg',
        tags: ['carnicos'],

      },

      {
        id: 10,
        name: 'pollo',
        productTime: '10-20',
        price: 1,
        favorite: false,
        origins: ['vergel'],
        imageUrl: '/assets/img/pollo.jpg',
        tags: ['carnicos'],

      },

      {
        id: 11,
        name: 'pescado',
        productTime: '10-20',
        price: 1,
        favorite: false,
        origins: ['vergel'],
        imageUrl: '/assets/img/pescado.jpg',
        tags: ['carnicos'],

      },

      {
        id: 12,
        name: 'res',
        productTime: '10-20',
        price: 1,
        favorite: false,
        origins: ['vergel'],
        imageUrl: '/assets/img/res.jpg',
        tags: ['carnicos'],

      }


    ];
  }

}
