import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIResponse, Game } from 'src/app/models';
import { GamesService } from 'src/app/services/games.service';

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
export class FeaturedCarouselComponent implements OnInit {
  
  featuredGames: Array<Game> = [];
  currentSlideIndex = 0;
  slides = SLIDES;
  slideInterval: any;
  fadeTime = 4000;  // Time in ms
  
  constructor(private gameService: GamesService, private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.getFeatured();
    });
    // Start fade timer
    this.slideInterval = setInterval(() => {
      this.nextSlide()
    }, this.fadeTime)
  }

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
    // Reset fade timer every time a new slide is set
    clearInterval(this.slideInterval)
    this.slideInterval = setInterval(() => {
      this.nextSlide()
    }, this.fadeTime)
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

  getFeatured() {
    this.gameService
      .getHighestRatedNow(5)
      .subscribe((gameList: any) => {
        this.featuredGames = (gameList as APIResponse<Game>).results;
        this.slides = this.featuredGames.map(game => {
          return {
            src: game.background_image,
            title: game.name,
            desc: `Lanzamiento: ${game.released}` + " " + `Rating: ${game.metacritic}`,
            active: false
          }
        });
        (this.slides[0] as {src: string, title: string, desc: string, active: boolean}).active = true;
      });
  }
}
