import { Injectable } from '@angular/core';
import { DireccionIp } from './models/ip.model';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private httpClient: HttpClient) { }

  public getIp(): Observable<DireccionIp> {
    return this.httpClient.get<DireccionIp>("https://api.ipify.org/?format=json");
  }
}
