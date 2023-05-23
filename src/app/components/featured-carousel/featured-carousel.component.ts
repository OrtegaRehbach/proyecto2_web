import { Component } from '@angular/core';

const SLIDES = [
  {
    src: "assets/img/placeholder.jpg",
    title: "Title 1",
    desc: "Description 1",
    active: true
  },
  {
    src: "assets/img/halo_infinite.png",
    title: "Title 2",
    desc: "Description 2",
    active: false
  },
  {
    src: "assets/img/doom.jpg",
    title: "Title 3",
    desc: "Description 3",
    active: false
  },
  {
    src: "https://www.residentevil.com/re4/assets/images/common/share-re.png",
    title: "A Very, Very Long Title String",
    desc: "Description 4: This is a very very long description text meant to highlight the wrap behaviuor of the slide text container.",
    active: false
  }
];

@Component({
  selector: 'app-featured-carousel',
  templateUrl: './featured-carousel.component.html',
  styleUrls: ['./featured-carousel.component.scss']
})
export class FeaturedCarouselComponent {
  
  currentSlideIndex = 0;
  slides = SLIDES;

  goToSlide(index: number) {
    if (index !== this.currentSlideIndex) {
      for (let i = 0; i < this.slides.length; i++) {
        const slide = this.slides[i];
        if (slide.active == true) {         
          this.slides[index].active = true;
          slide.active = false;
          this.currentSlideIndex = index;
          break;
        }
      }
    }
  }

  changeSlide(offset: number) {   
    let newIndex = this.currentSlideIndex + offset;
    newIndex = (newIndex < 0) ? this.slides.length - 1 : newIndex;
    newIndex = (newIndex >= this.slides.length) ?  0 : newIndex;        
    this.goToSlide(newIndex);
  }

  nextSlide() {
    this.changeSlide(1);
  }

  prevSlide() {
    this.changeSlide(-1);
  }
}
