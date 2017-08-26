/**
 * Created by Charly on 25/08/2017.
 */

function init(numf,numi) {
    var mapa= $("#mapa");
    var mapaheight=mapa.height()/numf,mapawidth = mapa.width()/numi;
    console.log(mapa.height())

    var tabla = document.getElementById("tabla")

    for(var i=0; i<numf ; i++){
        var nodeRen = document.createElement("div");
        nodeRen.className = "fila";
        nodeRen.innerHTML = "";
        for (var j = 0; j<numi ; j++){
            var node = document.createElement("div");
            node.className = "item";
            node.activo=false;
            node.cordenadas={'x':j,'y':i}
            node.id = "elem_"+(j)+"_"+(i);
            node.innerHTML = ""
            node.onclick=function () {
                this.activo
                if (this.activo){
                    console.log("desactivo");
                    //quitar(this)
                }
                else {
                    console.log("activo")
                    this.className="activo"
                    agregar(this);
                }

            };
            node.style.width = mapawidth+"px";
            node.style.height = mapaheight+"px";
            nodeRen.appendChild(node);
        }
        tabla.appendChild(nodeRen);
    }
    $("#iniciar").css({
        "background": "red",
        "border-color": "red"
    }).html("Detener App");

    var matriz = crearMatriz(numi,numf);
    return {"state":true,"mapa": matriz};
}

function agregar(e){
    console.log(e.cordenadas)
    if (nivelCarga==1){
        matriz[(e.cordenadas.y)][(e.cordenadas.x)].state=1;
        matriz[(e.cordenadas.y)][(e.cordenadas.x)].tipo=1;
        e.style.background= "url(assets/img/nave.png)";
        e.style.backgroundSize ="100% 100%";
        nivelCarga=2;
        e.activo=true;
        $( "#evento").trigger( "custom", [ "Custom", "Event" ] );
    }
    else if (nivelCarga==2){
        matriz[(e.cordenadas.y)][(e.cordenadas.x)].state=1;
        matriz[(e.cordenadas.y)][(e.cordenadas.x)].tipo=2;
        mineralesSelc++;
        e.style.background= "url(assets/img/diamante.png)";
        e.style.backgroundSize ="100% 100%";
        e.activo=true;
        if(mineralesSelc == mineralesNum){
            nivelCarga=3;
            $( "#evento").trigger( "custom", [ "Custom", "Event" ] );
        }
    }
    else if (nivelCarga==3){
        matriz[(e.cordenadas.y)][(e.cordenadas.x)].state=1;
        matriz[(e.cordenadas.y)][(e.cordenadas.x)].tipo=3;
        obstaSelc++;
        e.style.background= "url(assets/img/piedras.png)";
        e.style.backgroundSize ="100% 100%";
        e.activo=true;
        if(obstaSelc == obstaculosNum){
            nivelCarga=4;
            $( "#evento").trigger( "custom", [ "Custom", "Event" ] );
        }
    }
}
function quitar(e) {
    e.style.background= "transparent";
    e.activo=false
}

function crearMatriz(x,y) {
    var a = new Array(x);
    for (var i = 0; i < x; i++) {
        a[i] = new Array(y);
        for (var j = 0; j < y; j++) {
            a[i][j] = {'state':0,'tipo':0};
        }
    }
    console.log(a)
    return a;
}