import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { ProfileComponent } from "../profile/profile.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  message: String = "";
  messageType: String = "";
  user = {
    username: "",
    password: ""
  };
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  onLoginSubmit() {
    if (this.user.username != "" && this.user.password != "") {
      this.auth.loginUser(this.user).subscribe((res: any) => {
        this.showAlert({
          message: res.message,
          success: res.success
        });
        setTimeout(() => {
          this.disapperAlert();
        }, 5000);
        if (res.success) {
          this.router.navigateByUrl("/profile");
        }
      });
    } else {
      this.showAlert({
        message: "Please fill in all the details.",
        success: false
      });
      setTimeout(() => {
        this.disapperAlert();
      }, 5000);
    }
  }

  showAlert(data) {
    this.message = data.message;
    if (data.success) {
      this.messageType = "success";
    } else {
      this.messageType = "danger";
    }
  }

  disapperAlert() {
    this.message = "";
    this.messageType = "";
  }
}
