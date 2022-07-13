$(document).ready(function(){
    
    let logado = JSON.parse(localStorage.getItem('logado'));  
    let relatos = JSON.parse(localStorage.getItem('relatos'));
    let users = JSON.parse(localStorage.getItem('usuarios'));

    if(window.location.href.includes('main')){
        if(relatos != null){
            let htmlCarrousel = "";//$( ".innerRelatos" ).html();
            for(i = 0;i < relatos.length; i++ ){
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
            $( ".innerRelatos" ).html(htmlCarrousel);

            
            // Adicionar EVento caso ele clicar Play
            // $('.stop').on('click',function(){
            //     owl.trigger('stop.owl.autoplay')
            // })
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

    $('li.dropdown.mega-dropdown a').on('click', function (event) {
        $(this).parent().toggleClass('open');
    });

    
    $("#sairSessao").click(function(){
        localStorage.removeItem('logado');
        if(window.location.href.includes('main'))
            window.location.reload();
        else
            window.location.href = "./main.html";
    })

    $("#cadastrarNoSite").click(function(){
        let typePage = localStorage.getItem('auxTypePage');  
        if(typePage!=null) {  
            localStorage.removeItem('auxTypePage')
        }
        localStorage.setItem('auxTypePage',  JSON.stringify({"typePage": "registrar"})); 
        window.location.href = "./index.html";
    })
    $("#loginNoSite").click(function(){
        let typePage = localStorage.getItem('auxTypePage');  
        if(typePage!=null) {  
            localStorage.removeItem('auxTypePage')
        }
        localStorage.setItem('auxTypePage',  JSON.stringify({"typePage": "login"})); 
        window.location.href = "./index.html";
    })
    $("#cadastrarRelato").click(function(){
        window.location.href = "./formulario.html";
    })
    $("#meuPerfil").click(function(){
        window.location.href = "./perfil.html";
    })

    if(logado==null) {  
        $("#nomeLogadoPessoa").hide();
        $("#meuPerfil").hide();

        $("#loginNoSite").show();
        $("#cadastrarNoSite").show();

    }else{
        users = JSON.parse(localStorage.getItem('usuarios'))[logado.id];
        $("#nomeLogadoPessoa").text(users.nome);
        $("#nomeLogadoPessoa").show();
        $("#meuPerfil").show();
        $("#loginNoSite").hide();
        $("#cadastrarNoSite").hide();
        if(users.tipo == "Doador"){
			$(".relatoAuxDnone").addClass("d-none");

        }
    }
    var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl)});


})
