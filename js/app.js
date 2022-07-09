const input2 = document.querySelector('#searchInput');
const usersList = document.querySelector('#users');
console.log(usersList);

window.addEventListener('DOMContentLoaded', async () => {
  const data = await loadUsers();
  renderUser(data.data);//envio de la respuesta

});

//carga datos api
async function loadUsers() {
  const response = await fetch('https://fakerapi.it/api/v1/users?_quantity=100');
  return await response.json();
}

//escucha que escribe el usuario 
input2.addEventListener('keyup', (e) => {
  console.log(input2.value);
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


