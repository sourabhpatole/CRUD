document.body.innerHTML = `<section class="user-container"></section>`;
// document.body.innerText = "<h1 >Add Name</h1>";

async function getAllUsers() {
  const data = await fetch("https://616d521e37f997001745d9a8.mockapi.io/users");
  const users = await data.json();
  const userContainer = document.querySelector(".user-container");
  users.forEach((user) => {
    userContainer.innerHTML += `
    <img class="user-img" src  = "${user.avatar}" alt = ${user.id} />
    <h1 class = "user-name">${user.name}</h1>
    `;
  });

  // console.log(users);
}
getAllUsers();
