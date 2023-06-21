$(document).ready(function(){
    $('#carrousel-imgs').slick({
        autoplay:true
    });



    $('.menu-hamburger').click(function(){
        $('nav').slideToggle(); // Quando clicar uma vez, ele irá realizar um 'slide down' e ao clicar novamente, ele verifica o status do slide e executa o 'silde up'.
    })



    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    }) // Letras são representadas por 'SSS' e números representados por '0'



    $('form').validate({
        rules:{
            name:{
                required: true
            },
            telefone:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            mensagem:{
                required: true
            },
            veiculoInteresse:{
                required: false
            }
        },
        messages:{
            name: 'Por favor, insira seu nome'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })




    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculo-interesse').val(nomeVeiculo) // Também utilizamos para incluir o valor no input

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

})
