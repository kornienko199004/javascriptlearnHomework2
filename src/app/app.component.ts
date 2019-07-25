import { Component, OnInit } from '@angular/core';
import { Place } from './shared/model';
import { HotelsService } from './hotels.service';
import { Observable, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Unsubscriber } from './shared/unsubscriber';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends Unsubscriber implements OnInit {
  hotel$: Observable<Place>;

  constructor(private hotelsService: HotelsService) {
    super();
  }

  ngOnInit() {
    this.hotelsService.getCurrentHotel()
      .pipe(
        takeUntil(this.subscribeControler$$)
      )
      .subscribe((hotel: Place) => {
        this.hotel$ = of(hotel);
      });
  }
}
