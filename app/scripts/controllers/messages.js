'use strict';

angular.module('chatClientApp')
    .controller('MessagesCtrl', function ($scope, Message) {
        $scope.message = '';
        $scope.user = {name: 'Carl'};
        $scope.messages = Message.query();

        $scope.submit = function() {
            var message = {
                user: $scope.user.name,
                message: $scope.message,
                time: new Date().toJSON()
            };

            $scope.messages.push(message);

            $scope.message = '';
        }
    });
