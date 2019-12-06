(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-account-modal></app-account-modal>\r\n<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account-modal/account-modal.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/account-modal/account-modal.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Modal -->\r\n<div aria-hidden=\"true\" aria-labelledby=\"accountModalLabel\" class=\"modal fade pl-0\" id=\"accountModal\" role=\"dialog\"\r\n     tabindex=\"-1\">\r\n  <div class=\"modal-dialog d-flex h-100 align-items-center\" role=\"document\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"modal-content border-0\">\r\n            <div class=\"modal-header main-color shadow-sm\">\r\n              <h5 class=\"modal-title font-weight-bold\" id=\"accountModalLabel\">Account</h5>\r\n              <button aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n                <fa name=\"close\" size=\"1x\"></fa>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <app-login-form></app-login-form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-color shadow pt-2 pb-1 mb-2\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <!--      Logo and login button for mobile-->\r\n      <div class=\"col-7 offset-1 d-flex justify-content-start\">\r\n        <a class=\"\" href=\"\">\r\n          <img [src]=\"LOGO_PATH\" alt=\"logo\"/>\r\n        </a>\r\n      </div>\r\n      <div class=\"col-4 d-flex justify-content-end pr-4\">\r\n        <div class=\"d-flex ml-3\">\r\n          <fa (click)=\"onLoginIconClick()\" class=\"my-auto\" name=\"user-circle\" size=\"2x\"></fa>\r\n        </div>\r\n      </div>\r\n\r\n      <!--      Login form-->\r\n      <!--      <div class=\"col-md-4 offset-md-6 pb-1\">-->\r\n      <!--        <app-login-form *ngIf=\"!mobile\"></app-login-form>-->\r\n      <!--        <app-login-form *ngIf=\"mobile && clickedLoginIcon\"></app-login-form>-->\r\n      <!--      </div>-->\r\n\r\n      <!--      Recipe search bar-->\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-sm-7 col-md-5 col-lg-4 col-xl-3\">\r\n        <app-recipe-search-bar></app-recipe-search-bar>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-form/login-form.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-form/login-form.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" class=\"pb-2 mb-1 mb-sm-0 text-dark font-weight-bold\">\r\n  <div class=\"row\">\r\n    <!--    LEFT SIDE OF THE LOGIN-->\r\n    <div class=\"col-10 offset-1\">\r\n      <div class=\"row\">\r\n        <span class=\"col col-sm-3\">\r\n          <label for=\"login\">\r\n              Login:\r\n          </label>\r\n        </span>\r\n      </div>\r\n      <div class=\"row\">\r\n        <span class=\"col\">\r\n          <input class=\"form-control form-control-sm\" formControlName=\"login\" id=\"login\" name=\"login\" type=\"text\">\r\n        </span>\r\n      </div>\r\n      <div class=\"row mt-3\">\r\n        <span class=\"col\">\r\n          <label for=\"password\">\r\n              Password:\r\n          </label>\r\n        </span>\r\n      </div>\r\n      <div class=\"row\">\r\n        <span class=\"col\">\r\n          <input class=\"form-control form-control-sm\" formControlName=\"password\" id=\"password\" name=\"password\"\r\n                 type=\"password\">\r\n        </span>\r\n      </div>\r\n\r\n      <!--      EMAIL AND PASSWORD CONFIRMATION-->\r\n      <div *ngIf=\"isSigningUp\">\r\n        <div class=\"row mt-3\">\r\n          <span class=\"col\">\r\n            <label for=\"passwordConfirm\">\r\n                Confirm password:\r\n            </label>\r\n          </span>\r\n        </div>\r\n        <div class=\"row mb-3\">\r\n          <span class=\"col\">\r\n            <input class=\"form-control form-control-sm\" formControlName=\"passwordConfirm\" id=\"passwordConfirm\" name=\"passwordConfirm\"\r\n                   type=\"password\">\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"row mt-3\">\r\n          <span class=\"col\">\r\n            <label for=\"firstName\">\r\n                First name:\r\n            </label>\r\n          </span>\r\n        </div>\r\n        <div class=\"row mb-3\">\r\n          <span class=\"col\">\r\n            <input class=\"form-control form-control-sm\" formControlName=\"firstName\" id=\"firstName\" name=\"firstName\"\r\n                   type=\"firstName\">\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"row mt-3\">\r\n          <span class=\"col\">\r\n            <label for=\"lastName\">\r\n                Last name:\r\n            </label>\r\n          </span>\r\n        </div>\r\n        <div class=\"row mb-3\">\r\n          <span class=\"col\">\r\n            <input class=\"form-control form-control-sm\" formControlName=\"lastName\" id=\"lastName\" name=\"lastName\"\r\n                   type=\"lastName\">\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"row mt-3\">\r\n          <span class=\"col\">\r\n            <label for=\"email\">\r\n                Email:\r\n            </label>\r\n          </span>\r\n        </div>\r\n        <div class=\"row mb-3\">\r\n          <span class=\"col\">\r\n            <input class=\"form-control form-control-sm\" formControlName=\"email\" id=\"email\" name=\"email\" type=\"email\">\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <!--      WHEN LOGGING-->\r\n      <div class=\"mt-4\">\r\n        <div *ngIf=\"!isSigningUp\" class=\"row\">\r\n          <div class=\"col d-flex justify-content-between\">\r\n            <div>\r\n              <button (click)=\"useSignUpForm()\" class=\"btn btn-sm btn-dark ml-1\">\r\n                <h6 class=\"d-inline font-weight-bold\">Sign-up</h6>\r\n              </button>\r\n            </div>\r\n            <div>\r\n              <button [disabled]=\"!isFormValid()\" class=\"btn btn-sm btn-dark mr-2\">\r\n                <!--              <button class=\"btn btn-sm btn-dark mr-2\">-->\r\n                <h6 class=\"d-inline font-weight-bold\">Login</h6>\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n          <span (click)=\"testIntegrity()\">Integrity?</span>\r\n          <a href=\"/user-details\" class=\"ml-2\">User details</a>\r\n          <a href=\"/recipe-search\" class=\"ml-2\">Search</a>\r\n<!--          <a routerLink=\"/user-details\" class=\"ml-2\">User details</a>-->\r\n<!--          <a routerLink=\"/recipe-search\" class=\"ml-2\">Search</a>-->\r\n        </div>\r\n\r\n        <div *ngIf=\"isSigningUp\" class=\"row\">\r\n          <div class=\"col d-flex justify-content-between\">\r\n            <div>\r\n              <button (click)=\"useLoginForm()\" class=\"btn btn-sm btn-dark ml-1\">\r\n                <h6 class=\"d-inline font-weight-bold\">Login</h6>\r\n              </button>\r\n            </div>\r\n            <div>\r\n              <button [disabled]=\"!isFormValid()\" class=\"btn btn-sm btn-dark mr-2\">\r\n                <!--              <button class=\"btn btn-sm btn-dark mr-2\">-->\r\n                <h6 class=\"d-inline font-weight-bold\">Confirm</h6>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/home/home.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/home/home.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>BIENVENUE A LA MAISON</h1>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/recipe-create/recipe-create.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/recipe-create/recipe-create.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid col-lg-12 imgBack\">\r\n\r\n\r\n<div class=\"container-fluid col-lg-3\">\r\n\r\n</div>\r\n<div class=\"container-fluid border col-lg-7 col-sm-12 text-center \" style=\"background-color: white\">\r\n  <h3 class=\"text-center font-weight-bold p-3\">Create recipe</h3>\r\n  <form #formElement=\"ngForm\" (ngSubmit)=addRecipe()>\r\n    <div class=\"form-row\">\r\n      <div class=\"col-md-12 mb-3\">\r\n        <label for=\"recipeName\">Recipe Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"recipeName\" minlength=\"5\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"col-md-12 mb-3\">\r\n        <label for=\"recipeSummary\">Summary of your recipe</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"recipeSummary\" required>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-row\">\r\n      <div class=\"col-md-3 mb-3\">\r\n        <label for=\"recipeType\">Recipe Type</label>\r\n        <div class=\"input-group\">\r\n          <select class=\"custom-select\" id=\"recipeType\" required>\r\n            <option *ngFor=\"let filter of filters\">{{filter.value}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 mb-3\">\r\n        <label for=\"prepTimeRecipe\">Preparation time</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"prepTimeRecipe\" required>\r\n      </div>\r\n      <div class=\"col-md-3 mb-3\">\r\n        <label for=\"persons\">Persons</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"persons\" required>\r\n      </div>\r\n      <div class=\"col-md-3 mb-3\">\r\n        <label for=\"\">Spice Rate</label>\r\n        <select class=\"custom-select\" id=\"\" required>\r\n          <option selected disabled value=\"\">Choose...</option>\r\n          <option>1</option>\r\n          <option>2</option>\r\n          <option>3</option>\r\n          <option>4</option>\r\n          <option>5</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Ingredients -->\r\n    <div class=\"form-row\">\r\n      <div class=\"col-md-5 mb-3\">\r\n        <label for=\"ingredients\">ingredients</label>\r\n        <select class=\"custom-select\" id=\"ingredients\">\r\n          <option *ngFor=\"let ingredient of ingredients; index as i\">\r\n            {{ingredient.nameIngredient}}\r\n          </option>\r\n        </select>\r\n\r\n      </div>\r\n      <div class=\"col-md-3 mb-3\">\r\n        <label for=\"ingredientQuantity\">quantity</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"ingredientQuantity\" required>\r\n      </div>\r\n      <div class=\"col-md-4 mb-3\">\r\n        <label for=\"mesureIngredient\">Mesure</label>\r\n        <select class=\"custom-select\" id=\"mesureIngredient\" required>\r\n          <option selected disabled value=\"\">Choose...</option>\r\n          <option>Gr</option>\r\n          <option>Ml</option>\r\n          <option>piece(s)</option>\r\n        </select>\r\n      </div>\r\n\r\n      <button class=\"btn btn-sm btn-dark mr-2\" style=\"height:30px\">Add ingredient</button>\r\n\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"col-md-12 mb-3\">\r\n        <label for=\"steps\">Step(s)</label>\r\n        <textarea class=\"form-control\" id=\"steps\"></textarea>\r\n      </div>\r\n      <div class=\"\">\r\n        <button class=\"btn btn-sm btn-dark\" style=\"height:30px\" >Add step</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <button class=\"btn btn-sm btn-dark\" style=\"height:30px;width: 80px\"> choisir un fichier</button>\r\n    </div>\r\n    <button [disabled]=\"!formElement.valid\" class=\"btn btn-md btn-warning mr-2 col-12 mt-2\" type=\"submit\">\r\n      <h6 class=\"d-inline font-weight-bold\">Submit recipe</h6>\r\n    </button>\r\n  </form>\r\n</div>\r\n<div class=\"container-fluid col-lg-3\"></div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/recipe-details/recipe-details.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/recipe-details/recipe-details.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>{{recipe.nameRecipe}}</h1>\r\n<h3 *ngFor=\"let s of spices\">*</h3>\r\n<h4>{{recipe.recipeType}} pour {{recipe.persons}} personnes ({{recipe.prepTime}} min)</h4>\r\n{{recipe.summary}}<br>\r\n<i>postée le {{recipe.postDate}} par {{recipe.pseudo}}</i>\r\ningrédients :\r\n<ul>\r\n    <li *ngFor=\"let ingredient of ingredients\">\r\n        {{ingredient.quantity}}{{ingredient.unit}} {{ingredient.nameIngredient}}\r\n    </li>\r\n</ul>\r\npréparation :\r\n<ul>\r\n    <li *ngFor=\"let step of steps\">\r\n        {{step.stepNb}} : {{step.step}}\r\n    </li>\r\n</ul>\r\n\r\n<h5>Formulaire de commentaires</h5>\r\n\r\n<div *ngFor=\"let review of reviews\">\r\n    <h6>{{review.pseudo}}</h6> ({{review.rate}}/5)\r\n    <p>{{review.reviewMessage}}</p>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/recipe-search/recipe-search.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/recipe-search/recipe-search.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-recipe-results-list></app-recipe-results-list>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/user-details/user-details.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/user-details/user-details.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>user-details works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/recipe-result/recipe-result.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/recipe-result/recipe-result.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <h2>{{recipe.nameRecipe}}</h2>\r\n  <h3 *ngFor=\"let s of spices\">*</h3>\r\n  <h4>{{recipe.recipeType}} pour {{recipe.persons}} personnes ({{recipe.prepTime}} min)</h4>\r\n  {{recipe.summary}}<br>\r\n  <i>postée le {{recipe.postDate}} par {{recipe.pseudo}}</i>\r\n</div>\r\n");
<<<<<<< HEAD

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/recipe-results-list/recipe-results-list.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/recipe-results-list/recipe-results-list.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div *ngFor=\"let filter of filters\">\r\n    <label [for]=\"filter.id\">{{filter.id}}</label>\r\n    <input type=\"radio\" [id]=\"filter.id\"[(ngModel)]=\"filterSelected\"\r\n        (change)=\"updateFilteredRecipes()\" [value]=\"filter.value\">\r\n</div>\r\n\r\n<div>\r\n  <div *ngFor=\"let recipe of filteredRecipes\">\r\n    <app-recipe-result (click)=\"loadRecipe(recipe)\" [recipe]=\"recipe\"></app-recipe-result>\r\n  </div>\r\n</div>\r\n");
=======
>>>>>>> f3f8d26eee0cfa0b25a9a22e6987ab081c5b5332

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/recipe-search-bar/recipe-search-bar.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/recipe-search-bar/recipe-search-bar.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = ("<form #formElement=\"ngForm\" (ngSubmit)=\"searchRecipe()\" class=\"pb-1 pl-1\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-1 d-flex justify-content-end\">\r\n      <button [disabled]=\"formElement.invalid\" class=\"btn btn-sm btn-light\" type=\"submit\">\r\n        <fa name=\"search\"></fa>\r\n      </button>\r\n    </div>\r\n    <div class=\"col-11\">\r\n      <input #loginElement=\"ngModel\" [(ngModel)]=\"userSearch\" class=\"form-control form-control-sm\" id=\"userSearch\"\r\n             minlength=\"3\"\r\n             name=\"userSearch\" placeholder=\"Entrer une recette, un ingrédient, ...\" required type=\"text\">\r\n    </div>\r\n  </div>\r\n</form>\r\n");
=======
/* harmony default export */ __webpack_exports__["default"] = ("<form #formElement=\"ngForm\" [routerLink]=\"'recipe-search/'+userSearch\" class=\"pb-1 pl-1\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-1 d-flex justify-content-end\">\r\n      <button [disabled]=\"formElement.invalid\" class=\"btn btn-sm btn-light\" type=\"submit\">\r\n        <fa name=\"search\"></fa>\r\n      </button>\r\n    </div>\r\n    <div class=\"col-11\">\r\n      <input #loginElement=\"ngModel\" [(ngModel)]=\"userSearch\" class=\"form-control form-control-sm\" id=\"userSearch\"\r\n             minlength=\"3\"\r\n             name=\"userSearch\" placeholder=\"Entrer une recette, un ingrédient, ...\" required type=\"text\">\r\n    </div>\r\n  </div>\r\n</form>\r\n");
>>>>>>> f3f8d26eee0cfa0b25a9a22e6987ab081c5b5332

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/globals.service */ "./src/app/services/globals.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/authentication.service */ "./src/app/services/authentication.service.ts");





