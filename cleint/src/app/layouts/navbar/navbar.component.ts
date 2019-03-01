import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  userType: any;
  constructor(private auth: AuthService) {
    this.userType = JSON.parse(localStorage.getItem("userType"));
  }

  ngOnInit() {}

  logout() {
    this.auth.logout();
    this.userType = null;
  }
}
