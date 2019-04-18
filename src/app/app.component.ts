import { Component } from '@angular/core';
import {Plant} from './plant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  plant: Plant = new Plant('Лаванда', 'Серебряная листва', 99.9);
  temp: Plant = new Plant('Лаванда', 'Серебряная листва', 99.9);

  save(): void{
    this.plant.name = this.temp.name;
    this.plant.description = this.temp.description;
    this.plant.price = this.temp.price;
  }

  cancel(): void{
    this.temp.name = this.plant.name;
    this.temp.description = this.plant.description;
    this.temp.price = this.plant.price;
  }
}

