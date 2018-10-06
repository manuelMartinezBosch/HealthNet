webpackJsonp([0],{

/***/ 138:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 138;

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_native_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authorization_authorization__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sigin_sigin__ = __webpack_require__(249);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, nativeStorage, authorizationProvider) {
        this.navCtrl = navCtrl;
        this.nativeStorage = nativeStorage;
        this.authorizationProvider = authorizationProvider;
        this.mail = '';
        this.password = '';
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.authorizationProvider.authorize(this.mail, this.password).subscribe(function (token) {
            console.log('Token: ' + token);
            _this.nativeStorage.setItem('userToken', token)
                .then(function () {
                console.log('Full Logged!');
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */])
                    .then(function () {
                    var index = _this.navCtrl.getActive().index;
                    _this.navCtrl.remove(0, index);
                }, function (error) {
                    console.error('Error with navCtrl: ', error);
                    _this.error = "Error navCtrl";
                });
            }, function (error) {
                console.error('Error with native storage Set item: ', error);
                _this.error = "Error Native Storage";
            });
        }, function (error) {
            console.error('Error in authorization provider: ' + error);
            if (error == 204) {
                _this.error = "Invalid name or password";
            }
            else {
                _this.error = "Server Not Works!";
            }
        });
    };
    LoginPage.prototype.signIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__sigin_sigin__["a" /* SiginPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"c:\Users\manue\Projects\HealthNet\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-label>I dont have an account</ion-label>\n\n  <button ion-button (click)="signIn()">SIGN IN</button>\n\n  <form #form="ngForm" (ngSubmit)="login()" novalidate>\n\n    <ion-item>\n\n      <ion-label>User mail</ion-label>\n\n      <ion-input type="mail" required [(ngModel)]="mail" name="mail" ngControl="mail"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Password</ion-label>\n\n      <ion-input type="password" required [(ngModel)]="password" name="password" ngControl="password"></ion-input>\n\n    </ion-item>\n\n    <button ion-button type="submit" block>LOGIN</button>\n\n  </form>\n\n  <p *ngIf="error">{{ error }}</p>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\manue\Projects\HealthNet\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_authorization_authorization__["a" /* AuthorizationProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipesPage = /** @class */ (function () {
    function RecipesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RecipesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recipes',template:/*ion-inline-start:"c:\Users\manue\Projects\HealthNet\src\pages\recipes\recipes.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Recipes</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\manue\Projects\HealthNet\src\pages\recipes\recipes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], RecipesPage);
    return RecipesPage;
}());

//# sourceMappingURL=recipes.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MorePage = /** @class */ (function () {
    function MorePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-more',template:/*ion-inline-start:"c:\Users\manue\Projects\HealthNet\src\pages\more\more.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>More</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\manue\Projects\HealthNet\src\pages\more\more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], MorePage);
    return MorePage;
}());

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
        console.log("Profile");
    }
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"c:\Users\manue\Projects\HealthNet\src\pages\profile\profile.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\manue\Projects\HealthNet\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_native_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_nutrition_nutrition_provider__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(datePicker, nutritionProvider, navCtrl, nativeStorage) {
        var _this = this;
        this.datePicker = datePicker;
        this.nutritionProvider = nutritionProvider;
        this.navCtrl = navCtrl;
        this.nativeStorage = nativeStorage;
        this.totalKcal = 0;
        this.totalCH = 0;
        this.totalPP = 0;
        this.totalFat = 0;
        this.date = new Date();
        this.minDate = new Date();
        this.maxDate = new Date();
        this.minDate.setFullYear(this.minDate.getFullYear() - 5);
        this.minDate.setHours(0, 0, 0, 0);
        this.maxDate.setHours(0, 0, 0, 0);
        this.date.setHours(0, 0, 0, 0);
        nativeStorage.getItem('userToken').then(function (data) {
            _this.userToken = data;
        }, function (error) {
            _this.userToken = "";
            //this.getMeals();
        });
    }
    HomePage.prototype.imprime = function () {
    };
    HomePage.prototype.pushPage = function () {
        // push another page onto the navigation stack
        // causing the nav controller to transition to the new page
        // optional data can also be passed to the pushed page.
        // this.navCtrl.push(MealDetailsPage, {
        //   id: 1,
        //   name: "Carl",
        //   homePage: this
        // });
        this.nativeStorage.clear();
    };
    HomePage.prototype.doStuff = function () {
        this.totalPP = 20;
    };
    HomePage.prototype.getMeals = function () {
        var _this = this;
        this.nutritionProvider.getMeals(this.userId, this.date).subscribe(function (meals) {
            _this.meals = meals;
            console.log(_this.meals);
            _this.meals.forEach(function (meal) {
                meal.show = true;
                meal.items.forEach(function (aliment) {
                });
            });
        });
    };
    HomePage.prototype.openDatePicker = function () {
        var _this = this;
        this.datePicker.show({
            date: this.date,
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        }).then(function (date) {
            console.log("MINIMA: " + _this.minDate + " MAXIMA: " + _this.maxDate);
            if (date >= _this.minDate && date <= _this.maxDate) {
                _this.date = date;
                console.log("fecha dentro" + date);
            }
            else {
                console.log("fecha fuera rango" + date);
            }
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    HomePage.prototype.previousDay = function () {
        //si tienen mismo día, mes y año entonces no puedo ir hacia atrás
        if (this.date.getDate() != this.minDate.getDate() ||
            this.date.getMonth() != this.minDate.getMonth() ||
            this.date.getFullYear() != this.minDate.getFullYear()) {
            this.date.setDate(this.date.getDate() - 1);
            this.getMeals();
        }
    };
    HomePage.prototype.nextDay = function () {
        if (this.date.getDate() != this.maxDate.getDate() ||
            this.date.getMonth() != this.maxDate.getMonth() ||
            this.date.getFullYear() != this.maxDate.getFullYear()) {
            this.date.setDate(this.date.getDate() + 1);
            this.getMeals();
        }
    };
    HomePage.prototype.toggleGroup = function (meal) {
        meal.show = !meal.show;
    };
    HomePage.prototype.isGroupShown = function (meal) {
        return meal.show;
    };
    HomePage.prototype.deleteGroup = function (meal) {
        var index = this.meals.indexOf(meal);
        this.meals.splice(index, 1);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"c:\Users\manue\Projects\HealthNet\src\pages\home\home.html"*/'<ion-header>\n\n  <!-- <ion-navbar>\n\n    <ion-title>HealthNet</ion-title>\n\n  </ion-navbar> -->\n\n  <ion-grid class="summary">\n\n    <ion-row justify-content-center>\n\n      <ion-col>\n\n        <p>{{ totalKcal }}</p>\n\n        <p>Kcal</p>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row justify-content-center>\n\n      <ion-col>\n\n        <p>Hidratos</p>\n\n        <p>{{ totalCH }}</p>\n\n      </ion-col>\n\n      <ion-col>\n\n        <p>Proteinas</p>\n\n        <p>{{ totalPP }}</p>\n\n      </ion-col>\n\n      <ion-col>\n\n        <p>Grasas</p>\n\n        <p>{{ totalFat }}</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid class="date-selector">\n\n    <ion-row justify-content-center>\n\n      <ion-col>\n\n        <ion-icon name="arrow-back" (click)="previousDay()"></ion-icon> &nbsp;\n\n        <span (click)="openDatePicker()">\n\n          {{ date.toLocaleDateString("es-ES") }}\n\n        </span>\n\n        &nbsp;\n\n        <ion-icon name="arrow-forward" (click)="nextDay()"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <p>Token: {{ userToken }}</p>\n\n    <button ion-button (click)="pushPage()">\n\n        CLEAR\n\n      </button>\n\n  <ion-card *ngFor="let meal of meals">\n\n    <ion-card-header>\n\n      <ion-icon name="{{isGroupShown(meal) ? \'remove\' : \'add\'}}" (click)="toggleGroup(meal)"></ion-icon>\n\n      &nbsp; {{meal.name}} &nbsp;\n\n      <ion-icon name="trash" (click)="deleteGroup(meal)"></ion-icon>\n\n    </ion-card-header>\n\n    <ion-list *ngIf="isGroupShown(meal)">\n\n      <ion-item class="item-accordion" *ngFor="let aliment of meal.items">\n\n        {{aliment.name}}\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"c:\Users\manue\Projects\HealthNet\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_1__providers_nutrition_nutrition_provider__["a" /* NutritionProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NutritionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NutritionProvider = /** @class */ (function () {
    function NutritionProvider(http) {
        this.http = http;
        this.BaseUrl = "https://a1ca22ef.ngrok.io/api/";
    }
    NutritionProvider.prototype.getMeals = function (userId, mealsDay) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.BaseUrl + "GetMeals", { "userId": userId,
            "mealsDay": mealsDay.getFullYear() + "-" + (mealsDay.getMonth() + 1) + "-" + mealsDay.getDate()
        }, httpOptions);
    };
    NutritionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NutritionProvider);
    return NutritionProvider;
}());

