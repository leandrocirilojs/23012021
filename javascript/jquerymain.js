$(document).ready(() => {
    $.ajax({
            /* Enviando a DIV component Number para o index.html */
            url: "componentNumber.html",
            success: function(o) {
                $("#receber").html(o)
            }
        }),
        $.ajax({
            /* Enviando a DIV Emojis para o index.html */
            url: "componentEmojis.html",
            success: function(o) {
                $("#recebEmo").html(o)
            }
        })

    $("#abrircampoEmo").click(() => {
            $("#recebEmo").slideToggle("slow")
        }),
        $("#abrircampo").click(() => {
            $("#menssagem, #abrircampoEmo, #iconeIniciarCnversar").slideToggle("slow"),
                $("#recebEmo").slideUp("slow")
        }), $("#resultadolink").click(() => {
            $("#linkfinal").slideToggle("slow")
        }),

        $(function() {
            $("#copiar").click(() => {
                    $("#linkfinal").slideToggle("slow"),
                        $("#linkfinal").select();
                    document.execCommand("selectAll"),
                        document.execCommand("copy")
                })
                /* Encurtador da pagina Whats */
        }), $("#copyIdShort").click(() => {
            var urlFinal = $("#linkfinal").val();
            $.getJSON("https://is.gd/create.php?callback=?", {
                    url: urlFinal,
                    format: "json"
                })
                .done(function(resultado) {
                    linkfinal.innerHTML = resultado.shorturl
                        /* ----------------------------------- Zerando QRCOde DIV -----------------------------------*/
                    $("#receberQrCOde").text("")
                        /* ----------------------------------- QRCODE API   INICIO! -----------------------------------*/
                    $("#receberQrCOde").qrcode({
                            text: resultado.shorturl
                        })
                        /* ----------------------------------- QRCODE API FIM! -----------------------------------*/
                }),
                copyIdShort.classList.remove("d-block"),
                copyIdShort.classList.add("d-none")
        }),
        copyIdShort.classList.remove("d-block"),
        copyIdShort.classList.add("d-none")



});