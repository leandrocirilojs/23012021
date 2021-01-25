$(function() {
    $("#buttonEncurtarShrtCode").click(function() {
        var fullLink = linkCompleto3.value
        if (fullLink === "" || linkCompleto3.value.length < 8) {
            /* Tratamento de Erro */
            $("#divErro").text(`Por favor, forneça um url válido.`).removeClass("d-none").slideDown("slow").delay("3000").slideUp("3000")
            console.log("Por favor, forneça um url válido.")
        } else {
            if (opcao1.checked) {

                $.getJSON(`https://api.shrtco.de/v2/shorten?url=${fullLink}`, function(data) {
                    var linkShortShrtCode = data.result.short_link
                    linkCurtoShrtCode.value = linkShortShrtCode
                    AcessarLinkEncurtadoShrtCode.href = "https://" + linkShortShrtCode
                        /* Limpando Div DO QrCOde */
                    $("#receberQrCodeShrtCode").text("")
                        /* QR CODE Criador */
                    $("#receberQrCodeShrtCode").qrcode({
                        text: `https://${linkShortShrtCode}`
                    })

                    $("#divLinkCopiarShrtCode").slideDown("slow")
                        /* console.log(data.result.short_link2)
                        console.log(data.result.short_link3) */

                })
            } else if (opcao2.checked) {
                $.getJSON(`https://api.shrtco.de/v2/shorten?url=${fullLink}`, function(data) {
                    var linkShortShrtCode = data.result.short_link2

                    linkCurtoShrtCode.value = linkShortShrtCode
                    AcessarLinkEncurtadoShrtCode.href = "https://" + linkShortShrtCode
                        /* Limpando Div DO QrCOde */
                    $("#receberQrCodeShrtCode").text("")
                        /* QR CODE Criador */
                    $("#receberQrCodeShrtCode").qrcode({
                        text: `https://${linkShortShrtCode}`
                    })

                    $("#divLinkCopiarShrtCode").slideDown("slow")
                        /* 
                         console.log(data.result.short_link2)
                         console.log(data.result.short_link3) */


                })
            } else if (opcao3.checked) {
                $.getJSON(`https://api.shrtco.de/v2/shorten?url=${fullLink}`, function(data) {
                    var linkShortShrtCode = data.result.short_link3

                    linkCurtoShrtCode.value = linkShortShrtCode
                    AcessarLinkEncurtadoShrtCode.href = "https://" + linkShortShrtCode
                        /* Limpando Div DO QrCOde */
                    $("#receberQrCodeShrtCode").text("")
                        /* QR CODE Criador */
                    $("#receberQrCodeShrtCode").qrcode({
                        text: `https://${linkShortShrtCode}`
                    })

                    $("#divLinkCopiarShrtCode").slideDown("slow")
                        /* 
                         console.log(data.result.short_link2)
                         console.log(data.result.short_link3) */


                })
            }
            $("#copiarTimiLinkShrtCode").click(function() {
                $("#linkCurtoShrtCode").select();
                document.execCommand('copy')
            })

        }
    })

})
