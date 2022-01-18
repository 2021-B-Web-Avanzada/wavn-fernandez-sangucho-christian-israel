import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthServices} from "./auth.services";

@Injectable()
export class EstalogeadoGuard implements CanActivate{

  //Injeccion de dependencias
  constructor(
    private readonly _authService:AuthServices,
    private readonly _router: Router,
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this._authService.estaloegeado){
      this._router.navigate(['/forbidden'])
    }
    return this._authService.estaloegeado;
  }

}
