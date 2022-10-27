const btn = document.querySelector('button');
const contenedor = document.querySelector('#app');
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
    })


