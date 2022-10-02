// Calculadora LTL

// Datos Caja
var largoCaja = prompt("Largo caja:");
var altoCaja = prompt("Alto caja:");
var anchoCaja = prompt("Ancho caja:");
var pesoCaja = prompt("Peso caja:");
var cantidadCaja = prompt("Cantidad de caja:");


// Medidas y peso maximo tarima
var largoTarima = 1200;
var altoTarima = 1800;
var anchoTarima = 1000;
var pesoMaximo = 2000;

// Calculo tarima
var cajasLT = largoTarima / largoCaja;
var cajasLargo = Math.trunc(cajasLT);
console.log("Cajas a lo largo: " + cajasLargo);

var cajasAT = altoTarima / altoCaja;
var cajasAlto = Math.trunc(cajasAT);
console.log("Cajas a lo alto: " + cajasAlto);

var cajasAnT = anchoTarima / anchoCaja;
var cajasAncho = Math.trunc(cajasAnT);
console.log("Cajas a lo ancho: " + cajasAncho);

var cajasPiso = cajasLargo * cajasAncho;
console.log("Cajas por piso: " + cajasPiso);

var cajasPT = cajasPiso * cajasAlto;
console.log("Cajas por tarima: " + cajasPT);

// Peso volumetrico caja
function pesoVolumetrico() {
 console.log(
  "El peso volumetrico de esta caja es: " +
   (largoCaja * altoCaja * anchoCaja) / 50000
 );
}
pesoVolumetrico();

var pesoTarima = pesoCaja * cajasPT;
console.log("El peso de la tarima es de: " + pesoTarima);

var tarimasTotal = cantidadCaja / cajasPT;
console.log("En total necesutas: " + tarimasTotal + " tarima");

// Resultfo volumetrico medidas por tarima
var largoT = cajasLargo * largoCaja;
var altoT = cajasAlto * altoCaja;
var anchoT = cajasAncho * anchoCaja;

// Caja
var caja = {
 largo: largoCaja,
 alto: altoCaja,
 ancho: anchoCaja,
 peso: pesoCaja,
};
console.log(caja);

// tarima
var tarima = {
 largo: largoT,
 alto: altoT,
 ancho: anchoT,
 peso: pesoTarima,
};
console.log(tarima);

// prueba git