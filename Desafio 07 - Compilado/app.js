function calcularImc(peso, altura) {
    let imc = peso / (altura**2);
}

function calcularFatoriral(numero) {
    let a = 1;
    while(numero > 1) {
        a = numero * a;
        numero--;
    }
    return a;
}
let fatorial = calcularFatoriral(5);
console.log(`Fatorial é ${fatorial}`);

function DolarParaReal(dolar) {
    return dolar * 4.8;
}

function mostrarAreaEPerimetro(altura, largura) {
    let area;
    area = altura * largura;
    let perimetro = altura * 2 + largura * 2;
    texto = document.querySelector('h2');
    texto.innerHTML = `àrea = ${area} e perímetro = ${perimetro}`;
}

function salaCircularMedidas(raio) {
    let p = 3.14;
    let area;
    area = p * (raio**2);
    let perimetro;
    perimetro = 2 * p * raio;
    texto = document.querySelector('h2');
    texto.innerHTML = `Área circular = ${area} e Perímetro = ${perimetro}`;
}

salaCircularMedidas(2);