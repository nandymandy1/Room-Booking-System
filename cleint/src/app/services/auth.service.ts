import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  BASE_URL = "http://localhost:5000/api/";
  token = "";
  userType = "";

  constructor(private http: HttpClient) {}

  validateUser(user) {
    if (
      user.username != "" &&
      user.email != "" &&
      user.password != "" &&
      user.confirm_password != "" &&
      user.name != "" &&
      user.contact != ""
    ) {
      // Check for the password
      if (user.password === user.confirm_password) {
        // Check for valid Email Address
        let reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        if (reg.test(user.email)) {
          return { success: true };
        } else {
          return { message: "Please provide a valid email.", success: false };
        }
      } else {
        return { message: "Passwords don't match.", success: false };
      }
    } else {
      return { message: "Please fill in all details.", success: false };
    }
  }

  registerUser(user) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.post(`${this.BASE_URL}users/register`, user, httpOptions);
  }

  checkAuthenticatedUser() {}

  loginUser(user) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http
      .post(`${this.BASE_URL}users/login`, user, httpOptions)
      .pipe(
        tap((res: any) => {
          if (res.success) {
            this.saveAuthToken(res.token);
            this.saveAuthUser(res.user);
            this.saveAuthUserType(res.userType);
          }
        })
      );
  }

  saveAuthToken(token) {
    localStorage.setItem("token", JSON.stringify(token));
  }

  saveAuthUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  saveAuthUserType(userType) {
    localStorage.setItem("userType", JSON.stringify(userType));
  }

  setAuthUserToken() {
    this.token = JSON.parse(localStorage.getItem("token"));
  }

  getAuthUserType() {
    return JSON.parse(localStorage.getItem("userType"));
  }

  getAuthUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  // Get the Authenticated User Profile
  getAuthUserProfile() {
    this.setAuthUserToken();
    let headers = new HttpHeaders({
      Authorization: this.token
    });
    return this.http.get(`${this.BASE_URL}users/profile`, { headers });
  }

  // Logout the user
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userType");
  }
}
