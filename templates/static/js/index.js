var datos = [];
var paises = [];
var paisesSeleccionados = [];

window.onload = () => {

        let mapa=document.getElementsByTagName("iframe")[0];
        let enlacesPais=mapa.contentWindow.document.getElementsByTagName("a");
        for (let i = 0; i < enlacesPais.length; i++) {
            const element = enlacesPais[i];
            element.onclick=(e)=>{
                nombrePaisSeleccionado=e.currentTarget.getAttribute("xlink:title")
                if(paises[paisesSeleccionados[0]].name.common==nombrePaisSeleccionado){
                    alert("Enhorabuena");
                    location.reload();
                }else{
                    alert("Has fallado")
                }
            }
            element.onmouseover=(e)=>{
                e.currentTarget.children[0].setAttribute("fill","blue")
            }
        }
    

    cargarPaises();


    document.getElementById("btnCargar").onclick = () => {
        let pais = document.getElementById("txt").value;
        let ajax = new XMLHttpRequest();
        let url = `https://restcountries.com/v3.1/name/${pais}`;
        ajax.open("GET", url, true);
        ajax.onload = () => {
            datos = JSON.parse(ajax.responseText);
            console.log(datos);

            let pais = `<article>
                    <h3>${datos[0].name.common}</h3>
                    <p>${datos[0].capital}</p>
                    <img src="${datos[0].flags.png}" alt="">
                </article>`
            document.getElementById("contenido").innerHTML = pais;

        }
        ajax.send(null);
    }



}


function cargarPaises() {
    let ajax = new XMLHttpRequest();
    let url = `https://restcountries.com/v3.1/all`;
    ajax.open("GET", url, true);
    ajax.onload = () => {
        paises = JSON.parse(ajax.responseText);
        buscarPaises(1);
        console.log(paisesSeleccionados)
    }
    ajax.send(null);
}

function buscarPaises(numeroPaises) {
    let numAleatorio;
    for (let i = 0; i < numeroPaises; i++) {
        do {
            numAleatorio = Math.floor(Math.random() * paises.length)
        } while (paisesSeleccionados.includes(numAleatorio));
        paisesSeleccionados.push(numAleatorio);
    }
    let url=paises[paisesSeleccionados[0]].flags.png;
    document.getElementById("imgBandera").src=url;
    document.getElementById("nombrePais").innerText=paises[paisesSeleccionados[0]].name.common;


}