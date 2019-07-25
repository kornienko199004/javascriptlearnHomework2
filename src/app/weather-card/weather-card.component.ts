import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../shared/model';
import { HotelsService } from '../hotels.service';
import { Observable, of } from 'rxjs';
import { Unsubscriber } from '../shared/unsubscriber';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent extends Unsubscriber implements OnInit {
  hotel$: Observable<Place>;

  constructor(private hotelService: HotelsService) {
    super();
  }

  ngOnInit() {
    this.hotelService.getCurrentHotel()
      .pipe(
        takeUntil(this.subscribeControler$$)
      )
      .subscribe((hotel: Place) => {
        this.hotel$ = of(hotel);
      });
  }
}
