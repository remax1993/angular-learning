import { Component, OnInit } from '@angular/core';
import {Plant} from "./plant";

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.sass']
})
export class PlantDetailComponent implements OnInit {
  plant: Plant;

  constructor() { }

  ngOnInit() {
  }

}
