angular.module('MyApp')
    .controller('Componente1CustomController', [
    '$location', '$stateParams', 'Componente1CustomService',

    function Componente1CustomController($location, $stateParams, Componente1CustomService) {
        var vm = this;

        vm.nome = 'Componente 1';
    }
]);
