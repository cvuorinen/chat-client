'use strict';

angular.module('chatClientApp')
    .controller('MessagesCtrl', function ($scope, Message, SelectedTopic, User) {
        var createdMessages = [];

        $scope.user = User.getUser();
        $scope.topic = SelectedTopic.getSelectedTopic();
        $scope.message = newMessage();
        $scope.messages = Message.query();

        $scope.save = function(message) {
            if (!$scope.message.id) {
                createdMessages.push($scope.message);
            }

            $scope.message.$save();

            $scope.messages.push($scope.message);

            $scope.message = newMessage();
        }

        $scope.delete = function(message) {
            Message.delete(message);
            _.remove($scope.messages, message);
        }

        $scope.createdMessage = function(message) {
            var index = _.findIndex(createdMessages, {id: message.id});

            return index >= 0;
        }

        function newMessage() {
            var message = new Message();

            if ($scope.user) {
                message.user = $scope.user.name;
            }

            if ($scope.topic) {
                message._topic = {id: $scope.topic.id};
            }

            return message;
        }
    });
