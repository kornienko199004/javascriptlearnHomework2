import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../shared/model';
import { HotelsService } from '../hotels.service';
import { Observable, of } from 'rxjs';
import { Unsubscriber } from '../shared/unsubscriber';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss']
})
export class SocialCardComponent extends Unsubscriber implements OnInit {
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
