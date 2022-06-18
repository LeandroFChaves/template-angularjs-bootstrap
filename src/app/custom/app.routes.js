app.config(function($stateProvider) {
    $stateProvider
        .state('home', {
            cache: false,
            url: "/custom/home",
            controller: 'HomeCustomController',
            controllerAs: 'vm',
            templateUrl: function() {
                return 'custom/home/home.view.html';
            }
        })

        .state('componente1', {
            cache: false,
            url: '/custom/componente1',
            controller: 'Componente1CustomController',
            controllerAs: 'vm',
            templateUrl: function () {
                return 'custom/componente1/componente1.view.html';
            },
        })

        .state('componente2', {
            cache: false,
            url: '/custom/componente2',
            controller: 'Componente2CustomController',
            controllerAs: 'vm',
            templateUrl: function () {
                return 'custom/componente2/componente2.view.html';
            },
        });        
});