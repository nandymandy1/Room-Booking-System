(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _users_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/login/login.component */ "./src/app/users/login/login.component.ts");
/* harmony import */ var _users_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/register/register.component */ "./src/app/users/register/register.component.ts");
/* harmony import */ var _users_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/profile/profile.component */ "./src/app/users/profile/profile.component.ts");
/* harmony import */ var _users_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/bookings/bookings.component */ "./src/app/users/bookings/bookings.component.ts");
/* harmony import */ var _users_user_bookings_user_bookings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users/user-bookings/user-bookings.component */ "./src/app/users/user-bookings/user-bookings.component.ts");
/* harmony import */ var _users_hotels_hotels_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users/hotels/hotels.component */ "./src/app/users/hotels/hotels.component.ts");
/* harmony import */ var _users_hotel_hotel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users/hotel/hotel.component */ "./src/app/users/hotel/hotel.component.ts");




// User Routes







var routes = [
    { path: "login", component: _users_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "register", component: _users_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: "profile", component: _users_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: "users/hotels", component: _users_hotels_hotels_component__WEBPACK_IMPORTED_MODULE_9__["HotelsComponent"] },
    { path: "users/hotels/:id", component: _users_hotel_hotel_component__WEBPACK_IMPORTED_MODULE_10__["HotelComponent"] },
    { path: "users/bookings", component: _users_user_bookings_user_bookings_component__WEBPACK_IMPORTED_MODULE_8__["UserBookingsComponent"] },
    { path: "users/bookings/:id/:room", component: _users_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_7__["BookingsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesModule"].forRoot()],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br><br><br><br>\n<div class=\"container mt-5\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'cleint';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/navbar/navbar.component */ "./src/app/layouts/navbar/navbar.component.ts");
/* harmony import */ var _users_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users/login/login.component */ "./src/app/users/login/login.component.ts");
/* harmony import */ var _users_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users/register/register.component */ "./src/app/users/register/register.component.ts");
/* harmony import */ var _users_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users/profile/profile.component */ "./src/app/users/profile/profile.component.ts");
/* harmony import */ var _users_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./users/bookings/bookings.component */ "./src/app/users/bookings/bookings.component.ts");
/* harmony import */ var _users_hotels_hotels_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./users/hotels/hotels.component */ "./src/app/users/hotels/hotels.component.ts");
/* harmony import */ var _users_hotel_hotel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./users/hotel/hotel.component */ "./src/app/users/hotel/hotel.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _users_user_bookings_user_bookings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./users/user-bookings/user-bookings.component */ "./src/app/users/user-bookings/user-bookings.component.ts");















