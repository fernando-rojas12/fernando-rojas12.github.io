function mostrar_estrella(div_imagen) {
    var x = document.getElementById(div_imagen);
    if (x.style.visibility === 'hidden') {
        x.style.visibility = 'visible';
    } else {
        x.style.visibility = 'hidden';
    }
}


window.onload = function esconder_imagen() {
    var y = document.getElementById('imagen');
    y.style.visibility = 'hidden';
    var y = document.getElementById('imagen1');
    y.style.visibility = 'hidden';
    var y = document.getElementById('imagen2');
    y.style.visibility = 'hidden';
    var y = document.getElementById('imagen3');
    y.style.visibility = 'hidden';
    var y = document.getElementById('imagen4');
    y.style.visibility = 'hidden';
    var y = document.getElementById('imagen5');
    y.style.visibility = 'hidden';
    var y = document.getElementById('imagen6');
    y.style.visibility = 'hidden';
    var y = document.getElementById('imagen7');
    y.style.visibility = 'hidden';
    var y = document.getElementById('imagen8');
    y.style.visibility = 'hidden';
    var y = document.getElementById('imagen9');
    y.style.visibility = 'hidden';
}


function limpiar_imagenes() {
    var y = document.getElementById('imagen');
    y.style.visibility = 'hidden';
    var y = document.getElementById('imagen1');
    y.style.visibility = 'hidden';
    var y = document.getElementById('imagen2');
    y.style.visibility = 'hidden';
    var y = document.getElementById('imagen3');
    y.style.visibility = 'hidden';
    var y = document.getElementById('imagen4');
    y.style.visibility = 'hidden';
    var y = document.getElementById('imagen5');
    y.style.visibility = 'hidden';
    var y = document.getElementById('imagen6');
    y.style.visibility = 'hidden';
    var y = document.getElementById('imagen7');
    y.style.visibility = 'hidden';
    var y = document.getElementById('imagen8');
    y.style.visibility = 'hidden';
    var y = document.getElementById('imagen9');
    y.style.visibility = 'hidden';
}


function limpiar_cantidades() {
    document.getElementById('cantidad').value = '';
    document.getElementById('cantidad1').value = '';
    document.getElementById('cantidad2').value = '';
    document.getElementById('cantidad3').value = '';
    document.getElementById('cantidad4').value = '';
    document.getElementById('cantidad5').value = '';
    document.getElementById('cantidad6').value = '';
    document.getElementById('cantidad7').value = '';
    document.getElementById('cantidad8').value = '';
    document.getElementById('cantidad9').value = '';
}


function limpiar_estrellas() {
    limpiar_imagenes();
    limpiar_cantidades();
}


