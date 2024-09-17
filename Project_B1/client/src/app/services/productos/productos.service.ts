import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Producto} from "../../models/producto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) {
  }

  getProductos(){
    return this.http.get(`${this.API_URI}/producto`);
  }

  getProducto(id: string){
    return this.http.get(`${this.API_URI}/producto/${id}`);
  }

  saveProductos(producto:Producto){
    return this.http.post(`${this.API_URI}/producto`,producto);
  }

  updateProductos(id: string | number , updateProductos: Producto): Observable<Producto>{
    return this.http.put(`${this.API_URI}/producto/${id}`,updateProductos);
  }

  deleteProductos(id: string){
    return this.http.delete(`${this.API_URI}/producto/${id}`);
  }
}
