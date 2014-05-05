'use strict';

angular.module('chatClientApp')
    .controller('TopicFormCtrl', function ($scope, $routeParams, $location, Topic) {
        if ($routeParams.id == "new") {
            $scope.topic = new Topic();
        } else {
            $scope.topic = Topic.get({id: $routeParams.id});
        }

        $scope.save = function() {
            if ($scope.topic.id) {
                //Topic.update({id: $scope.topic.id}, $scope.topic);
                Topic.update({}, $scope.topic);
            } else {
                $scope.topic.$save();
            }

            $location.path('/topics');
        };
    });
