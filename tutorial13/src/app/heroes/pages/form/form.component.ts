import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ConfirmComponent } from '../../components/confirm/confirm.component';
import { Heroe, Publisher } from '../../heroe-type';
import { HeroesService } from '../../services/heroes.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [`
  img{
    width: 100%%;
    border-radius: 5px
  }
  `
  ]
})
export class FormComponent implements OnInit {
 publisher = [
  {
    id: 'DC Comics',
    desc: 'DC - Comics',
  },
  {
    id: 'Marvel Comics',
    desc: 'Marvel - Comics',
  }
 ];
 heroe: Heroe={
  superhero:'',
  alter_ego:'',
  characters:'',
  first_appearance:'',
  publisher:Publisher.DCComics,
  alt_img:''

  };
  title:string ='';

  constructor(
    private activateRoute:ActivatedRoute,
    private heroesService:HeroesService,
    private router:Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    
    if(!this.router.url.includes('edit')){
      this.title ='Nuevo';
      return;
    }
    //solo se ejecuta cuando es editar
    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroeById(id))
    )
    .subscribe( heroe => {
      this.heroe= heroe;
      this.title= 'Actualizar'
    }
    );    
  
   
  }
  save(){
    if(this.heroe.superhero.trim().length === 0){
      return;
    }
    if(this.heroe.id){
      //actualiza      
      this.updateHeroe();
    }else{
      //agraga Heroe
      this.addHeroe();

    }
    
  }
  addHeroe(){
    this.heroesService.addHeroe(this.heroe)
    .subscribe( response =>{
      this.showSnackBar('Registro Agregado');
      console.log('Agregando ', response);
    });
  }
  updateHeroe(){
    this.heroesService.putHeroe(this.heroe)
    .subscribe( response =>{
      this.showSnackBar('Registro Actualizado');
      console.log('Actualizando ', response);
      this.router.navigate(['/heroes/edit',response.id])
    });
  }


  delete(){
    let dialog = this.dialog.open(ConfirmComponent, {
      width:'250px',
      data: this.heroe
    });
    dialog.afterClosed().subscribe((res)=>{
      if(res){
        this.heroesService.deleteHeroe(this.heroe.id!)
        .subscribe(response=>{
          this.router.navigate(['/heroes']);
          this.showSnackBar('Registro Eliminado');
          console.log('Eliminado..');
        });
      }

    });
    
    
  }
   showSnackBar(sms : string){
    this.snackBar.open(sms,'OK!',{
      duration:2500,
      verticalPosition:'top',
      panelClass:['mat-toolbar', 'mat-warn']
    });
   }


}
