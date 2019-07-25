import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Place } from '../shared/model';
import { HotelsService } from '../hotels.service';
import { Unsubscriber } from '../shared/unsubscriber';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss'],
})
export class MainCardComponent  extends Unsubscriber implements OnInit {
  @ViewChild('mainImg', { static: true }) mainImg: ElementRef;

  hotels: Place[] = [];
  types: Set<string> = new Set();
  hotelIndex: number;
  type: string;

  constructor(
    private hotelsService: HotelsService
  ) {
    super();
  }

  ngOnInit() {
    this.hotelsService.getHotels()
      .pipe(
        takeUntil(this.subscribeControler$$)
      )
      .subscribe(
        (hotels: Place[]) => {
          this.hotels = hotels;
          this.changeMainImage();
        }
      );

    this.hotelsService.getTypes()
      .pipe(
        takeUntil(this.subscribeControler$$)
      )
      .subscribe(
        (types: Set<string>) => {
          this.types = types;
        }
      );

    this.hotelsService.getCurrentType()
      .pipe(
        takeUntil(this.subscribeControler$$)
      )
      .subscribe(
        (type: string) => {
          this.type = type;
        }
     );

    this.hotelsService.getHotelIndex()
      .pipe(
        takeUntil(this.subscribeControler$$)
      )
       .subscribe(
         (index: number) => {
           this.hotelIndex = index;
         }
      );

  }

  getHotels() {
    return this.hotelsService.getHotels();
  }

  changeMainImage() {
    const imgUrl: Place = this.hotels.filter(({ type }) => type === this.type)[this.hotelIndex];
    this.mainImg.nativeElement.src = imgUrl.img;
  }

  onSelectType(type: string) {
    this.type = type;
    this.hotelsService.changeType(type);
    this.hotelsService.changeIndex(0);
    this.changeMainImage();
  }

  onChooseHotel(index: number) {
    this.hotelIndex = index;
    this.changeMainImage();
    this.hotelsService.changeIndex(index);
  }

}
