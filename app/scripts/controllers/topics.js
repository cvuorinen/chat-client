'use strict';

angular.module('chatClientApp')
    .controller('TopicsCtrl', function ($scope, Topic) {
        $scope.topics = Topic.query();
    });
