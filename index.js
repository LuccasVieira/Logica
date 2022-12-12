console.log("Hello world");
console.log(2+3);
console.log(2*3);

let nome = "Luccas Vieira"; 
const dataNascimento = "21/02/1991"

document.write('<h1 class="bem-vindo">Bem-vindo '+nome+'</h1>');
document.write(`<h2>Nascido em: ${dataNascimento}`)
document.getElementsByTagName("h1")[0].style.color = "red";
document.write(nome);
document.write("<br>");
nome = "Fábio";
document.write(nome);
document.write(dataNascimento);