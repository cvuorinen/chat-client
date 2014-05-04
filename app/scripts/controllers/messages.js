'use strict';

angular.module('chatClientApp')
    .controller('MessagesCtrl', function ($scope, Message, SelectedTopic, User) {
        $scope.message = new Message();
        $scope.user = User.getUser();
        $scope.topic = SelectedTopic.getSelectedTopic();
        $scope.messages = Message.query();

        $scope.delete = Message.delete;

        $scope.save = function(message) {
            $scope.message.user = $scope.user.name;
            $scope.message._topic = {id: $scope.topic.id};

            $scope.message.$save();

            $scope.messages.push($scope.message);

            $scope.message = new Message();
        }
    });
