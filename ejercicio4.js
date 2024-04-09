document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        var cal1Input = document.getElementById('cal1');
        var cal1 = parseFloat(cal1Input.value);

        var cal2Input = document.getElementById('cal2');
        var cal2 = parseFloat(cal2Input.value);

        var cal3Input = document.getElementById('cal3');
        var cal3 = parseFloat(cal3Input.value);

        var examenInput = document.getElementById('examen');
        var examenFinal = parseFloat(examenInput.value);

        var trabajoInput = document.getElementById('trabajo');
        var trabajoFinal = parseFloat(trabajoInput.value);

        // Validar si los valores ingresados son números positivos y no exceden el máximo de 10
        if (isNaN(cal1) || cal1 < 0 || cal1 > 10 ||
            isNaN(cal2) || cal2 < 0 || cal2 > 10 ||
            isNaN(cal3) || cal3 < 0 || cal3 > 10 ||
            isNaN(examenFinal) || examenFinal < 0 || examenFinal > 10 ||
            isNaN(trabajoFinal) || trabajoFinal <0 || trabajoFinal > 10) {
            alert("Por favor, ingrese números positivos menores o iguales a 10 para todos los campos.");
            return;
        }

        // Calcular la calificación final
        var promedioParciales = (cal1 + cal2 + cal3) / 3;
        var calificacionFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);

        // Mostrar el resultado
        document.getElementById('resultado').innerText = "La calificación final del alumno es " + calificacionFinal.toFixed(2);
    });
});

