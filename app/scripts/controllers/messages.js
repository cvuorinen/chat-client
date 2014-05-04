'use strict';

angular.module('chatClientApp')
    .controller('MessagesCtrl', function ($scope, Message, SelectedTopic, User) {
        $scope.message = '';
        $scope.user = User.getUser();
        $scope.topic = SelectedTopic.getSelectedTopic();
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
