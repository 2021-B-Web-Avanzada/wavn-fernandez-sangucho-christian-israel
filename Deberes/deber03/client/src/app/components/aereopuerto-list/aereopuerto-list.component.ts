import { Component, OnInit } from '@angular/core';
import {AereopuertosService} from '../../services/aereopuertos.service'

@Component({
  selector: 'app-aereopuerto-list',
  templateUrl: './aereopuerto-list.component.html',
  styleUrls: ['./aereopuerto-list.component.css']
})
export class AereopuertoListComponent implements OnInit {

  aereopuertos: any =[];

  constructor(private  aereopuertosService: AereopuertosService) { }

  ngOnInit(): void {
    this.aereopuertosService.getAereopuertos().subscribe(
      res => {
        this.aereopuertos = res;
      },
      err => console.log(err)
    );
  }

}
