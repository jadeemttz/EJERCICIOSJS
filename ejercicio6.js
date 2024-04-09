document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        var nacimientoInput = document.getElementById('nacimiento');
        var nacimiento = new Date(nacimientoInput.value);
        var hoy = new Date();
        var edad = hoy.getFullYear() - nacimiento.getFullYear();
        var mes = hoy.getMonth() - nacimiento.getMonth();

        // Validar si la fecha de nacimiento es mayor que la fecha actual
        if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
            alert("La fecha de nacimiento debe ser válida.");
            return;
        }

        // Validar si la fecha de nacimiento es válida
        if (isNaN(nacimiento.getTime())) {
            alert("Por favor, ingrese una fecha de nacimiento válida.");
            return;
        }

        // Mostrar la edad calculada
        document.getElementById('resultado').innerText = "La persona tiene " + edad + " años";
    });
});