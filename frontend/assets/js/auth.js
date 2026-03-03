async function login(usuario, password) {
  const respuesta = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      accion: "login",
      usuario: usuario,
      password: password,
      token: API_KEY // Si activas la validación en el script
    })
  });
  const data = await respuesta.json();
  if (data.success) {
    localStorage.setItem("userRole", data.rol);
    localStorage.setItem("userId", data.id);
    // Redirección según rol
    if (data.rol === "TIENDAS") window.location.href = "views/tienda/dashboard.html";
  }
}
