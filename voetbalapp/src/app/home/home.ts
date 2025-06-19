import { Component } from '@angular/core';
import { HomeApi } from './home-api';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  template: ` 

  `
})
export class Home {
  
  /**
   * Description placeholder
   *array of jaar
   * @type {any[] }
   */
  gameDates: any[] = []; 
  constructor(private homeService: HomeApi) {
    this.homeService.getData().subscribe((data:any) =>{
      this.gameDates = data;
     
     
    }
  ) 
}
}
