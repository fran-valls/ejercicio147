import { Injectable } from '@angular/core';
import { direccionIp } from './models/ip.model';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private httpClient: HttpClient) { }

  public getIp(): Observable<direccionIp> {
    return this.httpClient.get<direccionIp>("https://api.ipify.org/?format=json");
  }
}
