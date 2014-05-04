'use strict';

angular.module('chatClientApp')
    .controller('TopicsCtrl', function ($scope, $location, Topic) {
        $scope.topics = Topic.query();

        $scope.delete = Topic.delete;

        $scope.selectTopic = function (topic) {
            $location.path('/messages');
        }
    });
