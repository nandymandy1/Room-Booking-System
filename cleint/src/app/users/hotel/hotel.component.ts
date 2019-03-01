import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { HotelsService } from "src/app/services/hotels.service";

@Component({
  selector: "app-hotel",
  templateUrl: "./hotel.component.html",
  styleUrls: ["./hotel.component.css"]
})
export class HotelComponent implements OnInit {
  hotel_id = "";
  hotelProfile: any;

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelsService,
    private location: Location
  ) {}

  ngOnInit() {
    // Extract the Hotel Id from the Url prameters
    this.hotel_id = this.route.snapshot.paramMap.get("id");
    this.getHotelDetails();
  }

  getHotelDetails() {
    this.hotelService.getHotelProfile(this.hotel_id).subscribe((res: any) => {
      console.log(res);
      this.hotelProfile = res;
    });
  }
}