// Services imports


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _users_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _users_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _users_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _users_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_12__["BookingsComponent"],
                _users_hotels_hotels_component__WEBPACK_IMPORTED_MODULE_13__["HotelsComponent"],
                _users_hotel_hotel_component__WEBPACK_IMPORTED_MODULE_14__["HotelComponent"],
                _users_user_bookings_user_bookings_component__WEBPACK_IMPORTED_MODULE_16__["UserBookingsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"].forRoot()
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layouts/navbar/navbar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/layouts/navbar/navbar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layouts/navbar/navbar.component.html":
/*!******************************************************!*\
  !*** ./src/app/layouts/navbar/navbar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\">\n  <a class=\"navbar-brand\" href=\"/\">Bookings</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav ml-auto\">\n      <!--For Unauthenticated users-->\n      <li class=\"nav-item\" *ngIf=\"!userType\">\n        <a class=\"nav-link\" href=\"/login\">Login</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!userType\">\n        <a class=\"nav-link\" href=\"/register\">Register</a>\n      </li>\n      <!--For Unauthenticated users-->\n\n      <!--Only for the Authenticated User-->\n      <!--Users Routes-->\n      <li class=\"nav-item\" *ngIf=\"userType == 'user'\">\n        <a class=\"nav-link\" href=\"/profile\">Profile</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userType == 'user'\">\n        <a class=\"nav-link\" href=\"/users/bookings\">My Bookings</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userType == 'user'\">\n        <a class=\"nav-link\" href=\"/users/hotels\">Search Hotels</a>\n      </li>\n      <!--Users Routes-->\n\n      <!--Common Routes-->\n      <li class=\"nav-item\" *ngIf=\"userType\">\n        <a class=\"nav-link\" href=\"#!\" (click)=\"logout()\">Logout</a>\n      </li>\n      <!--Common Routes-->\n      <!--Only for the Authenticated User-->\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/layouts/navbar/navbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/navbar/navbar.component.ts ***!
  \****************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
        this.userType = JSON.parse(localStorage.getItem("userType"));
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
        this.userType = null;
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navbar",
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/layouts/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/layouts/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.BASE_URL = "http://localhost:5000/api/";
        this.token = "";
        this.userType = "";
    }
    AuthService.prototype.validateUser = function (user) {
        if (user.username != "" &&
            user.email != "" &&
            user.password != "" &&
            user.confirm_password != "" &&
            user.name != "" &&
            user.contact != "") {
            // Check for the password
            if (user.password === user.confirm_password) {
                // Check for valid Email Address
                var reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
                if (reg.test(user.email)) {
                    return { success: true };
                }
                else {
                    return { message: "Please provide a valid email.", success: false };
                }
            }
            else {
                return { message: "Passwords don't match.", success: false };
            }
        }
        else {
            return { message: "Please fill in all details.", success: false };
        }
    };
    AuthService.prototype.registerUser = function (user) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json" })
        };
        return this.http.post(this.BASE_URL + "users/register", user, httpOptions);
    };
    AuthService.prototype.checkAuthenticatedUser = function () { };
    AuthService.prototype.loginUser = function (user) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json" })
        };
        return this.http
            .post(this.BASE_URL + "users/login", user, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            if (res.success) {
                _this.saveAuthToken(res.token);
                _this.saveAuthUser(res.user);
                _this.saveAuthUserType(res.userType);
            }
        }));
    };
    AuthService.prototype.saveAuthToken = function (token) {
        localStorage.setItem("token", JSON.stringify(token));
    };
    AuthService.prototype.saveAuthUser = function (user) {
        localStorage.setItem("user", JSON.stringify(user));
    };
    AuthService.prototype.saveAuthUserType = function (userType) {
        localStorage.setItem("userType", JSON.stringify(userType));
    };
    AuthService.prototype.setAuthUserToken = function () {
        this.token = JSON.parse(localStorage.getItem("token"));
    };
    AuthService.prototype.getAuthUserType = function () {
        return JSON.parse(localStorage.getItem("userType"));
    };
    AuthService.prototype.getAuthUser = function () {
        return JSON.parse(localStorage.getItem("user"));
    };
    // Get the Authenticated User Profile
    AuthService.prototype.getAuthUserProfile = function () {
        this.setAuthUserToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: this.token
        });
        return this.http.get(this.BASE_URL + "users/profile", { headers: headers });
    };
    // Logout the user
    AuthService.prototype.logout = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("userType");
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/hotels.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/hotels.service.ts ***!
  \********************************************/
