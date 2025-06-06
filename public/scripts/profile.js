window.onload = () => {
    const name = document.getElementById("name");
    if (sessionStorage.name) {
      name.innerText = "Bienvenido " + sessionStorage.name;
    } else {
      alert("No has iniciado sesión");
      window.location.href = "../index.html"; // cuidado con las rutas
    }
  };
  
  const logout = document.getElementById("logout");
  logout.addEventListener("click", () => {
    sessionStorage.clear();
    window.location.href = "../index.html"; // y aquí también, "../" porque estás en pages/
  });
  