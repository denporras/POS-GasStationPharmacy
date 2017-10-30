'use strict';

angular.module('Authentication')
    .controller('loginCtrl', ['$scope', '$rootScope', '$window', 'AuthenticationService',
        function ($scope, $rootScope, $window, AuthenticationService) {
            // reset login status
            AuthenticationService.ClearCredentials();

            $scope.initialCash = 0;

            $scope.login = function (service) {
                $scope.dataLoading = true;

                AuthenticationService.Login($scope.username, $scope.password, service, function (response) {
                    var userId = 0;
                    var user = {};
                    if (response.success) {

                        userId = response.employee.id_employee;
                        user = response.employee;
                        
                        AuthenticationService.SetCredentials($scope.username, $scope.password, service, userId, user);
                       //If user role is employee
                        $window.location.href = ('/app/cash/cash.html');
                        //User role is admin

                    } else {
                        $scope.error = response.messages;
                        $scope.dataLoading = false;
                    }
                });
            };
        }
    ]);