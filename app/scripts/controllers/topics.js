'use strict';

angular.module('chatClientApp')
    .controller('TopicsCtrl', function ($scope, $location, Topic) {
        $scope.topics = Topic.query();

        $scope.delete = function(topic) {
            Topic.delete(topic);
            _.remove($scope.topics, topic);
        }

        $scope.selectTopic = function (topic) {
            $location.path('/messages');
        }
    });
