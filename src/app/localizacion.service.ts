import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Localizacion} from "./models/localización.model";

@Injectable({
  providedIn: 'root'
})
export class LocalizacionService {

  constructor(private httpClient: HttpClient) { }
  public getLoc(): Observable<Localizacion> {
    return this.httpClient.get<Localizacion>("https://ipinfo.io/188.85.194.218/geo");
  }
}
