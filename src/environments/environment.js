angular.module('MyApp')
.constant('environmentCustom', {
    PRODUCAO: false,
    
    API_URL: 'http://localhost:8081/api',
    API_USUARIO: 'user',
    API_SENHA: 'user@123',

    API_PROXY: 'apix',
});