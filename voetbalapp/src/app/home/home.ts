import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeApi } from './home-api';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  years: any[] = [];

  constructor(private homeService: HomeApi) {
    this.homeService.getData().subscribe((data:any) =>{
    this.years = data.Search;
    }
    )
  }

}
