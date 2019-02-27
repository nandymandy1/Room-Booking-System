import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// User Routes
import { LoginComponent } from "./users/login/login.component";
import { RegisterComponent } from "./users/register/register.component";
import { ProfileComponent } from "./users/profile/profile.component";
import { BookingsComponent } from "./users/bookings/bookings.component";
import { HotelsComponent } from "./users/hotels/hotels.component";
import { HotelComponent } from "./users/hotel/hotel.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent },
  { path: "users/hotels", component: HotelsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
