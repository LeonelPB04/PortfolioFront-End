import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const exp = new Experiencia(this.nombreE, this.descripcionE);
    this.experienciaService.save(exp).subscribe(data=>{
      alert("Experiencia añadida.");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló al crear la experiencia.");
      this.router.navigate(['']);
    })
  }

}
