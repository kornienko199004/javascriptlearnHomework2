import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { Place } from '../shared/model';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class MainCardComponent implements OnInit {
  @Input() data: Place[];
  @Input() types: any;
  @Output() changedType = new EventEmitter<string>();
  @Output() changedIndex = new EventEmitter<number>();

  hotelIndex = 0;
  type: string;

  constructor() {}

  ngOnInit() {
    this.type = this.types[0];
  }

  onSelectType(type: string) {
    this.hotelIndex = 0;
    this.type = type;
    this.changedType.emit(this.type);
    this.changedIndex.emit(this.hotelIndex);
  }

  onChooseHotel(index: number) {
    this.hotelIndex = index;
    this.changedIndex.emit(this.hotelIndex);
  }

}
