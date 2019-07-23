import { Component, Input } from '@angular/core';
import { Place } from '../shared/model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
  @Input() hotel: Place;
}
