'use strict';

angular
    .module('chatClientApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/messages', {
                templateUrl: 'views/messages.html',
                controller: 'MessagesCtrl'
            })
            .when('/topics', {
                templateUrl: 'views/topics.html',
                controller: 'TopicsCtrl'
            })
            .when('/topics/:id', {
                templateUrl: 'views/topic-form.html',
                controller: 'TopicFormCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
