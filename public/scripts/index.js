const boton = document.getElementById("boton1");
const user = document.getElementById("user");
const password = document.getElementById("password");

const login = () => {
  if (user.value === "berny" && password.value === "1234") {
    sessionStorage.setItem("name", user.value); // <- Primero guarda el nombre
    window.location.href = "../pages/perfil.html"; // <- Luego redirige
    return;
  } else {
    alert("Las credenciales están mal, por favor verifica");
    return;
  }
};

boton.addEventListener("click", login);
