import { Injectable } from '@angular/core';
import { APIConfig } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  sendRequest(req: string) {
    console.log(`${APIConfig.url}/${req}`);
    return this.http.get<[]>(`${APIConfig.url}/${req}`);
  }

  sendObjRequest(req: string) {
    console.log(`${APIConfig.url}/${req}`);
    return this.http.get<{}>(`${APIConfig.url}/${req}`).toPromise();
  }

  sendParamRequest(req: string, params: object) {
    console.log('APIConfig.url: ', APIConfig.url);
    return this.http.get<[]>(`${APIConfig.url}/${req}/${params}`).toPromise();
  }

  sendPostRequest(req: string, body: object): any {
    console.log('APIConfig.url: ', APIConfig.url);
    return this.http.post(`${APIConfig.url}/${req}`, body).toPromise();
  }

}
