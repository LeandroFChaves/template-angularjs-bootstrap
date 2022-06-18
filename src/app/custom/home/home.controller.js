/*
app.controller('HomeCustomController', function($scope, $location) {
    var vm = this;

    $scope.message = 'Routing pages with ngRoute is damn awesome!';
    console.log($location.path())

    console.log('>>>>>>>>>>>>>>')
    vm.nome = 'Teste controller'
});
*/

angular.module('MyApp')
    .controller('HomeCustomController', [
    '$stateParams', 'HomeCustomService',

    function HomeCustomController($stateParams, HomeCustomService) {
        var vm = this;

        vm.nome = 'Home 1'

        console.log('>>>>>>>>>>>>>> params')
        console.log($stateParams)
        console.log('>>>>>>>>>>>>>> params name')
        console.log($stateParams.pessoaLogada?.name)

        HomeCustomService.listarAlunos().query((response) => {
            console.log('Service >>>>')
            console.log(response)
        }, (error) => {
            console.log(error)
        });
    }
]);