let AppComponent = class AppComponent {
    constructor(globals, router, authenticationService) {
        this.globals = globals;
        this.router = router;
        this.authenticationService = authenticationService;
        this.title = 'pCuisinHELHa';
    }
    ngOnInit() {
        this.globals.updateMobile();
    }
    logout() {
    }
    /**
     * On window resizing, updates the Globals service's "mobile" var.
     * @param event
     */
    onResize(event) {
        this.globals.updateMobile();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], AppComponent.prototype, "onResize", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _app_components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/login-form/login-form.component */ "./src/app/components/login-form/login-form.component.ts");
/* harmony import */ var _app_components_recipe_search_bar_recipe_search_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/recipe-search-bar/recipe-search-bar.component */ "./src/app/components/recipe-search-bar/recipe-search-bar.component.ts");
/* harmony import */ var _app_components_pages_recipe_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/pages/recipe-search */ "./src/app/components/pages/recipe-search/index.ts");
/* harmony import */ var _app_components_recipe_result_recipe_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/recipe-result/recipe-result.component */ "./src/app/components/recipe-result/recipe-result.component.ts");
/* harmony import */ var _app_components_account_modal_account_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/account-modal/account-modal.component */ "./src/app/components/account-modal/account-modal.component.ts");
/* harmony import */ var _app_pipes_recipe_pipe_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/pipes/recipe-pipe.pipe */ "./src/app/pipes/recipe-pipe.pipe.ts");
/* harmony import */ var _app_components_pages_recipe_details__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/components/pages/recipe-details */ "./src/app/components/pages/recipe-details/index.ts");
/* harmony import */ var _app_components_pages_home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/components/pages/home */ "./src/app/components/pages/home/index.ts");
/* harmony import */ var _app_components_pages_user_details__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/components/pages/user-details */ "./src/app/components/pages/user-details/index.ts");
/* harmony import */ var _app_components_pages_recipe_create_recipe_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/components/pages/recipe-create/recipe-create.component */ "./src/app/components/pages/recipe-create/recipe-create.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_app_routing__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
<<<<<<< HEAD
/* harmony import */ var _components_pages_recipe_create_recipe_create_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pages/recipe-create/recipe-create.component */ "./src/app/components/pages/recipe-create/recipe-create.component.ts");
/* harmony import */ var _app_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/helpers/jwt-interceptor */ "./src/app/helpers/jwt-interceptor.ts");
/* harmony import */ var _app_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/helpers/error-interceptor */ "./src/app/helpers/error-interceptor.ts");



