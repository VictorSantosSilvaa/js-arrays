//Criei uma array
var nomes = new Array();
//coloquei um elemento no inicio
nomes[0] = "Bruce";
//add mais elementos
nomes.push(1977)
nomes.push(1978)
nomes.push(1979)
nomes.push(1980)

var nomesAll = ["Rafael","Luciano","Calleri","W.Rato","Gallopo",];
//Organiza Caracteres de forma crescente
console.log(nomesAll.sort());
document.write(nomesAll);

for (let index = 0; index < nomesAll.length; index++) {
    const element = nomesAll[index];
    console.log(element);
}

nomesAll.forEach(element =>{
    console.log(element);
})

const container = document.getElementById("container");

titulo.innerText = "Juca Bala";

container.innerHTML = `"<h3 class='cor' >Deu Certo.</h3>"`;

console.log(titulo);