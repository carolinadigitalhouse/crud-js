function onFormSubmit() {
    fetch("http:/localhost:8080/pelicula/guardar", { 
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
          body: JSON.stringify(readFormData()) // body data type must match "Content-Type" header

    }).then(function (response){
        return response.text();
    }).then(function (data){
        console.log(data);
    })
}

function readFormData() {
    var formData = {};  
    formData["titulo"] = document.getElementById("titulo").value;
    formData["categoria"] = document.getElementById("categoria").value;
    formData["rating"] = document.getElementById("rating").value;
    return formData;
}


const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(container);

fetch("http:/localhost:8080/pelicula/traerTodas")
    .then(function (response){
        return response.json();
    }).then(function (data){
        data.forEach(movie => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
      
            const h1 = document.createElement('h1');
            h1.textContent = movie.titulo;
      
            const p = document.createElement('p');
            movie.categoria = movie.categoria.substring(0, 300);
            p.textContent = `${movie.categoria}...`;
      
            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
          });
    }).catch(function(error){
        console.log("El error fue: " + error);
    })