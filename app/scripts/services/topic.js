'use strict';

angular.module('chatClientApp')
    .service('Topic', function Topic() {
        var topics = [
            {id: 1, title: 'Symfony2 REST API', description: 'Talk about Symfony2 REST APIs and related topics, like FOS REST Bundle, JMS Serializer Bundle, Bazinga HATEOAS Bundle, Nelmio API Doc Bundle etc.'},
            {id: 2, title: 'AngularJS', description: 'Everything related to AngularJS'},
            {id: 3, title: 'W3 School', description: 'W3 School related discussion. Suggest new topics, give feedback and ask questions about previous topics.'}
        ];

        return {
            query: function() {
                return topics;
            },
            get: function(id) {
                return _.find(topics, function(topic) {
                    return topic.id == id;
                });
            },
            post: function(topic) {
                topics.push(topic);
            },
            update: function(updatedTopic) {
                var index = _.findIndex(topics, function(topic) {
                    return topic.id == updatedTopic.id;
                });

                topics[index] = updatedTopic;
            },
            delete: function(topic) {
                _.remove(topics, topic);
            }
        };
    });
