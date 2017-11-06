import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ClientService } from './client.service';


@Injectable()
export class ClienteGuard implements CanActivate {

    constructor(
        private _usuarioService: ClientService,
        private _router : Router) {

    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        var usuario = this._usuarioService.getClientes();
        if(usuario ==null ){
            alert("Usuario no autenticado");
            this._router.navigate(['/clients']);
        }
        
        return usuario != null;
    }


    canActivate2(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        var usuario = this._usuarioService.getClientes();
        if(this._usuarioService.clients.Email =="admin" &&
        this._usuarioService.clients.Password =="admin"
    ){
            alert("Usuario no autenticado como administrador");
            this._router.navigate(['/clients']);
        }
        return usuario != null;
    }
}