import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-ruta-crear-cuenta',
  templateUrl: './ruta-crear-cuenta.component.html',
  styleUrls: ['./ruta-crear-cuenta.component.scss']
})
export class RutaCrearCuentaComponent implements OnInit {

  hide = true;

  constructor() { }

  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
