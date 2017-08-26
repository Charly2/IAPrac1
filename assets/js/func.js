/**
 * Created by Charly on 25/08/2017.
 */
function moverActivo(xx,yyy) {
    for(var y=1; y<=numFilas.value;y++){
        var a = id.replace("%x",xx).replace("%y",y);
        $(a).css({
            "background": "#1ABB9C "
        });
        Concurrent.Thread.sleep(1000);
        $(a).css({
            "background": "transparent"
        });
    }
}


function moverNave(xx,yyy) {
    for(var y=1; y<=numFilas.value;y++){
        var a = id.replace("%x",xx).replace("%y",y);
        $(a).css({
            "background": "url(assets/img/agente.png)",
            "background-size":"100% 100%"
        });
        Concurrent.Thread.sleep(1000);
        $(a).css({
            "background": "transparent"
        });
    }
}