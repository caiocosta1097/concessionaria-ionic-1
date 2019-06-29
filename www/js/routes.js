angular.module('starter').config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('listagem');

$stateProvider.state('listagem', {
    url: '/listagem',
    templateUrl: 'templates/listagem.html',
    controller: 'listaController'
})

$stateProvider.state('detalhes', {
    url: '/detalhes/:carro',
    templateUrl: 'templates/carroDetalhes.html',
    controller: 'detalhesController'
})

});