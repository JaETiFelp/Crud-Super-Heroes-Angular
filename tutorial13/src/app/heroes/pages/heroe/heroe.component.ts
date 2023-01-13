import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../heroe-type';
import { HeroesService} from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
  img{
    width: 100%;
    border-radius: 5px;
  }
  `]
})
export class HeroeComponent implements OnInit {
heroe!: Heroe;
  constructor(
    private activateRoute: ActivatedRoute,
    private heroeService: HeroesService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activateRoute.params
    .pipe( 
      switchMap( ({ id }) => this.heroeService.getHeroeById(id))
    )
    .subscribe(heroe => this.heroe = heroe
    );
  }
  back(){
    this.router.navigate(['/heroes/list']);
  }
  


}
