import {Component, OnInit} from '@angular/core';
import {Plant} from './plant';
import {PlantService} from "./plant.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  plants: Plant[];
  //temp: Plant = new Plant('Лаванда', 'Серебряная листва', 99.9);

  // save(): void{
  //   this.plant.name = this.temp.name;
  //   this.plant.description = this.temp.description;
  //   this.plant.price = this.temp.price;
  // };
  //
  // cancel(): void{
  //   this.temp.name = this.plant.name;
  //   this.temp.description = this.plant.description;
  //   this.temp.price = this.plant.price;
  // }


  constructor(private ps: PlantService){}
    name: string = 'TestName';

   ngOnInit(){
    this.plants = this.ps.getPlants()
  }
    //insert HTML code from component
    language: string = '<strong>TypeScript</strong>';


}

