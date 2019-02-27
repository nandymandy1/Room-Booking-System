import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { HotelsService } from "src/app/services/hotels.service";

@Component({
  selector: "app-hotels",
  templateUrl: "./hotels.component.html",
  styleUrls: ["./hotels.component.css"]
})
export class HotelsComponent implements OnInit {
  userType: any;
  cityChoice: String = "";
  hotels = [];
  hotelSeachText: String = "";

  constructor(
    private auth: AuthService,
    private router: Router,
    private hotelsService: HotelsService
  ) {
    this.userType = this.auth.getAuthUserType();
  }

  ngOnInit() {
    // Check if the user type is user
    if (this.userType != "user") {
      this.router.navigateByUrl("/login");
    }
    this.hotelSeachText = "Search your hotel.";
  }

  getHotels() {
    if (this.cityChoice != "") {
      this.hotels = [];
      this.hotelsService
        .getHotelsByCity(this.cityChoice)
        .subscribe((res: any) => {
          this.hotels = res;
          if (!this.hotels.length) {
            this.cityChoice = this.cityChoice.toLowerCase();
            this.cityChoice =
              this.cityChoice.charAt(0).toUpperCase() +
              this.cityChoice.slice(1);
            this.hotelSeachText =
              "Sorry we were not able to find any hotels in " + this.cityChoice;
          }
        });
    } else {
      this.hotelSeachText = "Please Enter the city name.";
    }
  }
}
