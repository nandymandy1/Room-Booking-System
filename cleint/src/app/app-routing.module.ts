import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FlashMessagesModule } from "angular2-flash-messages";

// User Routes
import { LoginComponent } from "./users/login/login.component";
import { RegisterComponent } from "./users/register/register.component";
import { ProfileComponent } from "./users/profile/profile.component";
import { BookingsComponent } from "./users/bookings/bookings.component";
import { UserBookingsComponent } from "./users/user-bookings/user-bookings.component";
import { HotelsComponent } from "./users/hotels/hotels.component";
import { HotelComponent } from "./users/hotel/hotel.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent },
  { path: "users/hotels", component: HotelsComponent },
  { path: "users/hotels/:id", component: HotelComponent },
  { path: "users/bookings", component: UserBookingsComponent },
  { path: "users/bookings/:id/:room", component: BookingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FlashMessagesModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule {}
