/**
 *
 * Created by Charly on 25/08/2017.
 */


var numFilas = document.getElementById("Fil");
var numCol = document.getElementById("Col");
var mineralesNum = document.getElementById("minerales");
mineralesNum=mineralesNum.value;
var obstaculosNum = document.getElementById("minerales");
obstaculosNum=obstaculosNum.value;
var mineralesSelc = 0;
var obstaSelc = 0;
var id = "#elem_%x_%y";
var initState = false;
var state = false;
var matriz;
var nivelCarga=0
var event = $("#evento")


$("#iniciar").on('click',function (e) {
    if (!initState){
        if(numCol.value > 0 && numFilas.value > 0) {
            var initd = init(numFilas.value, numCol.value);
            initState=initd.state;
            matriz= initd.mapa;
            setTimeout(App, 0);
            state=true;
        }
        else
            alert("Valores no Validos")
    }
    else if (state){
        window.location = window.location.href;
    }



});


function App() {
    swal("Bien, Comencemos", "Selecciona la posicion de la Nave Nodrisa");
    nivelCarga=1
    $( "#evento" ).on( "custom", function( event, param1, param2 ) {
        if (nivelCarga==2){
            swal("Ubica los Diamanetes", "Selecciona la posicion de los "+mineralesNum.value +" minerales");
        }
        if (nivelCarga==3){
            swal("Ubica los Obstaculos", "Selecciona la posicion de los "+mineralesNum.value +" obstaculos");
        }
        if (nivelCarga==4){
            swal({
                title: "Todo Listo, Comenzamos",
                text: "Espera el resultado optimo.",
                imageUrl: "assets/img/thumbs-up.jpg",
                },
                function(){
                    Concurrent.Thread.create(moverActivo, 1,1)
                    Concurrent.Thread.create(moverActivo, 3,1)
                    Concurrent.Thread.create(moverActivo, 5,1)
                    Concurrent.Thread.create(moverNave, 7,1)
                    Concurrent.Thread.create(moverNave, 9,1)
                }
            );


        }
    });









}