function comprobar_una_cantidad() {
    if (document.getElementById('cantidad').value === '' && document.getElementById('cantidad1').value === '' && document.getElementById('cantidad2').value === '' && document.getElementById('cantidad3').value === '' && document.getElementById('cantidad4').value === '' && document.getElementById('cantidad5').value === '' && document.getElementById('cantidad6').value === '' && document.getElementById('cantidad7').value === '' && document.getElementById('cantidad8').value === '' && document.getElementById('cantidad9').value === '') {
        var x = document.getElementById('cantidad').value;
        alert("Por favor ingrese una cantidad monetaria en una sola celda de entre todas las disponibles para convertir a la(s) divisas escogida(s)");
        return 0
    } else if (document.getElementById('cantidad').value !== '' && document.getElementById('cantidad1').value === '' && document.getElementById('cantidad2').value === '' && document.getElementById('cantidad3').value === '' && document.getElementById('cantidad4').value === '' && document.getElementById('cantidad5').value === '' && document.getElementById('cantidad6').value === '' && document.getElementById('cantidad7').value === '' && document.getElementById('cantidad8').value === '' && document.getElementById('cantidad9').value === '') {
        var x = document.getElementById('cantidad').value;
        return x;
    } else if (document.getElementById('cantidad').value === '' && document.getElementById('cantidad1').value !== '' && document.getElementById('cantidad2').value === '' && document.getElementById('cantidad3').value === '' && document.getElementById('cantidad4').value === '' && document.getElementById('cantidad5').value === '' && document.getElementById('cantidad6').value === '' && document.getElementById('cantidad7').value === '' && document.getElementById('cantidad8').value === '' && document.getElementById('cantidad9').value === '') {
        var x = document.getElementById('cantidad').value;
        return x;
    } else if (document.getElementById('cantidad').value === '' && document.getElementById('cantidad1').value === '' && document.getElementById('cantidad2').value !== '' && document.getElementById('cantidad3').value === '' && document.getElementById('cantidad4').value === '' && document.getElementById('cantidad5').value === '' && document.getElementById('cantidad6').value === '' && document.getElementById('cantidad7').value === '' && document.getElementById('cantidad8').value === '' && document.getElementById('cantidad9').value === '') {
        var x = document.getElementById('cantidad').value;
        return x;
    } else if (document.getElementById('cantidad').value === '' && document.getElementById('cantidad1').value === '' && document.getElementById('cantidad2').value === '' && document.getElementById('cantidad3').value !== '' && document.getElementById('cantidad4').value === '' && document.getElementById('cantidad5').value === '' && document.getElementById('cantidad6').value === '' && document.getElementById('cantidad7').value === '' && document.getElementById('cantidad8').value === '' && document.getElementById('cantidad9').value === '') {
        var x = document.getElementById('cantidad').value;
        return x;
    } else if (document.getElementById('cantidad').value === '' && document.getElementById('cantidad1').value === '' && document.getElementById('cantidad2').value === '' && document.getElementById('cantidad3').value === '' && document.getElementById('cantidad4').value !== '' && document.getElementById('cantidad5').value === '' && document.getElementById('cantidad6').value === '' && document.getElementById('cantidad7').value === '' && document.getElementById('cantidad8').value === '' && document.getElementById('cantidad9').value === '') {
        var x = document.getElementById('cantidad').value;
        return x;
    } else if (document.getElementById('cantidad').value === '' && document.getElementById('cantidad1').value === '' && document.getElementById('cantidad2').value === '' && document.getElementById('cantidad3').value === '' && document.getElementById('cantidad4').value === '' && document.getElementById('cantidad5').value !== '' && document.getElementById('cantidad6').value === '' && document.getElementById('cantidad7').value === '' && document.getElementById('cantidad8').value === '' && document.getElementById('cantidad9').value === '') {
        var x = document.getElementById('cantidad').value;
        return x;
    } else if (document.getElementById('cantidad').value === '' && document.getElementById('cantidad1').value === '' && document.getElementById('cantidad2').value === '' && document.getElementById('cantidad3').value === '' && document.getElementById('cantidad4').value === '' && document.getElementById('cantidad5').value === '' && document.getElementById('cantidad6').value !== '' && document.getElementById('cantidad7').value === '' && document.getElementById('cantidad8').value === '' && document.getElementById('cantidad9').value === '') {
        var x = document.getElementById('cantidad').value;
        return x;
    } else if (document.getElementById('cantidad').value === '' && document.getElementById('cantidad1').value === '' && document.getElementById('cantidad2').value === '' && document.getElementById('cantidad3').value === '' && document.getElementById('cantidad4').value === '' && document.getElementById('cantidad5').value === '' && document.getElementById('cantidad6').value === '' && document.getElementById('cantidad7').value !== '' && document.getElementById('cantidad8').value === '' && document.getElementById('cantidad9').value === '') {
        var x = document.getElementById('cantidad').value;
        return x;
    } else if (document.getElementById('cantidad').value === '' && document.getElementById('cantidad1').value === '' && document.getElementById('cantidad2').value === '' && document.getElementById('cantidad3').value === '' && document.getElementById('cantidad4').value === '' && document.getElementById('cantidad5').value === '' && document.getElementById('cantidad6').value === '' && document.getElementById('cantidad7').value === '' && document.getElementById('cantidad8').value !== '' && document.getElementById('cantidad9').value === '') {
        var x = document.getElementById('cantidad').value;
        return x;
    } else if (document.getElementById('cantidad').value === '' && document.getElementById('cantidad1').value === '' && document.getElementById('cantidad2').value === '' && document.getElementById('cantidad3').value === '' && document.getElementById('cantidad4').value === '' && document.getElementById('cantidad5').value === '' && document.getElementById('cantidad6').value === '' && document.getElementById('cantidad7').value === '' && document.getElementById('cantidad8').value === '' && document.getElementById('cantidad9').value !== '') {
        var x = document.getElementById('cantidad').value;
        return x;
    } else {
        alert("Error. Solo puede hacer una cantidad monetaria en una sola celda de entre todas las disponibles");
        return 0;
    }
}


