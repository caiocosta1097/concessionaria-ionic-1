angular.module('starter').controller('listaController', function ($scope, CarroService) {

    CarroService.obterCarros().then(function(dados){
        $scope.listaCarros = dados;
    });

});

angular.module('starter').controller('detalhesController', function ($stateParams, $scope) {

    $scope.carro = angular.fromJson($stateParams.carro);

    $scope.listaAcessorios = [
        {"nome": "Freio ABS", "preco": 800},
        {"nome": "Ar Condicionado", "preco": 1000},
        {"nome": "MP3 Player", "preco": 500}
    ];

    $scope.click = (acessorio, IsChecked) => {

        if(IsChecked){
            $scope.carro.preco += acessorio.preco;
        }else{
            $scope.carro.preco -= acessorio.preco;
        }

    }

});

angular.module('starter').controller('finalizarController', function ($stateParams, $scope, $ionicPopup, $state, CarroService) {

    $scope.carro = angular.fromJson($stateParams.carro);

    $scope.cliente = {}; 

    $scope.finalizarPedido = function(){

         var pedido = {
             params: {
                 carro: $scope.carro.nome,
                 preco: $scope.carro.preco,
                 nome: $scope.cliente.nome,
                 endereco: $scope.cliente.endereco,
                 email: $scope.cliente.email
             }
         }

        CarroService.salvarPedido(pedido).then(function(dados){

            $ionicPopup.alert({
                title: 'Parabéns',
                template: 'Você acaba de comprar um carro.'
            }).then(function(){
                $state.go('listagem');
            });

        }, function(erro){
            $ionicPopup.alert({
                title: 'Deu erro',
                template: 'Campos obrigatórios!'
            });
        });
    }

});