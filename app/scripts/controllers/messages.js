'use strict';

angular.module('chatClientApp')
    .controller('MessagesCtrl', function ($scope, Message) {
        $scope.messages = Message.query();
    });
