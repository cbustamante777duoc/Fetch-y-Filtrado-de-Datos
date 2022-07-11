const input2 = document.querySelector('#searchInput');
const usersList = document.querySelector('#users');
console.log(usersList);

let users = [];//guarda respuesta api

window.addEventListener('DOMContentLoaded', async () => {

  //cuando carga los datos desde la api
  usersList.innerHTML = '<h1>loding</h1>';

  const data = await loadUsers();
  users = data.data;
  renderUser(users);//envio de la respuesta

});


//carga datos api
async function loadUsers() {
  const response = await fetch('https://fakerapi.it/api/v1/users?_quantity=100');
  return await response.json();
}

/** 
 * 1) escucha el evento keyup
 * 2) todo a miniscula toLowerCase 
 * 3) filtra 
 */
input2.addEventListener('keyup', (e) => {
  const userFilter = users.filter(user => `${user.firstname.toLowerCase()} 
  ${user.lastname.toLowerCase()}`.includes(input2.value.toLowerCase()));
  renderUser(userFilter);
});




//crea los li que se van a mostrar
//el join quita las ,
const createUSerItem = users => users.map(user =>
  `<li class="bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer">
      ${user.id} ${user.firstname} ${user.lastname}  
    </li>`).join(' ');

//recibe datos api y los inserta en usersList
function renderUser(users) {
  const itemString = createUSerItem(users);
  usersList.innerHTML = itemString;

}


