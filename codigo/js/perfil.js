$(document).ready(function(){
    let logado = JSON.parse(localStorage.getItem('logado'));  
    let relatos = JSON.parse(localStorage.getItem('relatos'));
    let users = JSON.parse(localStorage.getItem('usuarios'));

    if(window.location.href.includes('perfil')){
        if(relatos != null){
            let htmlCarrousel = "";//$( ".innerRelatos" ).html();
            let temRelato = false;
            for(i = 0;i < relatos.length; i++ ){
                if(logado.id == relatos[i].idUsuario){
                    temRelato = true;
                    let nome = users[relatos[i].idUsuario].nome;
                    let relato = relatos[i].relato;
                    
                    htmlCarrousel +='<div class="container bg-sys-default bh-sys-card UnidadeCarrossel"> '+
                                    '<div class="row mt-2 d-flex justify-content-center align-items-center videoCarrosel" id="videoFrom">' +      
                                    '<div class="col-6">'+
                                        '<img style="border-radius: 20px;" width="560" height="315" src="img/caso_3.jpg"></img>'+
                                    '</div>'+
                                    '<div class="col-6 textCarrosel">'+
                                        '<div class="container">'+
                                        '<div class="row">   '+
                                            '<div class="col-12 h2" style="color:white">'+
                                            nome +
                                            '</div> '+
                                            '<div class="col-12 text-sys-light-a" style="margin-top: 30px;color: white;" id="sinopseFilme1" >'+
                                            '“' + relato + '”' +
                                            '</div> '+
                                            '<div class="col-12 d-flex justify-content-end" style="margin-top: 30px;" >'+
                                            '<button src="main.html" type="button" class="btn btn-sys-success m-2"><span class="fas fa-plus text-light"></span> Ajuda-me</button>'+
                                            '</div>'+
                                        '</div>'+
                                        '</div>'+
                                    '</div>'+
                                    '</div>'+
                                    '</div> ';
                }
            }
            $( ".innerRelatos" ).html(htmlCarrousel);
            if(!temRelato){
			    $(".RelatosPessoa").addClass("d-none");
            }
 
        }
        
        $('.owl-carousel').owlCarousel({
            items:1,
            loop:true,
            margin:10,
            nav:true,
            autoHeight: true,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true
            // responsive:{
            //     0:{
            //         items:1
            //     },
            //     600:{
            //         items:1
            //     },
            //     1000:{
            //         items:1
            //     }
            // }
        })
    }

    if(logado==null) {  
        window.location.href = "./main.html";
    }else{
        users = JSON.parse(localStorage.getItem('usuarios'))[logado.id];

        $("#nomeUsuario").text(users.nome.split(" ")[0]);
        $("#nome").val(users.nome);
        $("#user").val(users.user);
        $("#email").val(users.email);
        $("#celular").val(users.celular);
        $('#estado').val(users.estado);
        $('#cidade').val(users.cidade);
        $('#bairro').val(users.bairro);
        $('#rua').val(users.rua);
        if(users.tipo == "Doador"){
			$(".RelatosPessoa").addClass("d-none");

        }
    }
});

