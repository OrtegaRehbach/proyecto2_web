import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Game } from 'src/app/models';
import { GamesService } from 'src/app/services/games.service';

const placeholderGame: Game = {
  id: 0,
  background_image: "assets/img/placeholder.jpg",
  name: "Game name", 
  slug: "game_name",
  released: "01-01-2001", 
  metacritic_url: "metacritic_url", 
  website: "game_website",
  description: "game_description", 
  metacritic: 50,
  genres: [{name: "genre"}],
  parent_platforms: [
    {
      platform: {
        name:"platform_name",
        slug: "platform_slug"
      }
    }
  ],
  publishers: [
    {name: "publisher"}
  ],
  ratings: [
    {
      id: 0,
      count: 0,
      title: "rating_title"
    }
  ],
  screenshots: [
    {image: "assets/img/placeholder.jpg"},
    {image: "assets/img/placeholder.jpg"},
    {image: "assets/img/placeholder.jpg"},
    {image: "assets/img/placeholder.jpg"},
    {image: "assets/img/placeholder.jpg"}
  ],
  trailers: [
    {
      data: {
        max: "trailer_url"
      }
    }
  ]
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  gameRating = 0;
  gameId: string;
  game: Game;

  constructor(private activatedRoute: ActivatedRoute, private gameService: GamesService) {
    this.game = placeholderGame;
  }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.gameId = params['id'];
      this.getGameDetails(this.gameId);
    })
  }

  getGameDetails(id: string) {
    this.gameService
      .getGameDetails(id)
      .subscribe((gameResp: Game) => {
        this.game = gameResp;
        this.gameRating = this.game.metacritic;
      });
  }

  getRatingColor(rating: number): string {
    if (rating >= 75) {
      return "good";
    } else if (rating < 75 && rating >= 50) {
      return "avg";
    } else {
      return "bad";
    }
  } 

}
