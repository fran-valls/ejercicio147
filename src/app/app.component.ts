import { Component, OnInit } from '@angular/core';
import { DireccionIp } from './models/ip.model';
import { IpService } from './ip.service';

import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Localizacion} from "./models/localización.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio147';

  public ipDir!: DireccionIp;
  public loc!: Localizacion;
  public optenerLoc: boolean;

  constructor(public ipService: IpService, public httpClient: HttpClient){
    this.ipDir = {ip: "Pulsa el botón Obtener ip"};
    this.optenerLoc = false;
  }

  obtenerIp(): void {
    this.ipDir = {ip: "Actualizando..."};

    this.ipService.getIp().subscribe(
      {
        next: (datos: DireccionIp) => {
          this.ipDir = datos;
          this.optenerLoc = true;
        },
        error: () => {
          console.log("Ha ocurrido un error");

        }
      }
    )
  }
  obtenerLocalizacion(){
    this.httpClient.get<Localizacion>("http://ipwho.is/" +this.ipDir.ip).subscribe(
      {
        next: (datos: Localizacion) => {
          this.loc = datos;
          console.log(datos);
        },
        error: (error: HttpErrorResponse)=> {
          console.log(error);
        }
      }
    )
  }
}
