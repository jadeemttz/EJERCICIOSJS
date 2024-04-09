document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        var precioInput = document.getElementById('inp');
        var precio = parseFloat(precioInput.value);

        // Validar si el precio ingresado es un número positivo
        if (isNaN(precio) || precio <= 0) {
            alert("Por favor, ingrese un número positivo para el precio.");
            precioInput.focus(); // Coloca el foco en el campo de precio
            return;
        }

        // Calcular el precio con descuento
        var descuento = 0.15;
        var total = precio - (precio * descuento);

        // Mostrar el resultado
        document.getElementById('resultado').innerText = "El precio con el descuento incluido es de $" + total.toFixed(2);
    });
});