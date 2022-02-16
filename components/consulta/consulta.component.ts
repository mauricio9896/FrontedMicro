import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  consultas: Array<any> = [];

  constructor(private service: ConsultasService) { }

  ngOnInit(): void {
    this.service.getDatos().subscribe(consultas => { this.consultas = consultas.results; })
    console.log(this.consultas);   
  }

  getInfo() {
    this.service.getDatos().subscribe(consultas => { this.consultas = consultas.results; })
    console.log(this.consultas);
    alert("Consulta realizada");
  }
}
