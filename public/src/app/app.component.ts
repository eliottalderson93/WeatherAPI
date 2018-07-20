import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
      //api.openweathermap.org/data/2.5/weather?id=5746545
  //api.openweathermap.org/data/2.5/weather?id=5467024
  //api.openweathermap.org/data/2.5/weather?id=5809844
  //api.openweathermap.org/data/2.5/weather?id=5368361
  cities = [];
  cityWeather : any;
  cityId : String;
  isCity :Boolean;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) {
    this.cities.push({name:"Portland",id:"5746545"});
    this.cities.push({name:"San Jose",id:"5467024"});
    this.cities.push({name:"Seattle",id:"5809844"});
    this.cities.push({name:"Los Angeles",id:"5368361"});
  }
  ngOnInit() {
    this._route.params.subscribe((params: Params) => 
      //console.log(params['city'];
      this.cityId = params['cityId']
    );
    console.log(this.cityId);
    this.isCity = false;
  }
  cityNav(event) {
    let route = event.srcElement.value.toString();
    console.log("route:",route);
    this.isCity = true;
    this._router.navigate(['/'+route]);
  }
}
