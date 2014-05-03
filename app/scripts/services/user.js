'use strict';

angular.module('chatClientApp')
    .service('User', function User($cookies) {
        var user = {
            name: $cookies.userName
        };

        return {
            getUser: function() {
                return user;
            },
            setUser: function(newUser) {
                user = newUser;

                $cookies.userName = user.name;
            }
        };
    });
