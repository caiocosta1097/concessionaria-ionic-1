angular.module('starter').config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('login');

$stateProvider
.state('login', {
    url: '/login',
    templateUrl: 'templates/login.html'
})

.state('listagem', {
    url: '/listagem',
    templateUrl: 'templates/listagem.html',
    controller: 'listaController'
})

.state('detalhes', {
    url: '/detalhes/:carro',
    templateUrl: 'templates/carroDetalhes.html',
    controller: 'detalhesController'
})

.state('finalizar', {
    url: '/finalizar/:carro',
    templateUrl: 'templates/finalizarPedido.html',
    controller: 'finalizarController'
})

});