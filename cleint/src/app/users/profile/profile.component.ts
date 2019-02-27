import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  userType: any;
  user: any;
  constructor(private auth: AuthService, private router: Router) {
    this.userType = this.auth.getAuthUserType();
  }

  ngOnInit() {
    // Check if the user type is user
    if (this.userType != "user") {
      this.router.navigateByUrl("/login");
    }
    this.getUserProfile();
  }

  // Load User Profile
  getUserProfile() {
    this.auth.getAuthUserProfile().subscribe((res: any) => {
      this.user = res.user;
    });
  }
}