=======
>>>>>>> f3f8d26eee0cfa0b25a9a22e6987ab081c5b5332



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            _app_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
            _app_components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__["LoginFormComponent"],
            _app_components_recipe_search_bar_recipe_search_bar_component__WEBPACK_IMPORTED_MODULE_5__["RecipeSearchBarComponent"],
            _app_components_pages_recipe_search__WEBPACK_IMPORTED_MODULE_6__["RecipeSearchComponent"],
            _app_components_recipe_result_recipe_result_component__WEBPACK_IMPORTED_MODULE_7__["RecipeResultComponent"],
            _app_pipes_recipe_pipe_pipe__WEBPACK_IMPORTED_MODULE_9__["RecipePipe"],
            _app_components_pages_recipe_details__WEBPACK_IMPORTED_MODULE_10__["RecipeDetailsComponent"],
            _app_components_account_modal_account_modal_component__WEBPACK_IMPORTED_MODULE_8__["AccountModalComponent"],
            _app_components_pages_home__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _app_components_pages_user_details__WEBPACK_IMPORTED_MODULE_12__["UserDetailsComponent"],
            _app_components_pages_recipe_create_recipe_create_component__WEBPACK_IMPORTED_MODULE_13__["RecipeCreateComponent"]
        ],
        imports: [
<<<<<<< HEAD
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__["AngularFontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_16__["appRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"], useClass: _app_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_20__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"], useClass: _app_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_21__["ErrorInterceptor"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
=======
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["BrowserModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_15__["AngularFontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _app_app_routing__WEBPACK_IMPORTED_MODULE_17__["appRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
>>>>>>> f3f8d26eee0cfa0b25a9a22e6987ab081c5b5332
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingModule", function() { return appRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/home */ "./src/app/components/pages/home/index.ts");
<<<<<<< HEAD
/* harmony import */ var _components_pages_recipe_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/recipe-search */ "./src/app/components/pages/recipe-search/index.ts");
/* harmony import */ var _components_pages_recipe_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/recipe-details */ "./src/app/components/pages/recipe-details/index.ts");
/* harmony import */ var _components_pages_user_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/user-details */ "./src/app/components/pages/user-details/index.ts");
/* harmony import */ var _components_pages_recipe_create_recipe_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/recipe-create/recipe-create.component */ "./src/app/components/pages/recipe-create/recipe-create.component.ts");
/* harmony import */ var _app_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/helpers */ "./src/app/helpers/index.ts");

=======
/* harmony import */ var _components_pages_recipe_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/recipe-details */ "./src/app/components/pages/recipe-details/index.ts");
/* harmony import */ var _components_pages_user_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/user-details */ "./src/app/components/pages/user-details/index.ts");
/* harmony import */ var _components_pages_recipe_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/recipe-search */ "./src/app/components/pages/recipe-search/index.ts");
/* harmony import */ var _app_components_pages_recipe_create_recipe_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/pages/recipe-create/recipe-create.component */ "./src/app/components/pages/recipe-create/recipe-create.component.ts");
>>>>>>> f3f8d26eee0cfa0b25a9a22e6987ab081c5b5332







