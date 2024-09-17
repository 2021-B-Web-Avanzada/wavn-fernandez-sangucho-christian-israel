import {Component, HostBinding, OnInit} from '@angular/core';
import {Aereopuerto} from "../../models/aereopuerto";
import {Router,ActivatedRoute} from "@angular/router";
import {AereopuertosService} from "../../services/aereopuertos.service";

@Component({
  selector: 'app-aereopuerto-form',
  templateUrl: './aereopuerto-form.component.html',
  styleUrls: ['./aereopuerto-form.component.css']
})
export class AereopuertoFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  aereopuerto: Aereopuerto = {
    idaereopuerto: 0,
    nombre_aereopuerto: '',
    ciudad_aereopuerto: '',
    telefono_aereopuerto:'',
    tipo_aereopuerto:''
}

  edit:boolean = true;

  constructor(private aereopuertoService: AereopuertosService,private router: Router,private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id;
    const params = this.activedRoute.snapshot.params['id'];
    if(params){
      this.aereopuertoService.getAereopuerto(params).subscribe(
        res =>{
          console.log(res);
          this.aereopuerto = res;
          this.edit =false;
        },
        err => console.log(err)
      )
    }
  }

  saveNewAereopuerto(){
    delete this.aereopuerto.idaereopuerto;

    this.aereopuertoService.saveAereopuerto(this.aereopuerto)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(["/aereopuertos"]);
        },
        err => console.log(err)
      )
  }

  updateAereopuerto(){
    this.aereopuertoService.updateAereopuerto(this.aereopuerto.idaereopuerto,this.aereopuerto).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/aereopuertos'])
      },
      err => console.log(err)
    )
  }

}
