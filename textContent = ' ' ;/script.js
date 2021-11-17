/* Referências
https://www.w3schools.com/jsref/prop_node_textcontent.asp
https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent

A propriedade innerText retorna apenas o texto, sem espaçamento e tags de elemento interno.

A propriedade innerHTML retorna o texto, incluindo todos os espaçamentos e tags de elemento interno.

A propriedade textContent retorna o texto com espaçamento, mas sem tags de elemento interno.
*/

function executa() {
    let t1 = document.querySelector('.text').textContent;
    let t2 = document.querySelector('.exemplo');
    t2.innerHTML = `${ t1 }`;
}