import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./layouts/navbar/navbar.component";
import { LoginComponent } from "./users/login/login.component";
import { RegisterComponent } from "./users/register/register.component";
import { ProfileComponent } from "./users/profile/profile.component";
import { BookingsComponent } from "./users/bookings/bookings.component";
import { HotelsComponent } from "./users/hotels/hotels.component";
import { HotelComponent } from "./users/hotel/hotel.component";

// Services imports
import { AuthService } from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BookingsComponent,
    HotelsComponent,
    HotelComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
