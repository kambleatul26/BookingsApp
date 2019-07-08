import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { BookingsComponent } from 'src/app/list/bookings/bookings.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.page.html',
  styleUrls: ['./page-detail.page.scss'],
})
export class PageDetailPage implements OnInit {
  place: Place;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private modal: ModalController,
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getplace(paramMap.get('placeId'));
    });
  }

  onBookPlace() {
    // this.router.navigate(['places/tabs/discover']);
    // this.navCtrl.navigateBack('places/tabs/discover');
    this.modal.create({
      component: BookingsComponent,
      componentProps: {selectedPlace: this.place}
    }).then(
      modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm') {
          console.log('BOOKED!');
        }
      }
    );
  }

}
