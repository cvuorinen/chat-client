'use strict';

angular.module('chatClientApp')
    .controller('UserCtrl', function ($scope, $location, User) {
        $scope.user = User.getUser();

        $scope.setUser = function() {
            User.setUser($scope.user);

            $location.path('/topics');
        };
    });
