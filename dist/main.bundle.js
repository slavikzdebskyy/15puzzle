webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-interface></app-interface>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface_interface_component__ = __webpack_require__("./src/app/interface/interface.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__interface_interface_component__["a" /* InterfaceComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/interface/interface.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"game\">\n\t\t<div class=\"square\"  *ngFor=\"let el of fiveteen\">\n\t\t\t<div class=\"in\" (click)=move(el.arg) *ngIf=\"visible\">\n\t\t\t\t<p>{{el.value}}</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"controls\">\n\t\t<button (click)=\"startGame()\">{{buttonName}}</button>\n\t\t<p>Moves:  {{moves}}</p>\n\t\t<!-- <p>Time:  {{time}}s</p> -->\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/interface/interface.component.less":
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 60%;\n  margin: auto;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.container .game {\n  width: 400px;\n  height: 400px;\n  border: 2px solid #000;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.container .game .square {\n  width: 100px;\n  height: 100px;\n  cursor: default;\n}\n.container .game .square .in {\n  width: 100%;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  background: #bf8040;\n  border: 6px solid #a66727;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-family: sans-serif;\n  font-size: 36px;\n  font-weight: 700;\n}\n.container .controls {\n  font-family: sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  margin: 40px;\n}\n.container .controls button {\n  font-family: sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  width: 200px;\n  height: 50px;\n  background: #800000;\n  border-radius: 20px;\n  outline: none;\n  border: none;\n}\n.container .controls button:hover {\n  background: #5d0000;\n}\n"

/***/ }),

/***/ "./src/app/interface/interface.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterfaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InterfaceComponent = /** @class */ (function () {
    function InterfaceComponent() {
        this.fiveteen = [
            { value: 1, arg: [0, 1, 4] }, { value: 2, arg: [1, 0, 2, 5] },
            { value: 3, arg: [2, 1, 3, 6] }, { value: 4, arg: [3, 2, 7] },
            { value: 5, arg: [4, 5, 0, 8] }, { value: 6, arg: [5, 4, 6, 1, 9] },
            { value: 7, arg: [6, 5, 7, 2, 10] }, { value: 8, arg: [7, 3, 6, 11] },
            { value: 9, arg: [8, 9, 4, 12] }, { value: 10, arg: [9, 5, 13, 8, 10] },
            { value: 11, arg: [10, 9, 11, 6, 14] }, { value: 12, arg: [11, 10, 7, 15] },
            { value: 13, arg: [12, 8, 13] }, { value: 14, arg: [13, 9, 14, 12] },
            { value: 15, arg: [14, 10, 15, 13] }, { value: '', arg: [15, 11, 14] }
        ];
        this.visible = false;
        this.moves = 0;
        this.buttonName = 'Start game';
        this.time = 0;
    }
    InterfaceComponent.prototype.ngOnInit = function () { };
    InterfaceComponent.prototype.move = function (arg) {
        var test = 0;
        for (var i = 1; i < arg.length; i++) {
            if (this.fiveteen[arg[i]].value === '') {
                var x = this.fiveteen[arg[0]].value;
                this.fiveteen[arg[0]].value = this.fiveteen[arg[i]].value;
                this.fiveteen[arg[i]].value = x;
                this.moves++;
            }
        }
        for (var i = 0; i < this.fiveteen.length; i++) {
            if (this.fiveteen[i].value === this.fiveteen[i].arg[0] + 1) {
                test++;
            }
            else {
                test = 0;
            }
        }
        // console.log(test)
        if (test >= 15) {
            console.log('WIN');
        }
    }; //	END of method move ()
    InterfaceComponent.prototype.startGame = function () {
        this.buttonName = 'Restart game';
        this.visible = true;
        this.moves = 0;
        this.time = 0;
        for (var i = 0; i < this.fiveteen.length; i++) {
            var index = Math.floor((Math.random() * 15) + 1);
            var x = this.fiveteen[i].value;
            this.fiveteen[i].value = this.fiveteen[index].value;
            this.fiveteen[index].value = x;
        }
        // setInterval(function(){
        // 	this.time++;
        // }, 1000);
    }; //	END of method startGame ()
    InterfaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-interface',
            template: __webpack_require__("./src/app/interface/interface.component.html"),
            styles: [__webpack_require__("./src/app/interface/interface.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], InterfaceComponent);
    return InterfaceComponent;
}()); //	END of class InterfaceComponent



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map