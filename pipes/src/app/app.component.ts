import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string="Sebastian";
  nombre2:string="SebAstIan Di cARlo";

  arreglo=[1,2,3,4,5,6,7,8,9,10];

  PI=Math.PI;

  a=0.234;

  salario=1234.5;

  heroe={
    nombre:"Logan",
    clave:"Wolverine",
    edad:300,
    direccion:{
      calle:"19",
      casa:"primera"
    }
  }

  valorDePromesa= new Promise( (resolve,reject)=>{
    setTimeout(() =>resolve('Llego la data'), 3500);
  })

  fecha= new Date();

  video="Dvpd9_5vuks";
}
