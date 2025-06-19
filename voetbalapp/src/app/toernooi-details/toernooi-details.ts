import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toernooi-details',
  imports: [],
  templateUrl: './toernooi-details.html',
  styleUrl: './toernooi-details.scss',
})

// this.id is id of home page (id = ook jaar )
export class ToernooiDetails {
  id: string | null = null;
  filter: string | null = null;
  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((params) => {
      this.id = params.get('id');
      console.log(this.id);
    });
  }
}
