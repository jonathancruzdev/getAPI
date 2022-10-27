const btn = document.querySelector('button');
const contenedor = document.querySelector('#app');
const servidor = 'https://reqres.in/api/'

btn.addEventListener('click', function(){
    console.log('Se hizo click en el boton');
    const endPoint = servidor+ 'users';

    fetch( endPoint )
    .then( respuesta => {
        return respuesta.json();
    })
    .then( respuestaJSON => {
        console.log(respuestaJSON.data);
        let datos = respuestaJSON.data;
        renderizar(datos);
    })

})


function renderizar(lista){
    console.log(lista)
    let html = '';
    lista.forEach(user => {
        html += `<div class="card">
                    <h4>${user.first_name}</h4>
                    <p>${user.email}</p>
                    <img src="${user.avatar}" alt="${user.first_name}">
                    <a href="detalles.html?id=${user.id}">Ver detalles</a>
                </div>`;
    });

    contenedor.innerHTML = html;
}