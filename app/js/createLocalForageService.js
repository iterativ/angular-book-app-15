angular.module('itApp').factory('createLocalStorageService', createLocalStorageService);

function createLocalStorageService($http, $q, $localForage) {
    return {
        create: function(url, dataKey) {
            var cache = null;

            function getTasks() {
                if(cache) {
                    return $q.when(cache);
                }
                else {
                    return $http.get(url).then(function(response) {
                        console.log(response);
                        cache = response.data;
                        return $localForage.setItem(dataKey, response.data).then(function() {
                            return response.data;
                        });
                    }, function(error) {
                        console.log(error);
                        return $localForage.getItem(dataKey);
                    });
                }
            }

            return {
                getTasks: getTasks
            }
        }
    }
}