const routes = [
<<<<<<< HEAD
    { path: 'home', component: _components_pages_home__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], pathMatch: 'full' },
    { path: 'recipe-search', component: _components_pages_recipe_search__WEBPACK_IMPORTED_MODULE_3__["RecipeSearchComponent"] },
    { path: 'recipe-details/:id', component: _components_pages_recipe_details__WEBPACK_IMPORTED_MODULE_4__["RecipeDetailsComponent"] },
    { path: 'recipe-create', component: _components_pages_recipe_create_recipe_create_component__WEBPACK_IMPORTED_MODULE_6__["RecipeCreateComponent"], canActivate: [_app_helpers__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'user-details', component: _components_pages_user_details__WEBPACK_IMPORTED_MODULE_5__["UserDetailsComponent"], canActivate: [_app_helpers__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    // If not a valid url -> redirect to home
    { path: '**', redirectTo: 'home' }
=======
    { path: '', component: _components_pages_home__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'recipe-search', component: _components_pages_recipe_search__WEBPACK_IMPORTED_MODULE_5__["RecipeSearchComponent"] },
    { path: 'recipe-search/:text', component: _components_pages_recipe_search__WEBPACK_IMPORTED_MODULE_5__["RecipeSearchComponent"] },
    { path: 'recipe-details/:id', component: _components_pages_recipe_details__WEBPACK_IMPORTED_MODULE_3__["RecipeDetailsComponent"] },
    { path: 'user-details', component: _components_pages_user_details__WEBPACK_IMPORTED_MODULE_4__["UserDetailsComponent"] },
    { path: 'recipe-create', component: _app_components_pages_recipe_create_recipe_create_component__WEBPACK_IMPORTED_MODULE_6__["RecipeCreateComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
>>>>>>> f3f8d26eee0cfa0b25a9a22e6987ab081c5b5332
];
const appRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/components/account-modal/account-modal.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/account-modal/account-modal.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC1tb2RhbC9hY2NvdW50LW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/account-modal/account-modal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/account-modal/account-modal.component.ts ***!
  \*********************************************************************/
/*! exports provided: AccountModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModalComponent", function() { return AccountModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccountModalComponent = class AccountModalComponent {
    constructor() {
    }
    ngOnInit() {
        this.showModal();
    }
    showModal() {
        $("#accountModal").modal('show');
    }
    hideModal() {
        $("#accountModal").modal('hide');
    }
};
AccountModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account-modal/account-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account-modal.component.css */ "./src/app/components/account-modal/account-modal.component.css")).default]
    })
], AccountModalComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/globals.service */ "./src/app/services/globals.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(globals) {
        this.globals = globals;
        this.LOGO_PATH = 'assets/img/cuisinHELHa_logo.png';
    }
    /// MOBILE
    get mobile() {
        return this.globals.mobile;
    }
    ngOnInit() {
    }
    /// CLICKED LOGIN ICON
    onLoginIconClick() {
        $('#accountModal').modal('show');
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/login-form/login-form.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/login-form/login-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
<<<<<<< HEAD
/* harmony import */ var _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





=======
>>>>>>> f3f8d26eee0cfa0b25a9a22e6987ab081c5b5332



let LoginFormComponent = class LoginFormComponent {
<<<<<<< HEAD
    constructor(fb, authService, router, route, http) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.http = http;
        this.LOGIN_PATTERN = "^(?=.*[a-zA-Z]{1,})(?=.*[\\d]{0,})[a-zA-Z0-9]{3,50}$";
        this.PASSWORD_PATTERN = "^\\S*$";
        this.NAME_PATTERN = "^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$";
        this._error = "";
=======
    constructor(fb) {
        this.fb = fb;
        this.LOGIN_PATTERN = "^(?=.*[a-zA-Z]{1,})(?=.*[\\d]{0,})[a-zA-Z0-9]{3,50}$";
        this.PASSWORD_PATTERN = "^\\S*$";
        this.NAME_PATTERN = "^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$";
>>>>>>> f3f8d26eee0cfa0b25a9a22e6987ab081c5b5332
        /**
         * Required, minLength(3), maxLength(50), only letters (caps or not) and numbers pattern.
         */
        this._loginCtrl = this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.LOGIN_PATTERN)]);
        /**
         * Required, minLength(3), maxLength(50) and no spaces pattern.
         */
        this._passwordCtrl = this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.PASSWORD_PATTERN)]);
<<<<<<< HEAD
    }
    testIntegrity() {
        var test = `${_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl}/api/users/integrity`;
        // var test = `https://localhost:5001/api/users/integrity`;
        console.log(test);
        console.log(this.http.get(test));
        return this.http.get(test).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            console.log(user);
            return user;
        }));
    }
    /**
     * Use the login form at first and sets the return URL.
     */
    ngOnInit() {
        // First use the login form
        this.useLoginForm();
        // get return url from route parameters or default to '/'
        this._returnURL = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    /**
     * On form submit, tries to log or connect the user.
     */
    onSubmit() {
        this.submitted = true;
        if (this._form.invalid) {
            return;
        }
        this._loading = true;
        if (!this._isSigningUp) {
            this.authService.login(this.fgCtrls.login.value, this.fgCtrls.password.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(data => {
                this.router.navigate([this._returnURL]);
            }, error => {
                this._error = error;
                this.loading = false;
            });
        }
        else {
            console.log("NOT IMPLEMENTED YET");
        }
    }
    /**
     * Returns the form controls.
     */
    get fgCtrls() {
        return this.form.controls;
    }
    /********************************************************
     ********************* FORM GROUP ************************
     *********************************************************/
    /**
     * Buils "form" as the login form.
     */
    buildLoginFG() {
        this._form = this.fb.group({
            login: this._loginCtrl,
            password: this._passwordCtrl,
        });
        // Auto filling if in dev.
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production) {
            this.fgCtrls.login.setValue("ElsaD");
            this.fgCtrls.password.setValue("adminElsa");
        }
    }
    /**
     * Buils "form" as the sign up form.
     * Use the "passwordsMatching" method as a validator.
     */
    buildSignupFG() {
        this._form = this.fb.group({
            login: this._loginCtrl,
            email: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: this._passwordCtrl,
            passwordConfirm: this.fb.control('').setValidators(this._passwordCtrl.validator),
            firstName: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.NAME_PATTERN)]),
            lastName: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.NAME_PATTERN)]),
        }, { validator: this.passwordsMatching });
        // Random filling if in dev.
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production) {
            let rand = Math.floor(Math.random() * 1000000);
            this.fgCtrls.login.setValue("test" + rand);
            this.fgCtrls.password.setValue("password");
            this.fgCtrls.passwordConfirm.setValue("password");
            this.fgCtrls.firstName.setValue("first");
            this.fgCtrls.lastName.setValue("last");
            this.fgCtrls.email.setValue("test" + rand + "@gmail.com");
            this.onSubmit();
        }
    }
    /**
     * Verify that "password" and "passwordConfirm" are matching for the given AbstractControl.
     * @param c
     */
    passwordsMatching(c) {
        if (c.get('password').value !== c.get('passwordConfirm').value) {
            return { invalid: true };
        }
    }
    /**
     * Sets _isSigningUp as true and builds the sign up FormGroup
     */
    useSignUpForm() {
        this._isSigningUp = true;
        this.buildSignupFG();
    }
    /**
     * Sets _isSigningUp as false and builds the login FormGroup
     */
    useLoginForm() {
        this._isSigningUp = false;
        this.buildLoginFG();
    }
    /**
     * @return Form validators are matching?
     */
    isFormValid() {
        if (this._form == null)
            return false;
        return this._form.valid;
    }
    get form() {
        return this._form;
    }
    set form(value) {
        this._form = value;
=======
>>>>>>> f3f8d26eee0cfa0b25a9a22e6987ab081c5b5332
    }
    get isSigningUp() {
        return this._isSigningUp;
    }
    set isSigningUp(value) {
        this._isSigningUp = value;
    }
