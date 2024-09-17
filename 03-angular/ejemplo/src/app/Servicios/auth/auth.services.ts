import {Injectable} from "@angular/core";

@Injectable()
export  class AuthServices{
  estaloegeado = false;

  roles = [
    'admin',
    'supevisor',
    'usuario'
  ];
}
