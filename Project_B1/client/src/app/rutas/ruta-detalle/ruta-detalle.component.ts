import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {Producto} from "../../models/producto";
import {ProductosService} from "../../services/productos/productos.service";

@Component({
  selector: 'app-ruta-detalle',
  templateUrl: './ruta-detalle.component.html',
  styleUrls: ['./ruta-detalle.component.scss']
})
export class RutaDetalleComponent implements OnInit {

   producto: Producto = {
    idProducto: 0,
    nombre_producto:'',
    precio_producto: 0,
    imagen_producto: '',
    descripcion:'',
    Proveedor_idProveedor: 0,
    marca_producto: ''
}
  name= this.producto.nombre_producto;

  constructor(private productoService:ProductosService,private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params['id'];
    if(params){
      this.productoService.getProducto(params).subscribe(
        res =>{
          console.log(res);
          this.producto = res;
          console.log(this.producto);
          this.insertarElement()
        },
        err => console.log(err)
      )
    }
  }

  insertarElement(){
    const name_product = document.getElementById('name_product');
    const p = document.createElement('p');
    p.textContent = String(this.producto.nombre_producto);
    name_product?.appendChild(p);
  }

}
