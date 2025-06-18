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
