var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var c = 300
var yi, xf, xi, yf;

dibujarLinea("black", 1, 1, 1, 299);
dibujarLinea("black", 1, 299, 299, 299);
dibujarLinea("black", 299, 1, 299, 299);
dibujarLinea("black", 1, 1, 299, 1);

while(l < lineas)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea("#AAF", 0, yi, xf, 300);
    xi = 10 * l;
    yf = 10 * (l + 1);
    dibujarLinea("#AAF", xi, 0, 300, yf);
    l++;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo (xinicial, yinicial);
	lienzo.lineTo (xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}