/*! exports provided: HotelsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsService", function() { return HotelsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var HotelsService = /** @class */ (function () {
    function HotelsService(http) {
        this.http = http;
        this.BASE_URL = "http://localhost:5000/api/hotels";
    }
    // Get the hotels from the search query
    HotelsService.prototype.getHotelsByCity = function (city) {
        return this.http.get(this.BASE_URL + "/search-hotels/" + city);
    };
    // Get the hotel Profile
    HotelsService.prototype.getHotelProfile = function (id) {
        return this.http.get(this.BASE_URL + "/profile/" + id);
    };
    HotelsService.prototype.bookNow = function (roomType, hotel_id, from_date, to_date, city) {
        this.loadUserToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: this.userToken
            })
        };
        var bookingDetails = {
            hotel_id: hotel_id,
            room: roomType,
            from_date: from_date,
            to_date: to_date,
            city: city
        };
        return this.http.post("http://localhost:5000/api/users/make-booking", bookingDetails, httpOptions);
    };
    HotelsService.prototype.loadUserToken = function () {
        this.userToken = JSON.parse(localStorage.getItem("token"));
    };
    HotelsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HotelsService);
    return HotelsService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        // load the token from the localstorage
        this.token = JSON.parse(localStorage.getItem("token"));
    }
    // Load all the bookings of the user
    UsersService.prototype.loadUserBookings = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: this.token
            })
        };
        return this.http.get("http://localhost:5000/api/users/view-bookings", httpOptions);
    };
    // Get Hotel Lists
    UsersService.prototype.loadUserHotels = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        };
        return this.http.get("http://localhost:5000/api/users/hotels/" + id, httpOptions);
    };
    // cancel booking
    UsersService.prototype.cancelBooking = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: this.token
            })
        };
        return this.http.get("http://localhost:5000/api/users/cancel-booking/" + id, httpOptions);
    };
    // checking out the user
    UsersService.prototype.userCheckout = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: this.token
            })
        };
        return this.http.get("http://localhost:5000/api/users/checkout/" + id, httpOptions);
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/users/bookings/bookings.component.css":
/*!*******************************************************!*\
  !*** ./src/app/users/bookings/bookings.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-full {\n  padding: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvYm9va2luZ3MvYm9va2luZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2Jvb2tpbmdzL2Jvb2tpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1mdWxsIHtcbiAgcGFkZGluZzogMzBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/users/bookings/bookings.component.html":
/*!********************************************************!*\
  !*** ./src/app/users/bookings/bookings.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Show Full Form-->\n<div class=\"card card-full\">\n  <!--Radio Button for Room Types-->\n  <div class=\"form-group\" *ngIf=\"bookingType == 'bookrooms'\">\n    <div class=\"custom-control custom-radio\">\n      <input type=\"radio\" id=\"vila\" name=\"customRadio\" class=\"custom-control-input\" value=\"vila\" (change)=\"changeRoom($event)\">\n      <label class=\"custom-control-label\" for=\"vila\">Vila</label>\n    </div>\n    <div class=\"custom-control custom-radio\">\n      <input type=\"radio\" id=\"three_b\" name=\"customRadio\" value=\"three_b\" class=\"custom-control-input\" (change)=\"changeRoom($event)\">\n      <label class=\"custom-control-label\" for=\"three_b\">Three Bedroom</label>\n    </div>\n    <div class=\"custom-control custom-radio\">\n      <input type=\"radio\" id=\"two_b\" name=\"customRadio\" value=\"two_b\" class=\"custom-control-input\" (change)=\"changeRoom($event)\">\n      <label class=\"custom-control-label\" for=\"two_b\">Two Bedroom</label>\n    </div>\n    <div class=\"custom-control custom-radio\">\n      <input type=\"radio\" id=\"one_b\" name=\"customRadio\" value=\"one_b\" class=\"custom-control-input\" (change)=\"changeRoom($event)\">\n      <label class=\"custom-control-label\" for=\"one_b\">One Bedroom</label>\n    </div>\n  </div>\n  <!--Radio Button for Room Types-->\n  <div class=\"form-group\">\n    <label for=\"from_date\">From Date</label>\n    <input type=\"date\" (change)=\"calculateCost()\" [(ngModel)]=\"from_date\" name=\"from_date\" id=\"from_date\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"to_date\">Upto Date</label>\n    <input type=\"date\" (change)=\"calculateCost()\" [(ngModel)]=\"to_date\" name=\"to_date\" id=\"to_date\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <div class=\"row\">\n      <div class=\"col-9\">\n        <button class=\"btn btn-success btn-md\" [disabled]=\"cost == undefined\" (click)=\"makeBooking()\">Book now</button>\n      </div>\n      <div class=\"col-3\" *ngIf=\"cost\">\n        <h4>Cost: {{cost}}</h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!--Show Full Form-->\n"

/***/ }),

/***/ "./src/app/users/bookings/bookings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/users/bookings/bookings.component.ts ***!
  \******************************************************/
/*! exports provided: BookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsComponent", function() { return BookingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_hotels_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/hotels.service */ "./src/app/services/hotels.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);






var BookingsComponent = /** @class */ (function () {
    function BookingsComponent(route, hotelService, location, fms) {
        this.route = route;
        this.hotelService = hotelService;
        this.location = location;
        this.fms = fms;
        this.hotel_id = "";
        this.bookingType = "";
    }
    BookingsComponent.prototype.ngOnInit = function () {
        this.hotel_id = this.route.snapshot.paramMap.get("id");
        this.bookingType = this.route.snapshot.paramMap.get("room");
        if (this.bookingType != "bookrooms") {
            this.roomType = this.bookingType;
        }
        this.getHotelDetails();
    };
    BookingsComponent.prototype.getHotelDetails = function () {
        var _this = this;
        this.hotelService.getHotelProfile(this.hotel_id).subscribe(function (res) {
            console.log(res);
            _this.hotelProfile = res;
        });
    };
    BookingsComponent.prototype.changeRoom = function (e) {
        this.roomType = e.target.value.toString();
        console.log(this.roomType);
        if (this.from_date != undefined && this.to_date != undefined) {
            this.calculateCost();
        }
    };
    // calculate the cost
    BookingsComponent.prototype.calculateCost = function () {
        var date_from = new Date(this.from_date);
        var date_to = new Date(this.to_date);
        var timeDiff = Math.abs(date_to.getTime() - date_from.getTime());
        var numberOfDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        if (this.from_date != undefined &&
            this.to_date != undefined &&
            this.roomType != undefined) {
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
    };
    // Make Booking
    BookingsComponent.prototype.makeBooking = function () {
        var _this = this;
        this.hotelService
            .bookNow(this.roomType, this.hotelProfile._id, this.from_date, this.to_date, this.hotelProfile.city)
            .subscribe(function (res) {
            if (res.success) {
                _this.cost = null;
                _this.from_date = undefined;
                _this.to_date = undefined;
                _this.roomType = undefined;
                _this.fms.show("Your booking is confirmed.", {
                    cssClass: "alert-success",
                    timeout: 3000
                });
            }
            else {
                _this.fms.show("Unable to book the hotel please try agin later.", {
                    cssClass: "alert-danger",
                    timeout: 3000
                });
            }
        });
    };
    BookingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-bookings",
            template: __webpack_require__(/*! ./bookings.component.html */ "./src/app/users/bookings/bookings.component.html"),
            styles: [__webpack_require__(/*! ./bookings.component.css */ "./src/app/users/bookings/bookings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_hotels_service__WEBPACK_IMPORTED_MODULE_4__["HotelsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]])
    ], BookingsComponent);
    return BookingsComponent;
}());