function comprobar_paises_favoritos() {
    if (document.getElementById('imagen').style.visibility === 'hidden' && document.getElementById('imagen1').style.visibility === 'hidden' && document.getElementById('imagen2').style.visibility === 'hidden' && document.getElementById('imagen3').style.visibility === 'hidden' && document.getElementById('imagen4').style.visibility === 'hidden' && document.getElementById('imagen5').style.visibility === 'hidden' && document.getElementById('imagen6').style.visibility === 'hidden' && document.getElementById('imagen7').style.visibility === 'hidden' && document.getElementById('imagen8').style.visibility === 'hidden' && document.getElementById('imagen9').style.visibility === 'hidden') {
        alert("Por favor seleccione al menos un tipo de divisa para convertir, marcandolo con una estrella.");
        return 0
    }
}


function comprobar_favoritas() {
    var x = 0;
    var paises_favoritos = [];
    var y = document.getElementById('imagen');
    if (y.style.visibility === 'visible') {
        paises_favoritos[x] = "Estados Unidos";
        x++;
    }
    var y = document.getElementById('imagen1');
    if (y.style.visibility === 'visible') {
        paises_favoritos[x] = "Francia";
        x++;
    }
    var y = document.getElementById('imagen2');
    if (y.style.visibility === 'visible') {
        paises_favoritos[x] = "Japón";
        x++;
    }
    var y = document.getElementById('imagen3');
    if (y.style.visibility === 'visible') {
        paises_favoritos[x] = "Reino Unido";
        x++;
    }
    var y = document.getElementById('imagen4');
    if (y.style.visibility === 'visible') {
        paises_favoritos[x] = "Suiza";
        x++;
    }
    var y = document.getElementById('imagen5');
    if (y.style.visibility === 'visible') {
        paises_favoritos[x] = "Australia";
        x++;
    }
    var y = document.getElementById('imagen6');
    if (y.style.visibility === 'visible') {
        paises_favoritos[x] = "Canadá";
        x++;
    }
    var y = document.getElementById('imagen7');
    if (y.style.visibility === 'visible') {
        paises_favoritos[x] = "México";
        x++;
    }
    var y = document.getElementById('imagen8');
    if (y.style.visibility === 'visible') {
        paises_favoritos[x] = "China";
        x++;
    }
    var y = document.getElementById('imagen9');
    if (y.style.visibility === 'visible') {
        paises_favoritos[x] = "Costa Rica";
        x++;
    }
    return paises_favoritos
}


function convertidor_divisas() {
    var x = comprobar_una_cantidad();
    var v = comprobar_paises_favoritos()
    if (x === 0 || v === 0) {
        alert("Vuelva a intentarlo de nuevo");
    } else {
        var paises_favoritos = comprobar_favoritas();
        var z = "El cambio de las divisas serian de los paises:\n";
        for (var i = 0; i < paises_favoritos.length; i++) {
            z = z + " - " + paises_favoritos[i];
        }
        alert(z);
    }
}