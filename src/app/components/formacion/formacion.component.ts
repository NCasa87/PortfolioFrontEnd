import { Component, OnInit } from '@angular/core';
import { InformationService } from 'src/app/services/information.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})

export class FormacionComponent implements OnInit {
  miPortfolio:any;
  educationList:any;

  //inyección del servicio en el constructor
  constructor(private datosPortfolio:InformationService) { }

  //para acceder al servicio, lo agrego al ngOnInit
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.educationList=data.education;
      });
  }
}
