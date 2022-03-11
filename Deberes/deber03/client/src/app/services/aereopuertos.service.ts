import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Aereopuerto} from "../models/aereopuerto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AereopuertosService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) {
  }

  getAereopuertos(){
    return this.http.get(`${this.API_URI}/aereopuertos`);
  }

  getAereopuerto(id: string){
    return this.http.get(`${this.API_URI}/aereopuertos/${id}`);
  }

  saveAereopuerto(aereopuerto:Aereopuerto){
    return this.http.post(`${this.API_URI}/aereopuertos`,aereopuerto);
  }

  updateAereopuerto(id: string | number | undefined , updateAereopuerto: Aereopuerto): Observable<Aereopuerto>{
    return this.http.put(`${this.API_URI}/aereopuertos/${id}`,updateAereopuerto);
  }

  deleteAereopuerto(id: string){
    return this.http.delete(`${this.API_URI}/aereopuertos/${id}`);
  }

}