/***/ }),

/***/ "./src/app/users/hotel/hotel.component.css":
/*!*************************************************!*\
  !*** ./src/app/users/hotel/hotel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2hvdGVsL2hvdGVsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/users/hotel/hotel.component.html":
/*!**************************************************!*\
  !*** ./src/app/users/hotel/hotel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hotelProfile != null\">\n  <div id=\"carouselExampleControls\" class=\"carousel slide mb-3\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img src=\"https://media-cdn.tripadvisor.com/media/photo-s/0e/b9/8a/3e/gomang-boutique-hotel.jpg\" style=\"height: 550px;\"\n          class=\"d-block w-100\" alt=\"...\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"https://www.adomonline.com/ghana-news/wp-content/uploads/2017/07/Hotel-696x391.jpg\" style=\"height: 550px;\"\n          class=\"d-block w-100\" alt=\"...\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"http://www.titania.gr/uploads/nr_photos/M640/HOME_6966.jpg\" style=\"height: 550px;\" class=\"d-block w-100\"\n          alt=\"...\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  <h2 class=\"text-center mb-3 mt-4\">{{ hotelProfile.hotel_name }}</h2>\n  <div class=\"card hotel-card mx-auto\">\n    <h3 class=\"text-center mt-3 mb-3\">About Us</h3>\n    <p class=\"justify-content\">{{ hotelProfile.description }}</p>\n  </div>\n  <h5 class=\"mt-3\">Available Rooms</h5>\n  <!--Rooms List with Price-->\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          Vila: <span class=\"badge badge-success\">{{ hotelProfile.numberOfRoomsAvailable.vila }}</span> of <span class=\"badge badge-primary\">{{\n            hotelProfile.numberOfRooms.vila }}</span> Rooms\n          <br>\n          Price: {{ hotelProfile.price_room.vila }}/- per Night\n        </div>\n        <div class=\"col-md-6 text-right\">\n          <a routerLink=\"/users/bookings/{{ hotelProfile._id }}/vila\" class=\"btn btn-success btn-sm ml-auto\">Book Now</a>\n        </div>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          Three Bedroom: <span class=\"badge badge-success\">{{ hotelProfile.numberOfRoomsAvailable.three_b }}</span> of\n          <span class=\"badge badge-primary\">{{\n            hotelProfile.numberOfRooms.three_b }}</span> Rooms\n          <br>\n          Price: {{ hotelProfile.price_room.three_b }}/- per Night\n        </div>\n        <div class=\"col-md-6 text-right\">\n          <a routerLink=\"/users/bookings/{{ hotelProfile._id }}/three_b\" class=\"btn btn-success btn-sm ml-auto\">Book\n            Now</a>\n        </div>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          Two Bedroom: <span class=\"badge badge-success\">{{ hotelProfile.numberOfRoomsAvailable.two_b }}</span> of\n          <span class=\"badge badge-primary\">{{\n            hotelProfile.numberOfRooms.two_b }}</span> Rooms\n          <br>\n          Price: {{ hotelProfile.price_room.two_b }}/- per Night\n        </div>\n        <div class=\"col-md-6 text-right\">\n          <a routerLink=\"/users/bookings/{{ hotelProfile._id }}/two_b\" class=\"btn btn-success btn-sm ml-auto\">Book Now</a>\n        </div>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          One Bedroom: <span class=\"badge badge-success\">{{ hotelProfile.numberOfRoomsAvailable.one_b }}</span> of\n          <span class=\"badge badge-primary\">{{\n            hotelProfile.numberOfRooms.one_b }}</span> Rooms\n          <br>\n          Price: {{ hotelProfile.price_room.one_b }}/- per Night\n        </div>\n        <div class=\"col-md-6 text-right\">\n          <a routerLink=\"/users/bookings/{{ hotelProfile._id }}/one_b\" class=\"btn btn-success btn-sm ml-auto\">Book Now</a>\n        </div>\n      </div>\n    </li>\n  </ul>\n  <!--Rooms List with Price-->\n</div>\n"

/***/ }),

