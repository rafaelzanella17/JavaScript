/* Referências
https://www.w3schools.com/jsref/prop_node_innertext.asp
https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement/innerText

A propriedade innerText retorna apenas o texto, sem espaçamento e tags de elemento interno.
A propriedade innerHTML retorna o texto, incluindo todos os espaçamentos e tags de elemento interno.
A propriedade textContent retorna o texto com espaçamento, mas sem tags de elemento interno.
*/


function exemplo() {
    let t1 = document.querySelector('.texto1').innerText;
    let t2 = document.querySelector('.texto2');
    t2.innerHTML = `${ t1 } </br> Repare que retornou somente o texto, sem o marcação em amarelo.`;
}