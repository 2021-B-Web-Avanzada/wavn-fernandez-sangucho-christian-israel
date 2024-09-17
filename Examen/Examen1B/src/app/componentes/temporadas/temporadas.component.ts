import { Component, OnInit } from '@angular/core';
import seasons from './seasons';

@Component({
  selector: 'app-temporadas',
  templateUrl: './temporadas.component.html',
  styleUrls: ['./temporadas.component.css']
})
export class TemporadasComponent implements OnInit {

  temporadas = seasons
  constructor() { }

  ngOnInit(): void {
  }

}
