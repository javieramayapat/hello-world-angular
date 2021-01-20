import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {7

  anio: number;

  constructor() { 
    this.anio = new Date().getFullYear();
  }


}
