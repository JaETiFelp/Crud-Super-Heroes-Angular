import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../heroe-type';
import {HeroesService} from '../../services/heroes.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
 heroes: Heroe[]=[];
  constructor(
    private heroeService:HeroesService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(){
    this.heroeService.getHeroes().subscribe(
      response => {
        this.heroes= response;
        console.log(response)
      }
    )
  }

}