<<<<<<< HEAD
    get submitted() {
        return this._submitted;
    }
    set submitted(value) {
        this._submitted = value;
    }
    get loading() {
        return this._loading;
    }
    set loading(value) {
        this._loading = value;
    }
};
LoginFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
=======
    /**
     * Use the login form at first.
     */
    ngOnInit() {
        // First use the login form
        this.useLoginForm();
    }
    authenticate() {
    }
    /********************************************************
     ********************* FORM GROUP ************************
     *********************************************************/
    buildLoginFG() {
        this._form = this.fb.group({
            login: this._loginCtrl,
            password: this._passwordCtrl,
        });
    }
    /**
     * Buils "form" as the sign up form.
     * Use the "passwordsMatching" method as a validator.
     */
    buildSignupFG() {
        this._form = this.fb.group({
            login: this._loginCtrl,
            email: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: this._passwordCtrl,
            passwordConfirm: this.fb.control('').setValidators(this._passwordCtrl.validator),
            firstName: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.NAME_PATTERN)]),
            lastName: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.NAME_PATTERN)]),
        }, { validator: this.passwordsMatching });
    }
    /**
     * Verify that "password" and "passwordConfirm" are matching for the given AbstractControl.
     * @param c
     */
    passwordsMatching(c) {
        if (c.get('password').value !== c.get('passwordConfirm').value) {
            return { invalid: true };
        }
    }
    /**
     * Sets _isSigningUp as true and builds the sign up FormGroup
     */
    useSignUpForm() {
        this._isSigningUp = true;
        this.buildSignupFG();
    }
    /**
     * Sets _isSigningUp as false and builds the login FormGroup
     */
    useLoginForm() {
        this._isSigningUp = false;
        this.buildLoginFG();
    }
    /**
     * @return Form validators are matching?
     */
    isFormValid() {
        if (this._form == null)
            return false;
        return this._form.valid;
    }
    get form() {
        return this._form;
    }
    set form(value) {
        this._form = value;
    }
};
LoginFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
>>>>>>> f3f8d26eee0cfa0b25a9a22e6987ab081c5b5332
];
LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-form/login-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-form.component.css */ "./src/app/components/login-form/login-form.component.css")).default]
    })
], LoginFormComponent);



/***/ }),

/***/ "./src/app/components/pages/home/home.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/pages/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = 
// @Component({ templateUrl: 'home.component.html' })
class HomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/pages/home/home.component.css")).default]
    })
    // @Component({ templateUrl: 'home.component.html' })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/pages/home/index.ts":
/*!************************************************!*\
  !*** ./src/app/components/pages/home/index.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]; });





/***/ }),

/***/ "./src/app/components/pages/recipe-create/recipe-create.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/pages/recipe-create/recipe-create.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imgBack{\r\n  background-image: url('createRecipeFull.jpg');\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9yZWNpcGUtY3JlYXRlL3JlY2lwZS1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZDQUFvRTtBQUN0RSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcmVjaXBlLWNyZWF0ZS9yZWNpcGUtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nQmFja3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2NyZWF0ZVJlY2lwZUZ1bGwuanBnXCIpO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/pages/recipe-create/recipe-create.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/recipe-create/recipe-create.component.ts ***!
  \***************************************************************************/
/*! exports provided: RecipeCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeCreateComponent", function() { return RecipeCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_ingredient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/ingredient.service */ "./src/app/services/ingredient.service.ts");
/* harmony import */ var _enumerations_recipe_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../enumerations/recipe-type.enum */ "./src/app/enumerations/recipe-type.enum.ts");




let RecipeCreateComponent = class RecipeCreateComponent {
    constructor(ingredientService) {
        this.ingredientService = ingredientService;
        this.filters = _enumerations_recipe_type_enum__WEBPACK_IMPORTED_MODULE_3__["RECIPE_TYPE"];
        this._ingredients = [];
        this.subscriptions = [];
    }
    ngOnInit() {
        this.loadIngredients();
    }
    loadIngredients() {
        const sub = this.ingredientService
            .query()
            .subscribe(ingredients => this._ingredients = ingredients);
        this.subscriptions.push(sub);
    }
    addRecipe() {
    }
    get ingredients() {
        return this._ingredients;
    }
    set ingredients(value) {
        this._ingredients = value;
    }
};
RecipeCreateComponent.ctorParameters = () => [
    { type: _services_ingredient_service__WEBPACK_IMPORTED_MODULE_2__["IngredientService"] }
];
RecipeCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/recipe-create/recipe-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-create.component.css */ "./src/app/components/pages/recipe-create/recipe-create.component.css")).default]
    })
], RecipeCreateComponent);



/***/ }),

/***/ "./src/app/components/pages/recipe-details/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/pages/recipe-details/index.ts ***!
  \**********************************************************/
/*! exports provided: RecipeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _recipe_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-details.component */ "./src/app/components/pages/recipe-details/recipe-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailsComponent", function() { return _recipe_details_component__WEBPACK_IMPORTED_MODULE_1__["RecipeDetailsComponent"]; });





/***/ }),

/***/ "./src/app/components/pages/recipe-details/recipe-details.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/pages/recipe-details/recipe-details.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcmVjaXBlLWRldGFpbHMvcmVjaXBlLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/pages/recipe-details/recipe-details.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/recipe-details/recipe-details.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RecipeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailsComponent", function() { return RecipeDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_ingredient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/ingredient.service */ "./src/app/services/ingredient.service.ts");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_step_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/step.service */ "./src/app/services/step.service.ts");
/* harmony import */ var _services_review_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/review.service */ "./src/app/services/review.service.ts");







