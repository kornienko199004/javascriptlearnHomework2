import { Component, Input } from '@angular/core';
import { Place } from '../shared/model';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss']
})
export class SocialCardComponent {
  @Input() hotel: Place;
}
