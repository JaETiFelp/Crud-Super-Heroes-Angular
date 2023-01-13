import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html'
})
export class ErrorPageComponent implements OnInit {
 vector: number[]=[1,4,6,7,23,554,76];
 vector2: any[]=[
        {id:1,valor:100,description:'valor1'},
        {id:2,valor:40,description:'valor2'},
        {id:3,valor:70,description:'valor3'},
        {id:4,valor:65,description:'valor4'},
        {id:5,valor:3,description:'valor5'},
        {id:6,valor:23,description:'valor6'} 
  ];
  constructor() { }

  ngOnInit(): void {
    // let v1:number[]=this.vector.map(x => x*2);
    // console.log(v1);
    // let v2:number[]=this.vector2.map(x =>{ return (x.valor%2==0)? x.valor:'s'});
    // console.log(v2);
    let v3=this.vector.every(x =>{ return ( x >= 10)});
    console.log(v3);
    let v5=this.vector2.every(x =>{ return (x.valor>=40)});
    console.log(v5);

  }
   isBigEnough(elem:any) {
    return (elem>=10);
    
  }

}
