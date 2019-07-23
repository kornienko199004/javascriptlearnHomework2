import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class MainCardComponent implements OnInit {
  @Input() data: any[];
  @Output() changedIndex = new EventEmitter<number>();

  index = 0;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

  onChangeIndex(index: number) {
    this.index = index;
    console.log(index);
    this.changedIndex.emit(this.index);
  }

}
