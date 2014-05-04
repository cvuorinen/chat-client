'use strict';

angular.module('chatClientApp')
    .controller('TopicFormCtrl', function ($scope, $route, $location, Topic) {
        if ($route.current.params.id == "new") {
            $scope.topic = new Topic();
        } else {
            $scope.topic = Topic.get({id: $route.current.params.id});
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
