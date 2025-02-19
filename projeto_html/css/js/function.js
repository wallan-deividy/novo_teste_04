
const canvas = document.getElementById("lineGraph");
const ctx = canvas.getContext("2d");

const data = [50, 100, 80, 120, 60, 150, 90];
const spacing = 50;

// Desenhar os eixos
ctx.beginPath();
ctx.moveTo(40, 10);
ctx.lineTo(40, 250);
ctx.lineTo(380, 250);
ctx.strokeStyle = "#000";
ctx.stroke();

// Desenhar a linha do gráfico
ctx.beginPath();
ctx.moveTo(40, 250 - data[0]);

for (let i = 1; i < data.length; i++) {
    ctx.lineTo(40 + i * spacing, 250 - data[i]);
}
ctx.strokeStyle = "blue";
ctx.lineWidth = 2; // Correção do nome da propriedade
ctx.stroke();

// Desenhar os pontos
ctx.fillStyle = "red";
for (let i = 0; i < data.length; i++) {
    ctx.beginPath();
    ctx.arc(40 + i * spacing, 250 - data[i], 4, 0, Math.PI * 2);
    ctx.fill(); // Correção do método para preencher os círculos
}
