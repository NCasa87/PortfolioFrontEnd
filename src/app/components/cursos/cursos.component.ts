import { Component, OnInit } from '@angular/core';
import { InformationService } from 'src/app/services/information.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {
  miPortfolio:any;
  cursosList:any;

  //inyección del servicio en el constructor
  constructor(private datosPortfolio:InformationService) { }

  //para acceder al servicio, lo agrego al ngOnInit
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.cursosList=data.cursos;
      });
  }
}