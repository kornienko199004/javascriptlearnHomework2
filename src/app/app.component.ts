import { Component } from '@angular/core';
import { Place } from './shared/model';
import { data } from './mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  index = 0;
  type: string;
  data: Place[] = data;
  types = new Set<string>();

  constructor() {
    this.data.forEach(({ type }) => {
      this.types.add(type);
    });
    this.type = this.types.values().next().value;
  }

  onChangeIndex(index: number) {
    this.index = index;
  }

  onChangeType(type: string) {
    this.type = type;
  }
}
