import {Component, HostBinding, OnInit} from '@angular/core';
import {AereopuertosService} from '../../services/aereopuertos.service'

@Component({
  selector: 'app-aereopuerto-list',
  templateUrl: './aereopuerto-list.component.html',
  styleUrls: ['./aereopuerto-list.component.css']
})
export class AereopuertoListComponent implements OnInit {

  @HostBinding('class')classes = 'row';

  aereopuertos: any =[];

  constructor(private  aereopuertosService: AereopuertosService) { }

  ngOnInit(): void {
    this.getAereopuertos();
  }

  getAereopuertos(){
    this.aereopuertosService.getAereopuertos().subscribe(
      res => {
        this.aereopuertos = res;
      },
      err => console.log(err)
    );
  }

  deleteAereopuerto(id:string){
    this.aereopuertosService.deleteAereopuerto(id).subscribe(
      res => {
        console.log(res)
        this.getAereopuertos();
      },
      err => console.log(err)
    );
  }

  }
