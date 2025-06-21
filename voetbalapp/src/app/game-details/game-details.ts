import { Component } from '@angular/core';
import { GameApi } from './game-api';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-game-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './game-details.html',
  styleUrl: './game-details.scss',
})
export class GameDetails {
  id: string | null = null;
  
  games: any[] = [];
  results: any[] =[];
  constructor(private route: ActivatedRoute, private gamesService: GameApi) {
    this.route.queryParamMap.subscribe((params) => {
      this.id = params.get('id');
      this.gamesService.getGameData().subscribe((data:any) =>
      this.games = data
    )
    this.filtergame();
  });
  // console.log( this.games)
  }

  filtergame(){
    this.results = this.games.filter( game => game.id === this.id)
    console.log(this.results);
  }
}
