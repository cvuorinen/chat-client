'use strict';

angular.module('chatClientApp')
    .controller('MessagesCtrl', function ($scope, Message, User) {
        $scope.message = '';
        $scope.user = User.getUser();
        $scope.messages = Message.query();

        $scope.delete = Message.delete;

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
