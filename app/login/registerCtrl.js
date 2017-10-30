﻿'use strict';

angular.module('newApp')
    .controller('RegisterController', ['$scope', 'UserService', '$location', '$rootScope', 'FlashService', 'pluginsService',
        function ($scope, UserService, $location, $rootScope, FlashService, pluginsService) {
            $scope.user = {};
            $scope.user.second_name = "";
            /* Inline Date & Time picker */
            $('#inline_datetimepicker').datetimepicker({
                altField: "#inline_datetimepicker_alt",
                altFieldTimeOnly: false,
                isRTL: $('body').hasClass('rtl') ? true : false
            });

            $scope.register = function () {
                $scope.user.ailments = [];
                $scope.dataLoading = true;

                UserService.Create($scope.user)
                    .then(function (response) {
                        if (response.success) {
                            FlashService.Success('Registration successful', true);
                            console.log('Registration successful');
                            console.log(response);
                            $location.path('/login');
                        } else {
                            FlashService.Error(response.message);
                            $scope.error = response.messages;
                            console.log(response.message);
                            $scope.dataLoading = false;
                            
                        }
                });
            }
            pluginsService.init();
        }]);