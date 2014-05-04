'use strict';

angular.module('chatClientApp')
    .controller('TopicFormCtrl', function ($scope, $route, $location, Topic) {
        if ($route.current.params.id == "new") {
            $scope.topic = {};
        } else {
            $scope.topic = Topic.get($route.current.params.id);
        }

        $scope.submit = function() {
            if ($scope.topic.id) {
                Topic.update($scope.topic);
            } else {
                Topic.post($scope.topic);
            }

            $location.path('/topics');
        };
    });
