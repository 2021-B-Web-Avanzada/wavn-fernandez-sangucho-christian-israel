import { Component, OnInit } from '@angular/core';
import chapters from './chapters';

@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.component.html',
  styleUrls: ['./capitulos.component.css']
})
export class CapitulosComponent implements OnInit {

  capitulos = chapters
  
  constructor() { }

  ngOnInit(): void {
  }

}
