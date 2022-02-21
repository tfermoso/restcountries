var datos = [];
var paises = [];
var paisesSeleccionados = [];

window.onload = () => {

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
        buscarPaises(10);
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

}