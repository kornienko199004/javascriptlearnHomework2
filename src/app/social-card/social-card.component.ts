import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss']
})
export class SocialCardComponent implements OnInit {
  @Input() data: any[];
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
