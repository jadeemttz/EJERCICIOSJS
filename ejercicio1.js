document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        var capitalInput = document.getElementById('capital');
        var capital = parseFloat(capitalInput.value);

        // Validar si el capital es un número positivo
        if (isNaN(capital) || capital <= 0) {
            alert("Por favor, ingrese un número positivo para el capital.");
            capitalInput.focus(); // Coloca el foco en el campo de capital
            return;
        }

        // Calcular el interés y mostrar el resultado
        var interes = 0.02;
        var total = capital * interes;
        document.getElementById('result').innerText = "A razón de 2% mensual se ganará $" + total;
    });
});