let RecipeDetailsComponent = class RecipeDetailsComponent {
    constructor(ingredientService, stepService, recipeService, reviewService, route, router) {
        this.ingredientService = ingredientService;
        this.stepService = stepService;
        this.recipeService = recipeService;
        this.reviewService = reviewService;
        this.route = route;
        this.router = router;
        this.subscriptions = [];
    }
    ngOnInit() {
        const sub = this.route.paramMap.subscribe(params => {
            this.idParam = params.get("id");
            this.idRecipe = parseInt(this.idParam);
        });
        this.subscriptions.push(sub);
        this.loadRecipe();
        this.loadIngredients();
        this.loadSteps();
        this.loadReviews();
    }
    get recipe() {
        return this._recipe;
    }
    set recipe(value) {
        this._recipe = value;
        this.updateSpice(value.spiceRate);
    }
    get spices() {
        return this._spices;
    }
    set spices(value) {
        this._spices = value;
    }
    get steps() {
        return this._steps;
    }
    set steps(value) {
        this._steps = value;
    }
    get ingredients() {
        return this._ingredients;
    }
    set ingredients(value) {
        this._ingredients = value;
    }
    get reviews() {
        return this._reviews;
    }
    set reviews(value) {
        this._reviews = value;
    }
    updateSpice(nb) {
        this._spices = Array(nb).fill(0);
    }
    loadIngredients() {
        const sub = this.ingredientService
            .queryRecipeId(this.idRecipe)
            .subscribe(ingredients => this.ingredients = ingredients);
        this.subscriptions.push(sub);
    }
    loadRecipe() {
        const sub = this.recipeService
            .queryId(this.idRecipe)
            .subscribe(recipes => this.recipe = recipes[0]);
        this.subscriptions.push(sub);
    }
    loadSteps() {
        const sub = this.stepService
            .queryByRecipe(this.idRecipe)
            .subscribe(steps => this.steps = steps);
        this.subscriptions.push(sub);
    }
    loadReviews() {
        const sub = this.reviewService
            .queryByRecipe(this.idRecipe)
            .subscribe(reviews => this.reviews = reviews);
        this.subscriptions.push(sub);
    }
};
RecipeDetailsComponent.ctorParameters = () => [
    { type: _services_ingredient_service__WEBPACK_IMPORTED_MODULE_2__["IngredientService"] },
    { type: _services_step_service__WEBPACK_IMPORTED_MODULE_5__["StepService"] },
    { type: _services_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"] },
    { type: _services_review_service__WEBPACK_IMPORTED_MODULE_6__["ReviewService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RecipeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/recipe-details/recipe-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-details.component.css */ "./src/app/components/pages/recipe-details/recipe-details.component.css")).default]
    })
], RecipeDetailsComponent);



/***/ }),

/***/ "./src/app/components/pages/recipe-search/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/recipe-search/index.ts ***!
  \*********************************************************/
/*! exports provided: RecipeSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _recipe_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-search.component */ "./src/app/components/pages/recipe-search/recipe-search.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecipeSearchComponent", function() { return _recipe_search_component__WEBPACK_IMPORTED_MODULE_1__["RecipeSearchComponent"]; });





/***/ }),

/***/ "./src/app/components/pages/recipe-search/recipe-search.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/pages/recipe-search/recipe-search.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcmVjaXBlLXNlYXJjaC9yZWNpcGUtc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/pages/recipe-search/recipe-search.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/recipe-search/recipe-search.component.ts ***!
  \***************************************************************************/
/*! exports provided: RecipeSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeSearchComponent", function() { return RecipeSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _enumerations_recipe_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../enumerations/recipe-type.enum */ "./src/app/enumerations/recipe-type.enum.ts");
/* harmony import */ var _pipes_recipe_pipe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/recipe-pipe.pipe */ "./src/app/pipes/recipe-pipe.pipe.ts");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");


<<<<<<< HEAD
let RecipeSearchComponent = class RecipeSearchComponent {
    constructor() {
=======




let RecipeSearchComponent = class RecipeSearchComponent {
    constructor(recipeService, route, router) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
        this.filterSelected = _enumerations_recipe_type_enum__WEBPACK_IMPORTED_MODULE_2__["RecipeType"].ALL;
        this.searchText = "";
        this.filters = _enumerations_recipe_type_enum__WEBPACK_IMPORTED_MODULE_2__["RECIPE_TYPE_FILTER"];
        this.subscriptions = [];
>>>>>>> f3f8d26eee0cfa0b25a9a22e6987ab081c5b5332
    }
    ngOnInit() {
        const sub = this.route.paramMap.subscribe(params => {
            this.searchText = params.get("text");
            if (this.searchText == null) {
                this.searchText = "";
            }
            console.log(this.searchText);
            this.loadRecipe();
        });
        this.subscriptions.push(sub);
    }
    get recipes() {
        return this._recipes;
    }
    set recipes(value) {
        this._recipes = value;
        this.updateFilteredRecipes();
    }
    get filteredRecipes() {
        return this._filteredRecipes;
    }
    set filteredRecipes(value) {
        this._filteredRecipes = value;
    }
    updateFilteredRecipes() {
        this._filteredRecipes = new _pipes_recipe_pipe_pipe__WEBPACK_IMPORTED_MODULE_3__["RecipePipe"]()
            .transform(this._recipes, this.filterSelected);
    }
    loadRecipe() {
        const sub = this.recipeService
            .queryText(this.searchText)
            .subscribe(recipes => this.recipes = recipes);
        this.subscriptions.push(sub);
    }
};
RecipeSearchComponent.ctorParameters = () => [
    { type: _services_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
RecipeSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/recipe-search/recipe-search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-search.component.css */ "./src/app/components/pages/recipe-search/recipe-search.component.css")).default]
    })
], RecipeSearchComponent);



/***/ }),

/***/ "./src/app/components/pages/user-details/index.ts":
/*!********************************************************!*\
  !*** ./src/app/components/pages/user-details/index.ts ***!
  \********************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-details.component */ "./src/app/components/pages/user-details/user-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return _user_details_component__WEBPACK_IMPORTED_MODULE_1__["UserDetailsComponent"]; });





/***/ }),

/***/ "./src/app/components/pages/user-details/user-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/pages/user-details/user-details.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/pages/user-details/user-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/user-details/user-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserDetailsComponent = class UserDetailsComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/user-details/user-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-details.component.css */ "./src/app/components/pages/user-details/user-details.component.css")).default]
    })
], UserDetailsComponent);



/***/ }),

/***/ "./src/app/components/recipe-result/recipe-result.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/recipe-result/recipe-result.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjaXBlLXJlc3VsdC9yZWNpcGUtcmVzdWx0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/recipe-result/recipe-result.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/recipe-result/recipe-result.component.ts ***!
  \*********************************************************************/
/*! exports provided: RecipeResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeResultComponent", function() { return RecipeResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecipeResultComponent = class RecipeResultComponent {
    constructor() {
    }
    get recipe() {
        return this._recipe;
    }
    set recipe(value) {
        this._recipe = value;
        this.updateSpice(value.spiceRate);
    }
    get spices() {
        return this._spices;
    }
    set spices(value) {
        this._spices = value;
    }
    ngOnInit() {
    }
    updateSpice(nb) {
        this._spices = Array(nb).fill(0);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipeResultComponent.prototype, "recipe", null);
RecipeResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-result',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-result.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/recipe-result/recipe-result.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-result.component.css */ "./src/app/components/recipe-result/recipe-result.component.css")).default]
    })
], RecipeResultComponent);



/***/ }),

<<<<<<< HEAD
/***/ "./src/app/components/recipe-results-list/recipe-results-list.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/recipe-results-list/recipe-results-list.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjaXBlLXJlc3VsdHMtbGlzdC9yZWNpcGUtcmVzdWx0cy1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/recipe-results-list/recipe-results-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/recipe-results-list/recipe-results-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RecipeResultsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeResultsListComponent", function() { return RecipeResultsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _enumerations_recipe_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enumerations/recipe-type.enum */ "./src/app/enumerations/recipe-type.enum.ts");
/* harmony import */ var _pipes_recipe_pipe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/recipe-pipe.pipe */ "./src/app/pipes/recipe-pipe.pipe.ts");




