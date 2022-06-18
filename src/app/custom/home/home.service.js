angular.module('MyApp')
    .service('HomeCustomService', [
    '$resource', '$q', 'environmentCustom',
    
    function HomeCustomService($resource, $q, environment) {
        const apiUrl = environment.PRODUCAO ? environment.API_PROXY : environment.API_URL;

        this.listarAlunos = function() {
            return $resource(apiUrl + '/api/pessoas/274627/alunos', {}, {
                cache: false,
                query: {
                    method: 'GET',
                    isArray: true,
                    params: {},
                    headers : {
                        'Authorization': 'Basic ' + btoa(environment.API_USUARIO + ':' + environment.API_SENHA)
                    }
                },
            });
        }
    }
]);        