document.addEventListener('DOMContentLoaded', function() {
// Obtener el objeto user almacenado en el localStorage
const user = JSON.parse(localStorage.getItem('user'));

// Verificar si el objeto user existe y contiene los valores correspondientes
if (user) {
  // Asignar los valores del objeto user a los campos de entrada
  document.getElementById('name').placeholder = user.name || '';
  document.getElementById('email').placeholder = user.email || '';
  document.getElementById('direction').placeholder = user.direction || '';
}
});