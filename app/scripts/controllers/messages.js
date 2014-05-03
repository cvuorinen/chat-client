'use strict';

angular.module('chatClientApp')
    .controller('MessagesCtrl', function ($scope, Message) {
        $scope.message = '';
        $scope.user = {name: 'Carl'};
        $scope.messages = Message.query();
    });
