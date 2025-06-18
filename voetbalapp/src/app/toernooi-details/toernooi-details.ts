import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-toernooi-details',
  imports: [],
  templateUrl: './toernooi-details.html',
  styleUrl: './toernooi-details.scss'
})
export class ToernooiDetails {
constructor(private route: ActivatedRoute){
  this.route.params.subscribe(params => console.log(params))
}
}
  