let RecipeResultsListComponent = class RecipeResultsListComponent {
    constructor() {
        this.FILTERS = [{
                id: "All",
                value: _enumerations_recipe_type_enum__WEBPACK_IMPORTED_MODULE_2__["RecipeType"].ALL
            },
            {
                id: "Entrée",
                value: _enumerations_recipe_type_enum__WEBPACK_IMPORTED_MODULE_2__["RecipeType"].ENTREE
            },
            {
                id: "Plat",
                value: _enumerations_recipe_type_enum__WEBPACK_IMPORTED_MODULE_2__["RecipeType"].PLAT
            },
            {
                id: "Dessert",
                value: _enumerations_recipe_type_enum__WEBPACK_IMPORTED_MODULE_2__["RecipeType"].DESSERT
            }];
        this.MOCK_RECIPE = [{
                idRecipe: 1,
                idUser: 1,
                nameRecipe: "tartine au beurre",
                postDate: "30-11-2019",
                summary: "recette simple pour une tartine au beurre",
                persons: 1,
                prepTime: 5,
                spiceRate: 1,
                recipeType: "Plat",
                pseudo: "niborobin"
            }];
        this.filterSelected = _enumerations_recipe_type_enum__WEBPACK_IMPORTED_MODULE_2__["RecipeType"].ALL;
        this.recipeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filters = _enumerations_recipe_type_enum__WEBPACK_IMPORTED_MODULE_2__["RECIPE_TYPE_FILTER"];
    }
    get recipes() {
        return this._recipes;
    }
    set recipes(value) {
        this._recipes = value;
        this.updateFilteredRecipes();
    }
    get filteredRecipes() {
        return this._filteredRecipes;
    }
    set filteredRecipes(value) {
        this._filteredRecipes = value;
    }
    ngOnInit() {
        this.recipes = this.MOCK_RECIPE;
    }
    updateFilteredRecipes() {
        this._filteredRecipes = new _pipes_recipe_pipe_pipe__WEBPACK_IMPORTED_MODULE_3__["RecipePipe"]()
            .transform(this._recipes, this.filterSelected);
    }
    loadRecipe(recipe) {
        this.recipeSelected.next(recipe);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], RecipeResultsListComponent.prototype, "FILTERS", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], RecipeResultsListComponent.prototype, "recipeSelected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipeResultsListComponent.prototype, "recipes", null);
RecipeResultsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-results-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-results-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/recipe-results-list/recipe-results-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-results-list.component.css */ "./src/app/components/recipe-results-list/recipe-results-list.component.css")).default]
    })
], RecipeResultsListComponent);



/***/ }),

=======
>>>>>>> f3f8d26eee0cfa0b25a9a22e6987ab081c5b5332
/***/ "./src/app/components/recipe-search-bar/recipe-search-bar.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/recipe-search-bar/recipe-search-bar.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjaXBlLXNlYXJjaC1iYXIvcmVjaXBlLXNlYXJjaC1iYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/recipe-search-bar/recipe-search-bar.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/recipe-search-bar/recipe-search-bar.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RecipeSearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeSearchBarComponent", function() { return RecipeSearchBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecipeSearchBarComponent = class RecipeSearchBarComponent {
    constructor() {
        this._userSearch = "";
    }
    get userSearch() {
        return this._userSearch;
    }
    set userSearch(value) {
        this._userSearch = value;
    }
    ngOnInit() {
    }
    searchRecipe() {
    }
};
RecipeSearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-search-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-search-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/recipe-search-bar/recipe-search-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-search-bar.component.css */ "./src/app/components/recipe-search-bar/recipe-search-bar.component.css")).default]
    })
], RecipeSearchBarComponent);



/***/ }),

/***/ "./src/app/enumerations/recipe-type.enum.ts":
/*!**************************************************!*\
  !*** ./src/app/enumerations/recipe-type.enum.ts ***!
  \**************************************************/
/*! exports provided: RecipeType, RECIPE_TYPE_FILTER, RECIPE_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeType", function() { return RecipeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECIPE_TYPE_FILTER", function() { return RECIPE_TYPE_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECIPE_TYPE", function() { return RECIPE_TYPE; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var RecipeType;
(function (RecipeType) {
    RecipeType["ALL"] = "All";
    RecipeType["ENTREE"] = "Starter";
    RecipeType["PLAT"] = "Main course";
    RecipeType["DESSERT"] = "Dessert";
})(RecipeType || (RecipeType = {}));
const RECIPE_TYPE_FILTER = [{
        id: "All",
        value: RecipeType.ALL
    },
    {
        id: "Entrée",
        value: RecipeType.ENTREE
    },
    {
        id: "Plat",
        value: RecipeType.PLAT
    },
    {
        id: "Dessert",
        value: RecipeType.DESSERT
    }];
const RECIPE_TYPE = [
    {
        id: "Entrée",
        value: RecipeType.ENTREE
    },
    {
        id: "Plat",
        value: RecipeType.PLAT
    },
    {
        id: "Dessert",
        value: RecipeType.DESSERT
    }
];
<<<<<<< HEAD


/***/ }),

/***/ "./src/app/helpers/auth-guard.ts":
/*!***************************************!*\
  !*** ./src/app/helpers/auth-guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/authentication.service */ "./src/app/services/authentication.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        const currentUser = this.authService.currentUserValue;
        if (currentUser) {
            console.log("logged in");
            return true;
        }
        else {
            console.log("not logged in");
        }
        this.router.navigate([''], { queryParams: { returnURL: state.url } });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ "./src/app/helpers/error-interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/helpers/error-interceptor.ts ***!
  \**********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/authentication.service */ "./src/app/services/authentication.service.ts");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 401) {
                // Auto logout if 401 response returned from api
                this.authService.logout();
                // location.reload(true);
                location.reload();
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/helpers/index.ts":
/*!**********************************!*\
  !*** ./src/app/helpers/index.ts ***!
  \**********************************/
/*! exports provided: JwtInterceptor, ErrorInterceptor, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-guard */ "./src/app/helpers/auth-guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt-interceptor */ "./src/app/helpers/jwt-interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-interceptor */ "./src/app/helpers/error-interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_3__["ErrorInterceptor"]; });







/***/ }),

/***/ "./src/app/helpers/jwt-interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/jwt-interceptor.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let JwtInterceptor = class JwtInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        let currentUser = this.authService.currentUserValue;
        console.log("intercepted");
        // If the user's connected and has a token, provides the token in the request header.
        if (currentUser && currentUser.token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        // Handles the request
        return next.handle(req);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }
];
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], JwtInterceptor);

=======
>>>>>>> f3f8d26eee0cfa0b25a9a22e6987ab081c5b5332


/***/ }),

/***/ "./src/app/pipes/recipe-pipe.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/recipe-pipe.pipe.ts ***!
  \*******************************************/
/*! exports provided: RecipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipePipe", function() { return RecipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _enumerations_recipe_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enumerations/recipe-type.enum */ "./src/app/enumerations/recipe-type.enum.ts");



