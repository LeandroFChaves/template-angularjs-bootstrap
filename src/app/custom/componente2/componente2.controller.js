angular.module('MyApp')
    .controller('Componente2CustomController', [
    '$location', '$stateParams', 'Componente2CustomService',

    function Componente2CustomController($location, $stateParams, Componente2CustomService) {
        var vm = this;

        vm.nome = 'Componente 2';
    }
]);
