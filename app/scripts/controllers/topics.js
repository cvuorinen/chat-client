'use strict';

angular.module('chatClientApp')
    .controller('TopicsCtrl', function ($scope) {
        $scope.topics = [
            {id: 1, title: 'Symfony2 REST API'},
            {id: 2, title: 'AngularJS'},
            {id: 3, title: 'W3 School'}
        ];
    });
