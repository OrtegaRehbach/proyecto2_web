import { Component, Input } from '@angular/core';

const MEDIA = [
  {
    id: 0,
    name: "Name 1",
    background_image: "assets/img/halo_infinite.png",
    rating: 80
  },
  {
    id: 1,
    name: "Name 2",
    background_image: "assets/img/doom.jpg",
    rating: 85
  },
  {
    id: 2,
    name: "Name 3",
    background_image: "assets/img/placeholder.jpg",
    rating: 64
  },
  {
    id: 3,
    name: "Name 4",
    background_image: "assets/img/halo_infinite.png",
    rating: 40
  },
  {
    id: 4,
    name: "Name 5",
    background_image: "assets/img/placeholder.jpg",
    rating: 78
  },
  {
    id: 5,
    name: "Name 6",
    background_image: "assets/img/doom.jpg",
    rating: 92
  }
]

@Component({
  selector: 'app-horizontal-media-scroller',
  templateUrl: './horizontal-media-scroller.component.html',
  styleUrls: ['./horizontal-media-scroller.component.scss']
})
export class HorizontalMediaScrollerComponent {
  @Input("title") scrollerTitle = "Title";
  @Input("games") games = MEDIA; 
}
