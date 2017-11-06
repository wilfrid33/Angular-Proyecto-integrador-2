import { Component } from '@angular/core';
import { IClient } from './client';
import { ClientService } from './client.service';
import { Router } from '@angular/router';
import { LocalStorageHelper } from '../shared/localStorageHelper';


@Component({
    templateUrl: './client.component.html'
})
export class ClientComponent {
    public pageTitle: string = 'Iniciar Sesión';
    clients: IClient;
    //clients: IClient[] = [];
    headers: Headers = new Headers();

    constructor(private _clientService: ClientService, private _router: Router, private _localStorageHelper: LocalStorageHelper) {
        this.clients = <IClient>{
            Email: "",
            Password: ""
        }



    }

    Ingresar():void {
        console.log("");
        var response = this._clientService.LoginClients(this.clients)
        .subscribe(
        clients => {this.clients = clients;
            if(this.clients==null){
                alert("Usuario y/o Contraseña incorrectos");
                this.clients = <IClient>{
                    Email: "",
                    Password: ""
                }
            }else{
                this._localStorageHelper.saveObject('clients',clients);
                alert("Logueado con éxito");
                this._router.navigate(['welcome/']);
            }
        }
        )
        ;
           
     

    }
    borrar(): void {

        this.clients.Email = "";
        this.clients.Password = "";
    }


}

