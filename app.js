

const container = document.querySelector('.container');

// const buscarPokemon = fetch('https://pokeapi.co/api/v2/pokemon/1')

// buscarPokemon.then( respuesta => {
//   respuesta.json().then( data =>
//     container.innerHTML = `<h1>${data.name}</h1>`
//   )
// })

// const user = fetch('https://randomuser.me/api/')
// user.then( resp => resp.json().then( ({ results }) => {
//   console.log(results[0].name.first)
// }))

const getUser = async () => {
  const resp = await fetch('https://randomuser.me/api/');
  const data = await resp.json();
  const usuario = data.results[0];

  console.log(usuario)

  container.innerHTML = `
    <img src="${ usuario.picture.large }" width="200">
    <h1>${usuario.name.first} ${usuario.name.last}</h1>

  `


}

getUser()