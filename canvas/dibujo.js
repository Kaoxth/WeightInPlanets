var dibujo = document.getElementById("dibujito");
var texto = document.getElementById("textoLineas");
var boton = document.getElementById("botonE");
var lienzo = dibujo.getContext("2d");
var ancho = dibujo.width;

boton.addEventListener("click", dibujarClick);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo (xinicial, yinicial);
	lienzo.lineTo (xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujarClick()
{ 
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf, xi, yf;
    var espacio = ancho / lineas;

    dibujarLinea("black", 1, 1, 1, 299);
    dibujarLinea("black", 1, 299, 299, 299);
    dibujarLinea("black", 299, 1, 299, 299);
    dibujarLinea("black", 1, 1, 299, 1);

    while(l < lineas)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea("#AAF", 0, yi, xf, 300);
        xi = espacio * l;
        yf = espacio * (l + 1);
        dibujarLinea("#AAF", xi, 0, 300, yf);
        l++;
    }
}