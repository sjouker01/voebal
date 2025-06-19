import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsApi } from './details-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toernooi-details',
  imports: [CommonModule],
  templateUrl: './toernooi-details.html',
  styleUrl: './toernooi-details.scss',
})

// this.id is id of home page (id = ook jaar )
export class ToernooiDetails {
  id: string | null = null;
  filter: string | null = null;
  matches: any[] =[];
  games: any[] = [];
  constructor(private route: ActivatedRoute , private matchesService:DetailsApi) {
    this.route.queryParamMap.subscribe((params) => {
      this.id = params.get('id');
      // console.log(this.id);
      this.matchesService.getMatches().subscribe((data:any) => {
        this.matches = data;
        // console.log( this.matches);
      })
      this.filterMatches();
      
    });
  }
  filterMatches(): void {
    console.log();
   this.games = this.matches.filter(match => match.year === this.id);
   console.log(this.games);
   
 }
}
