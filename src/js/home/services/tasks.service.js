'use strict';

angular
    .module('PanteonApp.home')
    .factory('tasksService', ['$http', '$q', tasksService])

;

function tasksService($http, $q, logger) {

    var service = {
        getAll: getAll,
        getTaskByName: getTaskByName
    };

    return service;

    function getAll() {
        var deferred = $q.defer();

        $http.get('http://localhost:5002/tasks')
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status) {
                logger.error('XHR Failed for MessagesService::getAll.' + data);
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function getTaskByName(name) {
        var deferred = $q.defer();

        $http.get('http://localhost:5002/tasks/' + name)
            .success(function (data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function (data, status) {
                logger.error('XHR Failed for MessagesService::getMessageById.' + data);
                deferred.reject(data);
            });

        return deferred.promise;
    }
}