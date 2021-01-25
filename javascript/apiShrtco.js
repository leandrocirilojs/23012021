$(document).ready(function() {
    $("#buttonEncurtarISGD").click(function() {
        if (linkCompleto2.value == "" || linkCompleto2.value.length < 6) {
            /* Tratamento de Erro */
            $("#divErro").text(`Por favor, forneça um url válido.`).removeClass("d-none").slideDown("slow").delay("3000").slideUp("slow")
            console.log("Por favor, forneça um url válido.");

        } else {
            var longoURL = linkCompleto2.value;
            $.getJSON("https://is.gd/create.php?callback=?", {
                url: longoURL,
                format: "json"
            }).done(function(data) {
                if (data.shorturl == undefined) {
                    /* Tratamento de Erro */
                    $("#divErro").text(`Por favor, forneça um url válido.`).removeClass("d-none").slideDown("slow").delay("3000").slideUp("slow")
                    console.log("Por favor, forneça um url válido.")
                } else {
                    /* Limpando Div DO QrCOde */
                    $("#receberQrCodeIsGd").text("")
                    linkCurtoISGD.value = data.shorturl
                    $("#divLinkCopiarIsGd").slideDown("slow")
                    AcessarLinkEncurtadoISGD.href = data.shorturl
                        /* QR CODE Criador */
                    $("#receberQrCodeIsGd").qrcode({
                        text: data.shorturl
                    })
                }
            })
        }
    })

    $("#copiarTimiLinkISGD").click(function() {
        $("#linkCurtoISGD").select()
        document.execCommand('copy')
    })


})
