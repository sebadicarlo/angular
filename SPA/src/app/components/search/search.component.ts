import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../servicios/heroes.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  heroesSearch:any={};
  constructor(
    private _heroesService:HeroesService,
    private _activatedRoute:ActivatedRoute,
    private router:Router
  ) {
      this._activatedRoute.params.subscribe(params=>{
      this.heroesSearch= _heroesService.buscarHeroes(params['termino'])
      });
      console.log(this.heroesSearch);
    }

  ngOnInit() {}  
}
