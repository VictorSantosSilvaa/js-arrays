const container = document.getElementById("container");

var array = [1, 2, 3, 4, 5];

var myCard = `
<div id="card">
<div>
    <img src="/img/nike.jpg" alt="" id="nike">
</div>
<h1 id="titulo-nike">Nike</h1>
<p>
    Melhor tênis e a melhor marca do mundo.
</p>

<h2 id="preco">
    $80.00
</h2>

<div>
    <img src="/img/estrela.png" alt="" class="estrela">
    <img src="/img/estrela.png" alt="" class="estrela">
    <img src="/img/estrela.png" alt="" class="estrela">
    <img src="/img/estrela.png" alt="" class="estrela">
    <img src="/img/estrela.png" alt="" class="estrela">
</div>
<h2 id="button"><b><a href="https://www.nike.com.br/tenis-nike-revolution-6-012795.html?cor=PA"
            target="_blank">COMPRE AGORA !!</a></b></h2>
</div>

`;

for (let index = 0; index < array.length; index++) {
    container.innerHTML = container.innerHTML + myCard;

}

