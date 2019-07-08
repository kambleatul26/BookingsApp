import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/places/tabs/discover',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: PlacesPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: './places/discover/discover.module#DiscoverPageModule'
          },
          {
            path: ':placeId',
            loadChildren: './places/discover/page-detail/page-detail.module#PageDetailPageModule'
          }
        ]
      },
      {
        path: 'offers',
        children: [
          {
            path: '',
            loadChildren: './places/offers/offers.module#OffersPageModule'
          },
          {
            path: 'newOffer',
            loadChildren: './places/offers/new-offer/new-offer.module#NewOfferPageModule'
          },
          {
            path: 'edit/:placeId',
            loadChildren: './places/offers/edit-offer/edit-offer.module#EditOfferPageModule'
          },
          {
            path: ':placeId',
            loadChildren: './places/offers/offer-bookings/offer-bookings.module#OfferBookingsPageModule'
          },
        ]
      },
      {
        path: '',
        redirectTo: '/places/tabs/discover',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlacesPage]
})
export class PlacesPageModule {}
