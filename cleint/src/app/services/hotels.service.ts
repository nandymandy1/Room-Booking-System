import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from "rxjs/operators";
import "rxjs";

@Injectable({
  providedIn: "root"
})
export class HotelsService {
  BASE_URL = "http://localhost:5000/api/";
  constructor(private http: HttpClient) {}

  getHotelsByCity(city) {
    return this.http.get(`${this.BASE_URL}hotels/get-hotels-list/${city}`);
  }
}
