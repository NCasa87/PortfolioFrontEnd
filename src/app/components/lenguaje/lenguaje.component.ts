import { Component, OnInit } from '@angular/core';
import { InformationService } from 'src/app/services/information.service';

@Component({
  selector: 'app-lenguaje',
  templateUrl: './lenguaje.component.html',
  styleUrls: ['./lenguaje.component.css']
})
export class LenguajeComponent implements OnInit {
  miPortfolio:any;
  languagesList:any;

  //inyección del servicio en el constructor
  constructor(private datosPortfolio:InformationService) { }

  //para acceder al servicio, lo agrego al ngOnInit
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.languagesList=data.language;
    });
  }
}