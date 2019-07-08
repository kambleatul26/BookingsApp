import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PageDetailPage } from './page-detail.page';
import { BookingsComponent } from 'src/app/list/bookings/bookings.component';

const routes: Routes = [
  {
    path: '',
    component: PageDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PageDetailPage, BookingsComponent],
  entryComponents: [BookingsComponent]
})
export class PageDetailPageModule {}
