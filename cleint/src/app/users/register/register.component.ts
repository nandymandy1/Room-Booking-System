import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  user = {
    username: "",
    password: "",
    email: "",
    confirm_password: "",
    name: "",
    contact: ""
  };
  message: String = "";
  messageType: String = "";

  constructor(private auth: AuthService) {}

  ngOnInit() {}

  onRegisterSubmit() {
    let err = this.auth.validateUser(this.user);
    if (!err.success) {
      this.showAlert(err);
      setTimeout(() => {
        this.disapperAlert();
      }, 5000);
    } else {
      this.register();
    }
  }

  register() {
    this.auth.registerUser(this.user).subscribe((res: any) => {
      this.showAlert({ message: res.message, success: res.success });
      setTimeout(() => {
        this.disapperAlert();
      }, 5000);
      if (res.success) {
        this.user.confirm_password = "";
        this.user.password = "";
        this.user.name = "";
        this.user.email = "";
        this.user.username = "";
        this.user.contact = "";
      }
    });
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
