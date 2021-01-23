function getLinkWA() {

    /* Campo Numero */
    var numero = document.querySelector("#number").value;
    /* Verificando se número e menor que 9 */
    if (numero.length < 9)
    /* Se for menor que 9 faça isso */
        numberErro.classList.add("text-danger");
    else {
        /* Se for maior que 9 faça isso */
        $("#receberQrCOde").empty("")
        numberErro.classList.remove("text-danger"),
            resultadolink.classList.add("d-block"),
            copiar.classList.add("d-block"),
            copyIdShort.classList.add("d-block"),
            numero = numero.replace(/\D/g, "");
        /* Verificando se numero e menor que 13*/
        if (numero.length < 13) {
            /* Caso não! Adicione 55 código do Pais  */
            numero = "55" + numero;
        }
        /* Campo de mensagem */
        var texto = document.querySelector("#menssagem").value;
        /*  codifica uma URL */
        texto - window.encodeURIComponent(texto);
        /* API do whatsapp */
        let resultado = `https://api.whatsapp.com/send?phone=${numero}&text=${texto}`;
        /* Link final codificado e pronto para usso */
        linkfinal.innerHTML = resultado;
        /* Botão iniciar conversa com o link acima */
        iniciarconversa.href = resultado;


        /* ----------------------------------- QRCODE API   INICIO! -----------------------------------*/
        var criarQrCode = function() {
            $("#receberQrCOde").qrcode({
                text: resultado
            })
        }
        criarQrCode()
            /* ----------------------------------- QRCODE API FIM! -----------------------------------*/
    }
}