/***/ "./src/app/users/hotel/hotel.component.ts":
/*!************************************************!*\
  !*** ./src/app/users/hotel/hotel.component.ts ***!
  \************************************************/
/*! exports provided: HotelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelComponent", function() { return HotelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_hotels_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/hotels.service */ "./src/app/services/hotels.service.ts");





var HotelComponent = /** @class */ (function () {
    function HotelComponent(route, hotelService, location) {
        this.route = route;
        this.hotelService = hotelService;
        this.location = location;
        this.hotel_id = "";
    }
    HotelComponent.prototype.ngOnInit = function () {
        // Extract the Hotel Id from the Url prameters
        this.hotel_id = this.route.snapshot.paramMap.get("id");
        this.getHotelDetails();
    };
    HotelComponent.prototype.getHotelDetails = function () {
        var _this = this;
        this.hotelService.getHotelProfile(this.hotel_id).subscribe(function (res) {
            console.log(res);
            _this.hotelProfile = res;
        });
    };
    HotelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-hotel",
            template: __webpack_require__(/*! ./hotel.component.html */ "./src/app/users/hotel/hotel.component.html"),
            styles: [__webpack_require__(/*! ./hotel.component.css */ "./src/app/users/hotel/hotel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_hotels_service__WEBPACK_IMPORTED_MODULE_4__["HotelsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], HotelComponent);
    return HotelComponent;
}());



/***/ }),

/***/ "./src/app/users/hotels/hotels.component.css":
/*!***************************************************!*\
  !*** ./src/app/users/hotels/hotels.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2hvdGVscy9ob3RlbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/users/hotels/hotels.component.html":
/*!****************************************************!*\
  !*** ./src/app/users/hotels/hotels.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card border-secondary mb-3\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Enter the name of City</h4>\n    <div class=\"form\">\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"city\" [(ngModel)]=\"cityChoice\" class=\"form-control\" placeholder=\"Search Hotels by City\"\n          id=\"city\" />\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-success btn-md\" (click)=\"getHotels()\">\n          Search\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\" *ngIf=\"hotels.length; else no_hotel\">\n  <div class=\"col-md-6 col-lg-4 col-sm-12\" *ngFor=\"let hotel of hotels\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{ hotel.hotel_name }}</h5>\n        <h6 class=\"card-subtitle text-muted\">{{ hotel.city }}</h6>\n      </div>\n      <img style=\"height: 200px; width: 100%; display: block;\" src=\"http://74b94b2a212a69577a4a-86543258078ab7eaee9e0eb189b684d6.r30.cf1.rackcdn.com/lps/assets/u/1600x900Hotel-Pur-Quebec---Superior-Church-View-Guest-Room---2-Queen-Beds---1227168.jpg\"\n        alt=\"Card image\" />\n      <div class=\"card-body\">\n        <p class=\"card-text\">{{ hotel.description }}</p>\n      </div>\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">\n          <b>Number of Vila:</b>\n          <span class=\"badge badge-success ml-auto\">{{\n            hotel.numberOfRoomsAvailable.vila\n            }}</span>\n          of\n          <span class=\"badge badge-primary\">{{\n            hotel.numberOfRooms.vila\n            }}</span>\n          @\n          <span class=\"badge badge-warning ml-auto\">Rs {{ hotel.price_room.vila }}/-</span>\n        </li>\n        <li class=\"list-group-item\">\n          <b>Number of One Bedroom:</b>\n          <span class=\"badge badge-success ml-auto\">{{\n            hotel.numberOfRoomsAvailable.one_b\n            }}</span>\n          of\n          <span class=\"badge badge-primary\">{{\n            hotel.numberOfRooms.one_b\n            }}</span>\n          @\n          <span class=\"badge badge-warning ml-auto\">Rs {{ hotel.price_room.one_b }}/-</span>\n        </li>\n        <li class=\"list-group-item\">\n          <b>Number of Two Bedrooms:</b>\n          <span class=\"badge badge-success ml-auto\">{{\n            hotel.numberOfRoomsAvailable.two_b\n            }}</span>\n          of\n          <span class=\"badge badge-primary\">{{\n            hotel.numberOfRooms.two_b\n            }}</span>\n          @\n          <span class=\"badge badge-warning ml-auto\">Rs {{ hotel.price_room.two_b }}/-</span>\n        </li>\n        <li class=\"list-group-item\">\n          <b>Number of Three Bedrooms:</b>\n          <span class=\"badge badge-success ml-auto\">{{\n            hotel.numberOfRoomsAvailable.three_b\n            }}</span>\n          of\n          <span class=\"badge badge-primary\">{{\n            hotel.numberOfRooms.three_b\n            }}</span>\n          @\n          <span class=\"badge badge-warning ml-auto\">Rs {{ hotel.price_room.three_b }}/-</span>\n        </li>\n      </ul>\n      <div class=\"card-body\">\n        <!-- <button class=\"btn btn-sm btn-primary\" (click)=\"makeBooking(hotel._id)\"> -->\n        <button class=\"btn btn-sm btn-primary\" routerLink=\"/users/bookings/{{ hotel._id }}/bookrooms\">\n          Make Booking\n        </button>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <button class=\"btn btn-sm btn-success\" routerLink=\"/users/hotels/{{ hotel._id }}\">\n          Hotel Info\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #no_hotel>\n  <h3 class=\"text-center\">{{ hotelSeachText }}</h3>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/users/hotels/hotels.component.ts":
/*!**************************************************!*\
  !*** ./src/app/users/hotels/hotels.component.ts ***!
  \**************************************************/
