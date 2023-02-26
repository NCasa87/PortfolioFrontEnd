import { Component, OnInit } from '@angular/core';
import { InformationService } from 'src/app/services/information.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  miPortfolio:any;
  editing = false;
  skillsText: string = '';

  //inyección del servicio en el constructor
  constructor(private datosPortfolio:InformationService) { }

  //para acceder al servicio, lo agrego al ngOnInit
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio=data;
      this.skillsText = this.miPortfolio.skills;
    });
  }

  editSkills() {
    this.editing = true;
  }

  saveSkills() {
    this.editing = false;
    this.miPortfolio.skills = this.skillsText;
  }

  cancelEdit() {
    this.editing = false;
    this.skillsText = this.miPortfolio.skills;
  }

  deleteSkills() {
    this.skillsText = "";
  }

}
