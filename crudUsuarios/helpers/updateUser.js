document.addEventListener('DOMContentLoaded', function() {
    // Obtener el objeto user almacenado en el localStorage
    let user = JSON.parse(localStorage.getItem('user'));
    
    // Verificar si el objeto user existe y contiene los valores correspondientes
    if (user) {
      // Asignar los valores del objeto user a los campos de entrada
      document.getElementById('name').placeholder = user.name || '';
      document.getElementById('email').placeholder = user.email || '';
      document.getElementById('direction').placeholder = user.direction || '';
    }

//===============
    // Obtener los campos de entrada
    const nombreInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const direccionInput = document.getElementById('direction');
    const passwordInput = document.getElementById('password');
    
    
    // Obtener el botón
    const guardarButton = document.getElementById('btnUpdate');
    
    // Obtener los datos actuales del localStorage
    user = JSON.parse(localStorage.getItem('user')) || {};
    
    // Agregar evento de click al botón para actualizar el localStorage
    guardarButton.addEventListener('click', function() {
        user.name = nombreInput.value;
        user.email = emailInput.value;
        user.direction = direccionInput.value;
        user.password = passwordInput.value;
        user.confirm__password = passwordInput.value;
        actualizarLocalStorage();
      });
    
      // Función para actualizar el localStorage con los nuevos datos
    function actualizarLocalStorage() {
        localStorage.setItem('user', JSON.stringify(user));
      }

    });

