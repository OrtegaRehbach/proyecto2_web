import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { SlideContentComponent } from './slide-content/slide-content.component';

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
  }
]

@Component({
  selector: 'app-featured-carousel',
  templateUrl: './featured-carousel.component.html',
  styleUrls: ['./featured-carousel.component.scss']
})
export class FeaturedCarouselComponent {
  
  currentSlideIndex = 0;
  slides = SLIDES;

  @ViewChildren('slide') queryResult!: QueryList<HTMLLIElement>;

  changeSlide(offset: number) {
    for (let i = 0; i < this.slides.length; i++) {
      const slide = this.slides[i];
      if (slide.active == true) {        
        let newIndex = i + offset;
        newIndex = (newIndex < 0) ? this.slides.length - 1 : newIndex;
        newIndex = (newIndex >= this.slides.length) ?  0 : newIndex;        
        this.slides[newIndex].active = true;
        slide.active = false;
        break;
      }
    }
  }

  nextSlide() {
    this.changeSlide(1);
  }

  prevSlide() {
    this.changeSlide(-1);
  }
}
