const myApp = angular.module('myApp', []);
class HomeController {
    public message: string;
    constructor(){
        this.message = "Hello";
    }
}
myApp.controller("HomeController", HomeController);