import { Injectable } from '@angular/core';
import {Plant} from "./plant";


const plants: Plant[] = [
    new Plant('Лаванда', 'Серебристая листва', 99.9),
    new Plant('Вербенка', 'Красная с белым', 139.9),
    new Plant('Лилейник', 'Ярко-красный цветок', 349.9)
];

Injectable()
export class PlantService {
  getPlants(): Plant[] {return plants}
  //constructor() { }
}
