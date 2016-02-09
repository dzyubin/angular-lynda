/**
 * Created by Админ on 07.02.2016.
 */
myApp.controller('RegistrationController',
    ['$scope', 'Authentication', function ($scope, Authentication) {

        //'use strict';
        $scope.login = function () {
            Authentication.login($scope.user);
        }; // login

        $scope.logout = function () {
            Authentication.logout();
        }; // logout

        $scope.register = function () {
            Authentication.register($scope.user);
        }; // register
    }]); //Controller