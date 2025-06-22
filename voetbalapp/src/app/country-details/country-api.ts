import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CountryApi {

  constructor(private http: HttpClient) {

   }
   getPlayersData(){
    return this.http.get('https://webteacher.nl/voetbal/json.php?data=players');
   }
}
