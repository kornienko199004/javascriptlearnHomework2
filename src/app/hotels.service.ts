import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { of, Subject } from 'rxjs';
import { Place } from './shared/model';

@Injectable()
export class HotelsService {
  private hotelTypes$$ = new Subject<Set<string>>();
  private hotelType$$ = new Subject<string>();
  private hotelIndex$$ = new Subject<number>();
  private currentHotel$$ = new Subject<Place>();
  private types: Set<string> = new Set();
  index = 0;
  type: string;
  hotels: Place[];
  // private type: string;

  constructor(
    private http: HttpClient,
    ) { }

  getHotels() {
    return this.http.get('hotels.json')
      .pipe(
        catchError((err) => {
          console.log(err);
          return of([]);
        }),
        tap((hotels: Place[]) => {
          this.hotels = [...hotels];
          this.hotels.forEach(({ type }) => {
            this.types.add(type);
          });
          this.type = this.types.values().next().value;
          this.hotelTypes$$.next(this.types);
          this.hotelType$$.next(this.type);
          this.hotelIndex$$.next(this.index);

          this.currentHotel$$.next(this.changeCurrentHotel(this.type, this.index));
        })
      );
  }

  getTypes() {
    return this.hotelTypes$$.asObservable();
  }

  getCurrentType() {
    return this.hotelType$$.asObservable();
  }

  getHotelIndex() {
    return this.hotelIndex$$.asObservable();
  }

  getCurrentHotel() {
    return this.currentHotel$$.asObservable();
  }

  changeType(type: string) {
    this.type = type;
    this.hotelType$$.next(type);
    this.currentHotel$$.next(this.changeCurrentHotel(this.type, this.index));
  }

  changeIndex(index: number) {
    this.index = index;
    this.hotelIndex$$.next(index);
    this.currentHotel$$.next(this.changeCurrentHotel(this.type, this.index));
  }

  changeCurrentHotel(currentType: string, index: number): Place {
    return this.hotels.filter(({ type }) => type === currentType)[index];
  }
}
