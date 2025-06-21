import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DetailsApi {
 constructor(private http:HttpClient){

 }
 getMatches(){
  return this.http.get('https://webteacher.nl/voetbal/json.php?data=matches')
 }
}
  