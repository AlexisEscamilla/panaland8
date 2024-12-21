let fechaObjetivo = new Date('2024-12-21T18:00:00');

function actualizarContador() {
    const ahora = new Date();
    const diferencia = fechaObjetivo.getTime() - ahora.getTime();

    if (diferencia <= 0) {
        document.getElementById('contador').innerText = '¡La fecha ha llegado!';
        clearInterval(intervalo);
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('contador').innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

function actualizarFecha() {
    const nuevaFecha = document.getElementById('fecha').value;
    if (nuevaFecha) {
        fechaObjetivo = new Date(nuevaFecha);
        actualizarContador();
    }
}

const intervalo = setInterval(actualizarContador, 1000);
actualizarContador();
