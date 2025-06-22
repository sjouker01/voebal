import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsApi } from './details-api';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-toernooi-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './toernooi-details.html',
  styleUrl: './toernooi-details.scss',
})

// this.id is id of home page (id = ook jaar )
export class ToernooiDetails {
  id: string | null = null;
  filter: string | null = null;
  matches: any[] = [];
  games: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private matchesService: DetailsApi,
    private location: Location
  ) {
    this.route.queryParamMap.subscribe((params) => {
      this.id = params.get('id');
      // console.log(this.id);
      this.matchesService.getMatches().subscribe((data: any) => {
        this.matches = data;
        // console.log( this.matches);
        this.filterMatches();
        console.log(this.games);
      });
    });
  }
  filterMatches(): void {
    this.games = this.matches.filter((match) => match.year === this.id);
    console.log(this.games);
  }
    goBack(){
    this.location.back();
  }

}
