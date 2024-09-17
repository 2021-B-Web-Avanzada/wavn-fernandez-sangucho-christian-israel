import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthServices} from "./auth.services";

@Injectable()
export class EsadministradorGuard  implements CanActivate{

  //Injeccion de dependencias
  constructor(
    private readonly _authService:AuthServices,
    private readonly _router: Router,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const esAdministrador = this._authService.roles.some((permiso)=> permiso ==='admin');
    if(!esAdministrador){
      this._router.navigate(['/forbidden'])
    }
    return esAdministrador;
  }

}
