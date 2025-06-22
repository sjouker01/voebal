import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CountryApi } from './country-api';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-country-details',
  imports: [RouterModule , CommonModule],
  templateUrl: './country-details.html',
  styleUrl: './country-details.scss',
})
export class CountryDetails {
  LCode: string | null = null;
  RID: string | null = null;
  PLDatas: any[] = [];
  InfoPLayers: any[] = [];
  LandFilters: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private CountryApiService: CountryApi
  ) {
    this.route.queryParamMap.subscribe((params) => {
      this.LCode = params.get('HTT');
      this.RID = params.get('RID');
      // console.log(this.LCode);
      this.CountryApiService.getPlayersData().subscribe((data: any) => {
        this.PLDatas = data;
        this.filterPLData();
      });
    });
    console.log(this.InfoPLayers);
  }

filterPLData() {
  this.InfoPLayers = this.PLDatas.filter(
    (PLData) => PLData.roundid === this.RID &&
             PLData.team_initials === this.LCode
  );
  }
}
