
var imc = 0;

var form = document.querySelector(".formulario");

var peso = document.querySelector("#peso");

var altura = document.querySelector("#altura");

var resultado = document.querySelector(".resultado");

var diagnostico = document.querySelector(".diagnostico");

function diagnosticos (imc){
    if (imc > 0 && imc <= 18.50){
        diagnostico.textContent="Magreza";
    }
    else if (imc > 18.50 && imc <= 24.90){
        diagnostico.textContent= "Normal";
    }
    else if (imc > 24.90 && imc <= 30){
        diagnostico.textContent="Sobrepeso";
    }
    else {
      diagnostico.textContent= "Obesidade";
    }
}

function calculaImc(){
    imc = peso.value / (altura.value * altura.value);
    resultado.textContent = imc.toFixed(2);
}

function valida(){
    if (peso.value > 0 && peso.value < 270 && altura.value > 0 && altura.value < 3.0){
       calculaImc();
       diagnosticos(imc.toFixed(2));
    }else{
        alert("Peso ou altura invalida, tente outra vez!")
    }
}

form.addEventListener('submit', function(e) {
     e.preventDefault();
     valida();
});


