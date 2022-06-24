import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DealerGroupService {

  AppUrl = "https://demo2.suzuki-feedback.com";

  constructor(private http: HttpClient) { }

  getDealerList() {
    return this.http.get(this.AppUrl + '/api/Dealer/GetDealerList');
  }
  getDistributorList() {
    return this.http.get(this.AppUrl + '/api/Distributor/GetDistributorList');
  }
  getCountryList() {
    return this.http.get(this.AppUrl + '/api/Country/GetCountryList');
  }
  getState(id: number) {
    return this.http.get(this.AppUrl + '/api/Country/GetState?Country_Id=' + id);
  }
  getCity(id: number) {
    return this.http.get(this.AppUrl + '/api/Country/GetCity?State_Id=' + id);
  }
}