/*! exports provided: HotelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsComponent", function() { return HotelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_hotels_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/hotels.service */ "./src/app/services/hotels.service.ts");





var HotelsComponent = /** @class */ (function () {
    function HotelsComponent(auth, router, hotelsService) {
        this.auth = auth;
        this.router = router;
        this.hotelsService = hotelsService;
        this.cityChoice = "";
        this.hotels = [];
        this.hotelSeachText = "";
        this.userType = this.auth.getAuthUserType();
    }
    HotelsComponent.prototype.ngOnInit = function () {
        // Check if the user type is user
        if (this.userType != "user") {
            this.router.navigateByUrl("/login");
        }
        this.hotelSeachText = "Search your hotel.";
    };
    HotelsComponent.prototype.getHotels = function () {
        var _this = this;
        if (this.cityChoice != "") {
            this.hotels = [];
            this.hotelsService
                .getHotelsByCity(this.cityChoice)
                .subscribe(function (res) {
                _this.hotels = res;
                if (!_this.hotels.length) {
                    _this.cityChoice = _this.cityChoice.toLowerCase();
                    _this.cityChoice =
                        _this.cityChoice.charAt(0).toUpperCase() +
                            _this.cityChoice.slice(1);
                    _this.hotelSeachText =
                        "Sorry we were not able to find any hotels in " + _this.cityChoice;
                }
            });
        }
        else {
            this.hotelSeachText = "Please Enter the city name.";
        }
    };
    HotelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-hotels",
            template: __webpack_require__(/*! ./hotels.component.html */ "./src/app/users/hotels/hotels.component.html"),
            styles: [__webpack_require__(/*! ./hotels.component.css */ "./src/app/users/hotels/hotels.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_hotels_service__WEBPACK_IMPORTED_MODULE_4__["HotelsService"]])
    ], HotelsComponent);
    return HotelsComponent;
}());



/***/ }),

