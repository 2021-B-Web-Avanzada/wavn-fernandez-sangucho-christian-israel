import {Component, HostBinding, OnInit} from '@angular/core';
import {ProductosService} from "../../services/productos/productos.service";

@Component({
  selector: 'app-ruta-galeria',
  templateUrl: './ruta-galeria.component.html',
  styleUrls: ['./ruta-galeria.component.scss']
})
export class RutaGaleriaComponent implements OnInit {

  @HostBinding('class')classes = 'row';

  productos: any = [];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.getProductos()
  }

  getProductos(){
    this.productosService.getProductos().subscribe(
      res => {
        this.productos = res;
      },
      err => console.log(err)
    );
  }

}
