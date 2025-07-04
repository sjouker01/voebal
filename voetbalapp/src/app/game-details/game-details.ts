import { Component } from '@angular/core';
import { GameApi } from './game-api';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
@Component({
  selector: 'app-game-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './game-details.html',
  styleUrl: './game-details.scss',
})
export class GameDetails {
  id: string | null = null;

  games: any[] = [];
  results: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private gamesService: GameApi,
    private location: Location
  ) {
    this.route.queryParamMap.subscribe((params) => {
      this.id = params.get('id');
      this.gamesService.getGameData().subscribe((data: any) => {
        this.games = data;
        this.filtergame();
      });
    });
  }

  filtergame() {
    this.results = this.games.filter((game) => game.id === this.id);
  }
  goBack() {
    this.location.back();
  }
}
