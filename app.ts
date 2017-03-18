const myApp = angular.module('myApp', []);
class HomeController {
    public message: string;
    constructor(){
        this.message = "Hello";
    }
}
myApp.controller("HomeController", HomeController);

interface IMessageContainerScope extends ng.IScope {
    message: string;
}

class MessageContainer {
    public templateUrl = "messageView.html";
    public scope = {
        message: "="
    };
    // constructor() {

    // }

    public link: ng.IDirectiveLinkFn = (scope: IMessageContainerScope, element, attrs) => {
        scope.message = "Joel";
    }

    public static Factory() {
        const directive = () => {
            return new MessageContainer();
        };
        directive.$inject = [];
        return directive;
    }
}

myApp.directive('messageContainer', MessageContainer.Factory());