//# sourceMappingURL=nutrition.provider.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthorizationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthorizationProvider = /** @class */ (function () {
    function AuthorizationProvider(http) {
        this.http = http;
        // private readonly BASE_URL = "https://api-nutrition.herokuapp.com";
        this.BASE_URL = "https://localhost:5001";
    }
    AuthorizationProvider.prototype.authorize = function (mail, password) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.BASE_URL + "/Authorization", { "mail": mail,
            "password": password
        }, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) {
            if (res == null)
                throw new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpErrorResponse */]({ status: 204 });
            return res.token;
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) { throw err.status; }));
    };
    AuthorizationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthorizationProvider);
    return AuthorizationProvider;
}());

//# sourceMappingURL=authorization.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SiginPage = /** @class */ (function () {
    function SiginPage(navCtrl, userProvider, nativeStorage) {
        this.navCtrl = navCtrl;
        this.userProvider = userProvider;
        this.nativeStorage = nativeStorage;
        this.mail = "";
        this.password = "";
    }
    SiginPage.prototype.signIn = function () {
        var _this = this;
        if (this.mail == "" || this.password == "") {
            this.error = "Any field is empty";
        }
        else {
            this.userProvider.create(this.mail, this.password).subscribe(function (token) {
                console.log('Token: ' + token);
                _this.nativeStorage.setItem('userToken', token)
                    .then(function () {
                    console.log('Full SignIn!');
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */])
                        .then(function () {
                        var index = _this.navCtrl.getActive().index;
                        _this.navCtrl.remove(0, index);
                    }, function (error) {
                        console.error('Error with navCtrl: ', error);
                        _this.error = "Error navCtrl";
                    });
                }, function (error) {
                    console.error('Error with native storage Set item: ', error);
                    _this.error = "Error Native Storage";
                });
            }, function (error) {
                console.error('Error in authorization provider: ' + error);
                if (error == 204) {
                    _this.error = "User mail already exists";
                }
                else {
                    _this.error = "Server Not Works!";
                }
            });
        }
    };
    SiginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sigin',template:/*ion-inline-start:"c:\Users\manue\Projects\HealthNet\src\pages\sigin\sigin.html"*/'<!--\n  Generated template for the SiginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sigin</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form #form="ngForm" (ngSubmit)="signIn()" novalidate>\n      <ion-item>\n        <ion-label>User mail</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input type="mail" required [(ngModel)]="mail" name="mail" ngControl="mail"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Password</ion-label>\n      </ion-item> \n      <ion-item>\n        <ion-input type="password" required [(ngModel)]="password" name="password" ngControl="password"></ion-input>\n      </ion-item>\n      <button ion-button type="submit" block>SIGIN</button>\n    </form>\n    <p *ngIf="error">{{ error }}</p>\n</ion-content>\n'/*ion-inline-end:"c:\Users\manue\Projects\HealthNet\src\pages\sigin\sigin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], SiginPage);
    return SiginPage;
}());

