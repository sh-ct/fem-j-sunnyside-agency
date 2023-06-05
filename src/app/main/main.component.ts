import { Component } from '@angular/core';
import jsonData from '../../assets/data.json';
import { IData } from "../models/data.model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  data: IData = jsonData;
  galleryImages: string[] = [
    'image-gallery-milkbottles.jpg',
    'image-gallery-orange.jpg',
    'image-gallery-cone.jpg',
    'image-gallery-sugarcubes.jpg',
  ]

}
