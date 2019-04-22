import {Component, OnInit, ViewChild} from '@angular/core';
import {Plant} from './plant';
import {PlantService} from "./plant.service";
import {PlantDetailComponent} from "./plant-detail.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
    //access to templates elements

    @ViewChild(PlantDetailComponent) detail: PlantDetailComponent;
    constructor(private ps: PlantService){

    }
    ngOnInit(){
        this.plants = this.ps.getPlants()
    }
    showPlant(plant: Plant){
        this.detail.plant = plant;
    }

    //end access to templates elements

    cls: string = 'highlighted special';
    flag: boolean = false;

    par: Object = {
        bold: false,
        italic: false
    };

    cls2: Object = {'first second third': true};
    //cls2: string = 'first second third';
    //cls2: string[] = ['four', 'fifth'];

    color: string = '#ffffff';
    fontSize: number = 12;

    par: Object = {'background-color': '#ffffff',
                    'font-size.px': '12'}

/*

//use of event object
    x: number = 0;
    y: number = 0;

    showCoords(evt: MouseEvent): void{
        this.x = evt.offsetX;
        this.y = evt.offsetY;
    }
//end use of event object

*/
  plants: Plant[];
  testPlant: Plant = new Plant('тестовая лаванда', 'test', 0);
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






 /*
    //insert HTML code from component
    language: string = '<strong>TypeScript</strong>';

 */
}

