import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../heroe-type';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
  mat-card{
    margin-top: 20px
  }
  `
    
  ]
})
export class HeroeTarjetaComponent implements OnInit {
  // @Input() heroe: Heroe |undefined;//
  @Input() item!: Heroe;// confia en mi q siempre habrá un heroe
  constructor() { }

  ngOnInit(): void {
  }

}
