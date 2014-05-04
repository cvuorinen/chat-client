'use strict';

angular.module('chatClientApp')
    .controller('TopicFormCtrl', function ($scope, $location, Topic) {
        $scope.topic = {};
        $scope.submitted = false;

        $scope.submit = function() {
            $scope.submitted = true;

            Topic.post($scope.topic);

            $location.path('/topics');
        };
    });
