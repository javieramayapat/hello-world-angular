import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent{

  mostrar =  true;

  frase:any  = {
      mensaje: "No tiene nada de malo sentir miedo, siempre y cuando no te dejes vencer",
      author: "Capitán America"
  }

  avengers: string[] = [
      "Ironman",
      "Viuda Negra",
      "Hulk",
      "Thor",
      "Avispa"
  ];

  constructor() { }

}
