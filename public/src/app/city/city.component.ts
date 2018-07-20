import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city : String;
  cityWeather : any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
    ) {
    
   }
  ngOnInit() {
    this._route.params.subscribe((params: Params) => 
      //console.log(params['city'];
      this.getCityWeather(params['cityId'])
    );
    
  }
  getCityWeather(cityId : String){
    console.log("cityId:",cityId);
    let weatherObs = this._httpService.getWeather(cityId);
    weatherObs.subscribe(data =>{
      console.log(data);
      this.cityWeather = data;
    });
  }
}
