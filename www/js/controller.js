angular.module('starter').controller('listaController', function ($scope) {

    $scope.listaCarros = [
        {"modelo": "Golf 2.0", "preco": 100000},
        {"modelo": "Celta 1.4", "preco": 25000},
        {"modelo": "Azera 2.0", "preco": 120000},
        {"modelo": "Hilux 3.0", "preco": 135000},
        {"modelo": "Fusion 2.4", "preco": 145000},
        {"modelo": "Onix 1.6", "preco": 4500},
        {"modelo": "Sandeiro 1.8", "preco": 38000},
        {"modelo": "Civic 2.0", "preco": 99000},
        {"modelo": "Corolla 1.8", "preco": 105000}
    ];

})

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

})