let RecipePipe = class RecipePipe {
    transform(recipes, recipeType) {
        switch (recipeType) {
            case _enumerations_recipe_type_enum__WEBPACK_IMPORTED_MODULE_2__["RecipeType"].ENTREE:
                return recipes.filter(recipe => recipe.recipeType == "Entrée");
            case _enumerations_recipe_type_enum__WEBPACK_IMPORTED_MODULE_2__["RecipeType"].PLAT:
                return recipes.filter(recipe => recipe.recipeType == "Plat");
            case _enumerations_recipe_type_enum__WEBPACK_IMPORTED_MODULE_2__["RecipeType"].DESSERT:
                return recipes.filter(recipe => recipe.recipeType == "Dessert");
            default:
                return recipes;
        }
    }
};
RecipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'Recipe'
    })
], RecipePipe);



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
<<<<<<< HEAD
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var AuthenticationService_1;
=======
>>>>>>> f3f8d26eee0cfa0b25a9a22e6987ab081c5b5332





<<<<<<< HEAD

let AuthenticationService = AuthenticationService_1 = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem(AuthenticationService_1.USER_KEY)));
=======
let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.USER_KEY = "currentUser";
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem(this.USER_KEY)));
>>>>>>> f3f8d26eee0cfa0b25a9a22e6987ab081c5b5332
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
<<<<<<< HEAD
    login(username, password) {
        let authPath = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}${AuthenticationService_1.AUTH_API_PATH}`;
        // let authPath = `https://localhost:5001${AuthenticationService.AUTH_API_PATH}`;
        return this.http.post(authPath, { username, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(user => {
            localStorage.setItem(AuthenticationService_1.USER_KEY, JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
    }
    logout() {
        localStorage.removeItem(AuthenticationService_1.USER_KEY);
        this.currentUserSubject.next(null);
    }
};
AuthenticationService.AUTH_API_PATH = "/api/users/authenticate";
AuthenticationService.USER_KEY = "currentUser";
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthenticationService = AuthenticationService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
=======
    login(login, password) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/users/authenticate`, { login, password });
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
>>>>>>> f3f8d26eee0cfa0b25a9a22e6987ab081c5b5332
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/services/globals.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/globals.service.ts ***!
  \*********************************************/
/*! exports provided: GlobalsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalsService", function() { return GlobalsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var GlobalsService_1;


let GlobalsService = GlobalsService_1 = class GlobalsService {
    constructor() {
    }
    get mobile() {
        return this._mobile;
    }
    set mobile(value) {
        this._mobile = value;
    }
    /// MOBILE
    updateMobile() {
        this._mobile = window.screen.width <= GlobalsService_1.MOBILE_MAX_WIDTH;
    }
};
GlobalsService.MOBILE_MAX_WIDTH = 420;
GlobalsService = GlobalsService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
    /**
     * Represents global variables such as if the user's on a smartphone.
     */
    ,
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], GlobalsService);



/***/ }),

/***/ "./src/app/services/ingredient.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/ingredient.service.ts ***!
  \************************************************/
/*! exports provided: IngredientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientService", function() { return IngredientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var IngredientService_1;



let IngredientService = IngredientService_1 = class IngredientService {
    constructor(http) {
        this.http = http;
    }
    query() {
        return this.http.get(IngredientService_1.URL);
    }
    queryRecipeId(id) {
        return this.http.get(IngredientService_1.URL + "recipe=" + id);
    }
    post(ingredient) {
        return this.http.post(IngredientService_1.URL, ingredient);
    }
    postToRecipe(ingredient) {
        return this.http.post(IngredientService_1.URL + "recipe", ingredient);
    }
    put(ingredient) {
        return this.http.put(IngredientService_1.URL, ingredient);
    }
    putInRecipe(ingredient) {
        return this.http.put(IngredientService_1.URL + "recipe", ingredient);
    }
    delete(id) {
        return this.http.delete(`${IngredientService_1.URL}/${id}`);
    }
    deleteFromRecipe(idRecipe, idIngredient) {
        return this.http.delete(`${IngredientService_1.URL}/recipe=${idRecipe}/ingredient=${idIngredient}`);
        ;
    }
};
IngredientService.URL = "/api/ingredients/";
IngredientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
IngredientService = IngredientService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IngredientService);



/***/ }),

/***/ "./src/app/services/recipe.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/recipe.service.ts ***!
  \********************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var RecipeService_1;



let RecipeService = RecipeService_1 = class RecipeService {
    constructor(http) {
        this.http = http;
    }
    query() {
        return this.http.get(RecipeService_1.URL);
    }
    queryPseudo() {
        return this.http.get(RecipeService_1.URL + "pseudo");
    }
    queryText(text) {
        text.replace(" ", "_");
        return this.http.get(RecipeService_1.URL + "text=" + text);
    }
    queryId(id) {
        return this.http.get(RecipeService_1.URL + "id=" + id);
    }
    post(ingredient) {
        return this.http.post(RecipeService_1.URL, ingredient);
    }
    put(ingredient) {
        return this.http.put(RecipeService_1.URL, ingredient);
    }
    delete(id) {
        return this.http.delete(`${RecipeService_1.URL}/${id}`);
    }
};
RecipeService.search = "";
RecipeService.URL = "/api/recipes/";
RecipeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RecipeService = RecipeService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RecipeService);



/***/ }),

/***/ "./src/app/services/review.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/review.service.ts ***!
  \********************************************/
/*! exports provided: ReviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewService", function() { return ReviewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var ReviewService_1;



let ReviewService = ReviewService_1 = class ReviewService {
    constructor(http) {
        this.http = http;
    }
    query() {
        return this.http.get(ReviewService_1.URL);
    }
    queryByRecipe(id) {
        return this.http.get(ReviewService_1.URL + "recipe=" + id);
    }
    post(ingredient) {
        return this.http.post(ReviewService_1.URL, ingredient);
    }
    put(ingredient) {
        return this.http.put(ReviewService_1.URL, ingredient);
    }
    delete(id) {
        return this.http.delete(`${ReviewService_1.URL}/${id}`);
    }
};
ReviewService.URL = "/api/reviews/";
ReviewService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ReviewService = ReviewService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ReviewService);



/***/ }),

/***/ "./src/app/services/step.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/step.service.ts ***!
  \******************************************/
/*! exports provided: StepService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepService", function() { return StepService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var StepService_1;



let StepService = StepService_1 = class StepService {
    constructor(http) {
        this.http = http;
    }
    query() {
        return this.http.get(StepService_1.URL);
    }
    queryByRecipe(id) {
        return this.http.get(StepService_1.URL + id);
    }
    post(ingredient) {
        return this.http.post(StepService_1.URL, ingredient);
    }
    put(ingredient) {
        return this.http.put(StepService_1.URL, ingredient);
    }
    delete(id) {
        return this.http.delete(`${StepService_1.URL}/${id}`);
    }
};
StepService.URL = "/api/steps/";
StepService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StepService = StepService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StepService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
<<<<<<< HEAD
    production: false,
    apiUrl: 'https://localhost:5001',
=======
    apiUrl: 'http://localhost:4000',
    production: false
>>>>>>> f3f8d26eee0cfa0b25a9a22e6987ab081c5b5332
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\_OthersProject\CuisineHELHa\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map