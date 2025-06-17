import { Component } from '@angular/core';
import { HomeApi } from './home-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  years: any[] = [] ;
  constructor(private ApiService: HomeApi ){
    this.ApiService.getApiData().subscribe((data:any)=>{
      this.years = data.Search;
    })
  }
}
