var datos = [];
window.onload = () => {


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