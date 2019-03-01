import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/services/users.service";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: "app-user-bookings",
  templateUrl: "./user-bookings.component.html",
  styleUrls: ["./user-bookings.component.css"]
})
export class UserBookingsComponent implements OnInit {
  bookings = [];
  hotelList = [];
  constructor(
    private userService: UsersService,
    private fms: FlashMessagesService
  ) {}

  ngOnInit() {
    this.getUserBookings();
  }

  // get the authenticated user's bookings
  getUserBookings() {
    this.userService.loadUserBookings().subscribe((res: any) => {
      console.log(res);
      this.bookings = res.bookings;
    });
  }

  // Cancel the Booking
  cancelBooking(id) {
    this.userService.cancelBooking(id).subscribe((res: any) => {
      if (res.status) {
        this.fms.show(res.message, {
          cssClass: "alert-success",
          timeout: 3000
        });
        this.bookings.map(booking => {
          if (id == booking._id) {
            booking.booking_status = false;
          }
        });
      } else {
        this.fms.show(res.message, {
          cssClass: "alert-danger",
          timeout: 3000
        });
      }
    });
  }

  // Checkout the user after the booking
  checkout(id) {
    console.log(id);
    this.userService.userCheckout(id).subscribe((res: any) => {
      if (res.status) {
        this.fms.show(res.message, {
          cssClass: "alert-success",
          timeout: 3000
        });
        this.bookings.map(booking => {
          if (id == booking._id) {
            booking.booking_status = true;
            booking.checkout_status = true;
          }
        });
      } else {
        this.fms.show(res.message, {
          cssClass: "alert-danger",
          timeout: 3000
        });
      }
    });
  }
}