/***/ "./src/app/users/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/users/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-card {\n  width: 60%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY2FyZCB7XG4gIHdpZHRoOiA2MCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/users/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/users/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-12\" *ngIf=\"message\">\n    <div class=\"alert alert-dismissible alert-{{messageType}} mx-auto\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n      {{ message }}\n    </div>\n  </div>\n\n  <div class=\"card my-card my-auto mx-auto\">\n    <div class=\"card-header bg-primary text-white\">\n      <h4>Login</h4>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"form\">\n        <div class=\"form-group\">\n          <label for=\"username\">Username</label>\n          <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\"\n            placeholder=\"Password\">\n        </div>\n        <div class=\"form-group\">\n          <button class=\"btn btn-primary btn-md\" (click)=\"onLoginSubmit()\">Login</button>\n          &nbsp;&nbsp;\n          <a [routerLink]=\"['/register']\" class=\"btn btn-default btn-md\">Need an account?</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/users/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/users/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.message = "";
        this.messageType = "";
        this.user = {
            username: "",
            password: ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        if (this.user.username != "" && this.user.password != "") {
            this.auth.loginUser(this.user).subscribe(function (res) {
                _this.showAlert({
                    message: res.message,
                    success: res.success
                });
                setTimeout(function () {
                    _this.disapperAlert();
                }, 5000);
                if (res.success) {
                    _this.router.navigateByUrl("/profile");
                }
            });
        }
        else {
            this.showAlert({
                message: "Please fill in all the details.",
                success: false
            });
            setTimeout(function () {
                _this.disapperAlert();
            }, 5000);
        }
    };
    LoginComponent.prototype.showAlert = function (data) {
        this.message = data.message;
        if (data.success) {
            this.messageType = "success";
        }
        else {
            this.messageType = "danger";
        }
    };
    LoginComponent.prototype.disapperAlert = function () {
        this.message = "";
        this.messageType = "";
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/users/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/users/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/users/profile/profile.component.css":
/*!*****************************************************!*\
  !*** ./src/app/users/profile/profile.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/users/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card border-secondary mb-3\" *ngIf=\"user\">\n  <div class=\"card-header bg-primary text-white\">\n    <h3>{{ user.username }}</h3>\n  </div>\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">\n      {{ user.name }}\n    </h4>\n    <h5 class=\"card-title\">\n      {{ user.email }}\n    </h5>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/users/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/users/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.userType = this.auth.getAuthUserType();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        // Check if the user type is user
        if (this.userType != "user") {
            this.router.navigateByUrl("/login");
        }
        this.getUserProfile();
    };
    // Load User Profile
    ProfileComponent.prototype.getUserProfile = function () {
        var _this = this;
        this.auth.getAuthUserProfile().subscribe(function (res) {
            _this.user = res.user;
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-profile",
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/users/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/users/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/users/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/users/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-card {\n  width: 60%;\n}\n\n.alert {\n  width: 60%;\n  border-radius: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC91c2Vycy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWNhcmQge1xuICB3aWR0aDogNjAlO1xufVxuXG4uYWxlcnQge1xuICB3aWR0aDogNjAlO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/users/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/users/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-12\" *ngIf=\"message\">\n    <div class=\"alert alert-dismissible alert-{{messageType}} mx-auto\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n      {{ message }}\n    </div>\n  </div>\n\n  <div class=\"col-12\">\n    <div class=\"card my-card my-auto mx-auto\">\n      <div class=\"card-header bg-primary text-white\">\n        <h4>Register</h4>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"form\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"user.name\" id=\"name\" placeholder=\"Name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\" id=\"username\"\n              placeholder=\"Username\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Email Address</label>\n            <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"user.email\" id=\"email\" placeholder=\"Email Address\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"contact\">Contact Number</label>\n            <input type=\"contact\" class=\"form-control\" name=\"contact\" [(ngModel)]=\"user.contact\" id=\"contact\"\n              placeholder=\"Contact Number\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"user.password\" id=\"password\"\n              placeholder=\"Password\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"confirm_password\">Confirm Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"confirm_password\" [(ngModel)]=\"user.confirm_password\" id=\"confirm_password\"\n              placeholder=\"Confirm Password\">\n          </div>\n          <div class=\"form-group\">\n            <button class=\"btn btn-primary btn-md\" (click)=\"onRegisterSubmit()\">Register</button>\n            &nbsp;&nbsp;\n            <a [routerLink]=\"['/login']\" class=\"btn btn-default btn-md\">Already have account?</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/users/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/users/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth) {
        this.auth = auth;
        this.user = {
            username: "",
            password: "",
            email: "",
            confirm_password: "",
            name: "",
            contact: ""
        };
        this.message = "";
        this.messageType = "";
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var err = this.auth.validateUser(this.user);
        if (!err.success) {
            this.showAlert(err);
            setTimeout(function () {
                _this.disapperAlert();
            }, 5000);
        }
        else {
            this.register();
        }
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.auth.registerUser(this.user).subscribe(function (res) {
            _this.showAlert({ message: res.message, success: res.success });
            setTimeout(function () {
                _this.disapperAlert();
            }, 5000);
            if (res.success) {
                _this.user.confirm_password = "";
                _this.user.password = "";
                _this.user.name = "";
                _this.user.email = "";
                _this.user.username = "";
                _this.user.contact = "";
            }
        });
    };
    RegisterComponent.prototype.showAlert = function (data) {
        this.message = data.message;
        if (data.success) {
            this.messageType = "success";
        }
        else {
            this.messageType = "danger";
        }
    };
    RegisterComponent.prototype.disapperAlert = function () {
        this.message = "";
        this.messageType = "";
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/users/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/users/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/users/user-bookings/user-bookings.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/users/user-bookings/user-bookings.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXItYm9va2luZ3MvdXNlci1ib29raW5ncy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/user-bookings/user-bookings.component.html":
/*!******************************************************************!*\
  !*** ./src/app/users/user-bookings/user-bookings.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Hotel</th>\n        <th scope=\"col\">Room Type</th>\n        <th scope=\"col\">Booking Date</th>\n        <th scope=\"col\">From</th>\n        <th scope=\"col\">Till</th>\n        <th scope=\"col\">Booking Status</th>\n        <th scope=\"col\">Checkout Status</th>\n        <th scope=\"col\">Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let booking of bookings\">\n        <th>Hotel Name</th>\n\n        <td *ngIf=\"booking.room == 'vila'\">Vila</td>\n        <td *ngIf=\"booking.room == 'one_b'\">One Bedroom</td>\n        <td *ngIf=\"booking.room == 'two_b'\">Two Bedroom</td>\n        <td *ngIf=\"booking.room == 'three_b'\">Three Bedroom</td>\n\n        <td>{{ booking.created_at | date }}</td>\n        <td>{{ booking.from_date | date }}</td>\n        <td>{{ booking.to_date | date }}</td>\n\n        <td class=\"text-success\" *ngIf=\"booking.booking_status; else canceled\">Confirmed</td>\n        <ng-template #canceled>\n          <td class=\"text-danger\">Canceled</td>\n        </ng-template>\n\n        <td class=\"text-success\" *ngIf=\"booking.checkout_status && booking.booking_status; else checkedout\">Checked Out</td>\n        <ng-template #checkedout>\n          <td class=\"text-danger\" *ngIf=\"!booking.booking_status\">Not Checked In</td>\n          <td class=\"text-info\" *ngIf=\"booking.booking_status\">Checked In</td>\n        </ng-template>\n\n        <td *ngIf=\"booking.booking_status && booking.checkout_status\"></td>\n        <td *ngIf=\"!booking.booking_status && !booking.checkout_status\"></td>\n        <td *ngIf=\"booking.booking_status && !booking.checkout_status\">\n          <button *ngIf=\"booking.booking_status\" class=\"btn btn-sm btn-danger\" (click)=\"cancelBooking(booking._id)\">Cancel</button>\n          &nbsp;&nbsp;&nbsp;\n          <button *ngIf=\"booking.booking_status\" class=\"btn btn-sm btn-success\" (click)=\"checkout(booking._id)\">Checkout</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/users/user-bookings/user-bookings.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/users/user-bookings/user-bookings.component.ts ***!
  \****************************************************************/
/*! exports provided: UserBookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBookingsComponent", function() { return UserBookingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);




var UserBookingsComponent = /** @class */ (function () {
    function UserBookingsComponent(userService, fms) {
        this.userService = userService;
        this.fms = fms;
        this.bookings = [];
        this.hotelList = [];
    }
    UserBookingsComponent.prototype.ngOnInit = function () {
        this.getUserBookings();
    };
    // get the authenticated user's bookings
    UserBookingsComponent.prototype.getUserBookings = function () {
        var _this = this;
        this.userService.loadUserBookings().subscribe(function (res) {
            console.log(res);
            _this.bookings = res.bookings;
        });
    };
    // Cancel the Booking
    UserBookingsComponent.prototype.cancelBooking = function (id) {
        var _this = this;
        this.userService.cancelBooking(id).subscribe(function (res) {
            if (res.status) {
                _this.fms.show(res.message, {
                    cssClass: "alert-success",
                    timeout: 3000
                });
                _this.bookings.map(function (booking) {
                    if (id == booking._id) {
                        booking.booking_status = false;
                    }
                });
            }
            else {
                _this.fms.show(res.message, {
                    cssClass: "alert-danger",
                    timeout: 3000
                });
            }
        });
    };
    // Checkout the user after the booking
    UserBookingsComponent.prototype.checkout = function (id) {
        var _this = this;
        console.log(id);
        this.userService.userCheckout(id).subscribe(function (res) {
            if (res.status) {
                _this.fms.show(res.message, {
                    cssClass: "alert-success",
                    timeout: 3000
                });
                _this.bookings.map(function (booking) {
                    if (id == booking._id) {
                        booking.booking_status = true;
                        booking.checkout_status = true;
                    }
                });
            }
            else {
                _this.fms.show(res.message, {
                    cssClass: "alert-danger",
                    timeout: 3000
                });
            }
        });
    };
    UserBookingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-user-bookings",
            template: __webpack_require__(/*! ./user-bookings.component.html */ "./src/app/users/user-bookings/user-bookings.component.html"),
            styles: [__webpack_require__(/*! ./user-bookings.component.css */ "./src/app/users/user-bookings/user-bookings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], UserBookingsComponent);
    return UserBookingsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/narendramaurya/web_apps/adish_project/cleint/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map