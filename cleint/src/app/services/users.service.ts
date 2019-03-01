import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  token: string;
  constructor(private http: HttpClient) {
    // load the token from the localstorage
    this.token = JSON.parse(localStorage.getItem("token"));
  }

  // Load all the bookings of the user
  loadUserBookings() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.token
      })
    };
    return this.http.get(
      `http://localhost:5000/api/users/view-bookings`,
      httpOptions
    );
  }

  // Get Hotel Lists
  loadUserHotels(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.get(
      `http://localhost:5000/api/users/hotels/${id}`,
      httpOptions
    );
  }

  // cancel booking
  cancelBooking(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.token
      })
    };
    return this.http.get(
      `http://localhost:5000/api/users/cancel-booking/${id}`,
      httpOptions
    );
  }

  // checking out the user
  userCheckout(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.token
      })
    };
    return this.http.get(
      `http://localhost:5000/api/users/checkout/${id}`,
      httpOptions
    );
  }
}
