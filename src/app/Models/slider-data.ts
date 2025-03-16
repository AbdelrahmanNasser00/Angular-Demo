export class SliderData {
  images: string[];
  currentIndex: number = 0;
  interval: any = null;
  currentImg: string;

  constructor(images: string[]) {
    this.images = images;
    this.currentImg = this.images[this.currentIndex];
  }

  nextImg() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    console.log(this.images[this.currentIndex]);
    this.currentImg = this.images[this.currentIndex];
  }
  prevImg() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.currentImg = this.images[this.currentIndex];
  }
  playImg() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.nextImg();
        this.currentImg = this.images[this.currentIndex];
      }, 1000);
    }
  }
  stopImg() {
    if (this.interval) clearInterval(this.interval);
    this.currentImg = this.images[this.currentIndex];
    this.interval = null;
  }
}
