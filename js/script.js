/*window.onload = function() {
    alert("Seja bem-vindo à Jornada Viagens! ✈✈");
}*/

function exibirDados(){

    let nome = document.getElementById("nome").value;
    let tel = document.getElementById("movel").value;
    let email = document.getElementById("correio").value;

    document.write("<h2>Dados Recebidos:</h2>");
    document.write("<p><strong>Nome:</strong>" + nome + "</p>");
    document.write("<p><strong>Telefone:</strong>" +tel + "</p>");
    document.write("<p><strong>E-mail:</strong>" + email + "</p>");
}