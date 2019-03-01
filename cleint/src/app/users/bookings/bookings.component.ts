import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { HotelsService } from "src/app/services/hotels.service";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: "app-bookings",
  templateUrl: "./bookings.component.html",
  styleUrls: ["./bookings.component.css"]
})
export class BookingsComponent implements OnInit {
  hotel_id = "";
  hotelProfile: any;
  bookingType = "";
  cost: number;
  from_date: Date;
  to_date: Date;
  roomType: any;

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelsService,
    private location: Location,
    private fms: FlashMessagesService
  ) {}

  ngOnInit() {
    this.hotel_id = this.route.snapshot.paramMap.get("id");
    this.bookingType = this.route.snapshot.paramMap.get("room");
    if (this.bookingType != "bookrooms") {
      this.roomType = this.bookingType;
    }
    this.getHotelDetails();
  }

  getHotelDetails() {
    this.hotelService.getHotelProfile(this.hotel_id).subscribe((res: any) => {
      console.log(res);
      this.hotelProfile = res;
    });
  }

  changeRoom(e) {
    this.roomType = e.target.value.toString();
    console.log(this.roomType);
    if (this.from_date != undefined && this.to_date != undefined) {
      this.calculateCost();
    }
  }

  // calculate the cost
  calculateCost() {
    let date_from = new Date(this.from_date);
    let date_to = new Date(this.to_date);
    let timeDiff = Math.abs(date_to.getTime() - date_from.getTime());
    let numberOfDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (
      this.from_date != undefined &&
      this.to_date != undefined &&
      this.roomType != undefined
    ) {
      // Calculate the number of days
      if (this.roomType == "vila") {
        this.cost = numberOfDays * this.hotelProfile.price_room.vila;
      }
      if (this.roomType == "three_b") {
        this.cost = numberOfDays * this.hotelProfile.price_room.three_b;
      }
      if (this.roomType == "two_b") {
        this.cost = numberOfDays * this.hotelProfile.price_room.two_b;
      }
      if (this.roomType == "one_b") {
        this.cost = numberOfDays * this.hotelProfile.price_room.one_b;
      }
    }
  }

  // Make Booking
  makeBooking() {
    this.hotelService
      .bookNow(
        this.roomType,
        this.hotelProfile._id,
        this.from_date,
        this.to_date,
        this.hotelProfile.city
      )
      .subscribe((res: any) => {
        if (res.success) {
          this.cost = null;
          this.from_date = undefined;
          this.to_date = undefined;
          this.roomType = undefined;
          this.fms.show("Your booking is confirmed.", {
            cssClass: "alert-success",
            timeout: 3000
          });
        } else {
          this.fms.show("Unable to book the hotel please try agin later.", {
            cssClass: "alert-danger",
            timeout: 3000
          });
        }
      });
  }
}
