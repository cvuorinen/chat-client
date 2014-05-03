'use strict';

angular.module('chatClientApp')
    .service('Topic', function Topic() {
        return {
            query: function() {
                return [
                    {id: 1, title: 'Symfony2 REST API'},
                    {id: 2, title: 'AngularJS'},
                    {id: 3, title: 'W3 School'}
                ];
            }
        };
    });
