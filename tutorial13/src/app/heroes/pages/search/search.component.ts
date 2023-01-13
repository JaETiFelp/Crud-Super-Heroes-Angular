import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../heroe-type';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
 termino: string ='';
 heroes : Heroe[]=[]; 
 heroeSeleccionado!: Heroe | undefined;

  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
  }
  buscando(){
    this.heroesService.getSuggestion(this.termino.trim())
    .subscribe( response => this.heroes = response);
  }
  optionSelectedHeroe(event:MatAutocompleteSelectedEvent){
    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      return;
    }
    const heroe: Heroe = event.option.value;    
    this.termino = heroe.superhero;
    
    this.heroesService.getHeroeById(heroe.id!)
    .subscribe( heroe => this.heroeSeleccionado =  heroe);
    
  }

}
