import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1',
      'Manhatten Mansion',
      'In the heart of New York City.',
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg',
      24999
    ),
    new Place(
      'p2',
      'Gateway of India',
      'Mumbai\'s Heart',
      'https://cdn.holidayrider.com/wp-content/uploads/2019/01/optimized-rkff-770x475.jpg',
      20000
    ),
  ];

  get places() {
    return [...this._places];
  }

  getplace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }

  constructor() { }
}
