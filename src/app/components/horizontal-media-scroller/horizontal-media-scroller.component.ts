import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models';

@Component({
  selector: 'app-horizontal-media-scroller',
  templateUrl: './horizontal-media-scroller.component.html',
  styleUrls: ['./horizontal-media-scroller.component.scss']
})
export class HorizontalMediaScrollerComponent {
  @Input("title") scrollerTitle = "Title";
  @Input("games") games: Array<Game> = []; 

  constructor(private router: Router) {}
  
  getRatingColor(rating: number): string {
    if (rating >= 75) {
      return "good";
    } else if (rating < 75 && rating >= 50) {
      return "avg";
    } else {
      return "bad";
    }
  } 

  goToDetails(id: string) {
    this.router.navigate(['details', id]);
  }
}
