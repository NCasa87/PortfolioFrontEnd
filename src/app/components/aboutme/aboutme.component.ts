import { Component, OnInit } from '@angular/core';
import { InformationService } from 'src/app/services/information.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  miPortfolio:any;
  editing = false;
  aboutMeText: string = '';

  //inyección del servicio en el constructor
  constructor(private datosPortfolio:InformationService) { }

  //para acceder al servicio, lo agrego al ngOnInit
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio=data;
      this.aboutMeText = this.miPortfolio.aboutme;
    });
  }

  editAboutMe() {
    this.editing = true;
  }

  saveAboutMe() {
    this.editing = false;
    this.miPortfolio.aboutme = this.aboutMeText;
  }

  cancelEdit() {
    this.editing = false;
    this.aboutMeText = this.miPortfolio.aboutme;
  }

  deleteAboutMe() {
    this.aboutMeText = "";
  }
}
