import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from "rxjs/operators";
import "rxjs";

@Injectable({
  providedIn: "root"
})
export class HotelsService {
  userToken: string;
  BASE_URL = "http://localhost:5000/api/hotels";
  constructor(private http: HttpClient) {}

  // Get the hotels from the search query
  getHotelsByCity(city) {
    return this.http.get(`${this.BASE_URL}/search-hotels/${city}`);
  }

  // Get the hotel Profile
  getHotelProfile(id) {
    return this.http.get(`${this.BASE_URL}/profile/${id}`);
  }

  bookNow(roomType, hotel_id, from_date, to_date, city) {
    this.loadUserToken();

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.userToken
      })
    };

    let bookingDetails = {
      hotel_id: hotel_id,
      room: roomType,
      from_date: from_date,
      to_date: to_date,
      city: city
    };

    return this.http.post(
      `http://localhost:5000/api/users/make-booking`,
      bookingDetails,
      httpOptions
    );
  }

  loadUserToken() {
    this.userToken = JSON.parse(localStorage.getItem("token"));
  }
}
