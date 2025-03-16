import { Component } from '@angular/core';
import { SliderData } from '../../Models/slider-data';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  slider = new SliderData(['img1.jpg', 'img3.jpg', 'img2.jpg']);

  nextImg() {
    this.slider.nextImg();
  }
  prevImg() {
    this.slider.prevImg();
  }
  playImg() {
    this.slider.playImg();
  }
  stopImg() {
    this.slider.stopImg();
  }
}
