
const functionPredeterminada = () => { 
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        let valorPorHora = parseFloat(document.getElementById("valorPorHora").value);
        let interfazHoras = parseInt(document.getElementById("interfazHoras").value);
        let bdHoras = parseInt(document.getElementById("bdHoras").value);
        let backendHoras = parseInt(document.getElementById("backendHoras").value);
        let integracionHoras = parseInt(document.getElementById("integracionHoras").value);
        let adicionalHoras = parseInt(document.getElementById("adicionalHoras").value);
        let testHoras = parseInt(document.getElementById("testHoras").value);

        let total = (interfazHoras + bdHoras + backendHoras + integracionHoras + adicionalHoras + testHoras) * valorPorHora;

        document.getElementById("valorTotal").value = total;
    })
};

functionPredeterminada();