//# sourceMappingURL=sigin.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProvider = /** @class */ (function () {
    function UserProvider(http) {
        this.http = http;
        //private readonly BASE_URL = "https://api-nutrition.herokuapp.com";
        this.BASE_URL = "https://localhost:5001";
    }
    UserProvider.prototype.create = function (mail, password) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.BASE_URL + "/User/Create", { "mail": mail,
            "password": password
        }, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) {
            if (res == null)
                throw new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpErrorResponse */]({ status: 204 });
            return res.token;
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) { throw err.status; }));
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(261);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_meal_details_meal_details__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_recipes_recipes__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_more_more__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_date_picker__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_native_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_nutrition_nutrition_provider__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_authorization_authorization__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_sigin_sigin__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_user_user__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Module imports





//Pages imports







//Providers imports








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_meal_details_meal_details__["a" /* MealDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_recipes_recipes__["a" /* RecipesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_sigin_sigin__["a" /* SiginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_meal_details_meal_details__["a" /* MealDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_recipes_recipes__["a" /* RecipesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_sigin_sigin__["a" /* SiginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_native_storage__["a" /* NativeStorage */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_nutrition_nutrition_provider__["a" /* NutritionProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_authorization_authorization__["a" /* AuthorizationProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_user_user__["a" /* UserProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, nativeStorage) {
        var _this = this;
        this.nativeStorage = nativeStorage;
        this.nativeStorage.getItem('userToken').then(function (data) {
            console.log("User with token: " + data);
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
        }, function (error) {
            console.log("No do getItem: " + error);
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */];
            //this.rootPage = TabsPage;
        });
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"c:\Users\manue\Projects\HealthNet\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"c:\Users\manue\Projects\HealthNet\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MealDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MealDetailsPage = /** @class */ (function () {
    function MealDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.id = navParams.get('id');
        this.name = navParams.get('name');
        navParams.get('homePage').doStuff();
    }
    MealDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meal-details',template:/*ion-inline-start:"c:\Users\manue\Projects\HealthNet\src\pages\meal-details\meal-details.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>MealDetails</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <p>\n\n  {{id}}\n\n</p>\n\n<p>\n\n  {{name}}\n\n</p>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\manue\Projects\HealthNet\src\pages\meal-details\meal-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], MealDetailsPage);
    return MealDetailsPage;
}());

//# sourceMappingURL=meal-details.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipes_recipes__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__more_more__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__recipes_recipes__["a" /* RecipesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__more_more__["a" /* MorePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"c:\Users\manue\Projects\HealthNet\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Recipes" tabIcon="bookmarks"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="person"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="More" tabIcon="add"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"c:\Users\manue\Projects\HealthNet\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[253]);
//# sourceMappingURL=main.js.map