$(document).ready(function() {
    $(this).ajaxStart(function() {
        $("#carregando").removeClass("d-none")
        $("#carregando").addClass("d-block")
            /* Tratamento de Erro */
        $("#divErro").slideUp("slow").removeClass("d-block").addClass("d-none").text("")
            /* divErro.innerHTML = ""; */
    })
    $(this).ajaxStop(function() {
            $("#carregando").removeClass("d-block")
            $("#carregando").addClass("d-none")
        })
        /*  $(this).ajaxError(function(){
             $("#carregando").removeClass("d-block")
             $("#carregando").addClass("d-none")
         }) */

    $(document).ajaxError(function(event, request, settings) {
        /* console.log(`Não consigo encontrar a pagina ${settings.url} para requisição.`) */
        $("#divErro").text(`Por favor, forneça um url válido.`).removeClass("d-none").slideDown("3000").delay("3000").slideUp("3000")
    })

})