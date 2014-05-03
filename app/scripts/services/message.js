'use strict';

angular.module('chatClientApp')
    .service('Message', function Message() {
        return {
            query: function () {
                return [
                    {id: 3, user: 'Carl', message: "What's up?", time: '2014-05-03T18:09:16+0300'},
                    {id: 2, user: 'Foo', message: 'Hello', time: '2014-05-03T18:04:16+0300'},
                    {id: 1, user: 'Carl', message: 'Hi', time: '2014-05-03T18:01:16+0300'}
                ];
            }
        };
    });
