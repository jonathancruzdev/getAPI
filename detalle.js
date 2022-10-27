const btn = document.querySelector('button');
const contenedor = document.querySelector('#app');
const titulo = document.querySelector('h1');
const servidor = 'https://reqres.in/api/'
let url = location.search;
let id = location.search.split('=')[1];


btn.addEventListener('click', ()=>{
    location.href = 'index.html';
})



    console.log('id ' + id);
    const endPoint = servidor+ 'users/' + id ;

    fetch( endPoint )
    .then( respuesta => {
        return respuesta.json();
    })
    .then( respuestaJSON => {
        console.log(respuestaJSON.data);
        let datos = respuestaJSON.data;

        renderizar(datos);
    })


function renderizar(user){
        console.log(user)
        let html = '';
        titulo.innerHTML = `${user.first_name}</strong> ${user.last_name}`;
        html += `<div class="card-2">
                        <h4><strong> ${user.first_name}</strong> ${user.last_name}</h4>
                        <img src="${user.avatar}" alt="${user.first_name}">

                        <p>${user.email}</p>
                    </div>`;
        
        contenedor.innerHTML = html;
}
