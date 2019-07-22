import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent implements OnInit {
  @Input() data: any[];
  index = 0;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
