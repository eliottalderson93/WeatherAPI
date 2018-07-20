import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiKey : String;
  constructor(private _http: HttpClient) {
    this.apiKey = "&APPID=6e293d034fa481c9e4af385e02e22aa0";
   }
  getWeather(cityID : String){
    console.log("city: ",cityID);
    let route = "//api.openweathermap.org/data/2.5/weather?id=" + cityID + this.apiKey;
    console.log("route:",route);
    let obs = this._http.get(route);
    console.log("API call in service:",obs);
    return obs;
  }
}
