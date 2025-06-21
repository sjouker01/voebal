import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameApi {

  constructor(private http:HttpClient) { 

  }

  getGameData(){
    return this.http.get('https://webteacher.nl/voetbal/json.php?data=matches');  
  }
}
