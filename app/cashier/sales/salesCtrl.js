'use strict';
angular.module('newApp')
    .controller('salesCtrl', ['$scope', 'pluginsService', function ($scope, pluginsService) {
        $scope.$on('$viewContentLoaded', function () {

            $scope.user = {first_name:'',first_last_name:''};
            
            $scope.defaultClient = true;
            $scope.clientExist = true;
            $scope.userId = '';
            $scope.idReady = false;

            //Watch Client Id to check if exist
            $scope.$watch('userId', function (newValue, oldValue) {
                //If data is undefined then mask is not completed
                if ($scope.userId !== undefined) {
                    $scope.user.id = $scope.userId;

                    //Check if Id complete (9 numbers)
                    console.log("idlenght" + $scope.userId.length)
                    if ($scope.userId.length == 9) {
                        //Check if exist
                        $scope.clientExist = ($scope.userId == '207480440') //(Change id comparisson with DB search)
                        console.log("exist" + $scope.clientExist)
                        //Form validation
                        $scope.idReady = true;
                    } else {
                        //Not show new client inputs at the begining
                        $scope.clientExist = true;
                        //Form validation
                        $scope.idReady = false;
                    }
                }else{
                    //Not show new client inputs if masked is incomplete (ID is less than 9)
                    $scope.clientExist = true;
                    //Form validation
                    $scope.idReady = false;
                }

            });

        });

    }]);