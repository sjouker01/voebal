import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeApi {

  constructor(private http:HttpClient) { 

  }
  getData(){
    return this.http.get('https://webteacher.nl/voetbal/json.php?data=worldcups')
  }

}
