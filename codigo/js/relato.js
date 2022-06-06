$(document).ready(function(){
    let logado = JSON.parse(localStorage.getItem('logado'));
    let users = JSON.parse(localStorage.getItem('usuarios'));

    if(logado == null){
        window.location.href = "./main.html";
    }else{
        if(users[logado.id].tipo == "Doador")
            window.location.href = "./main.html";
    }
    
    $(document).on("click", "a[input-send='enviarCadastro']", function(){
        debugger
        let mensagemRelato = $("#mensagemRelato").val();
        let fileRelato = $("#fileRelato").val();
        let pode = true;
        let logado = JSON.parse(localStorage.getItem('logado'));

        if(mensagemRelato=="" || mensagemRelato==null){
			$("#mensagemRelato").removeClass("is-valid").addClass("is-invalid");
			pode = false;
		}else{
			$("#mensagemRelato").removeClass("is-invalid").addClass("is-valid");
		}

        // if(fileRelato=="" || fileRelato==null){
		// 	$("#fileRelato").removeClass("is-valid").addClass("is-invalid");
		// 	pode = false;
		// }else{
			$("#fileRelato").removeClass("is-invalid").addClass("is-valid");
        // }

        if(pode){
            let relatos = localStorage.getItem('relatos');  
            if(relatos==null) { 
                relatos = [];  
                localStorage.setItem('relatos', JSON.stringify(relatos));  
            }
            relatos = JSON.parse(localStorage.getItem('relatos')) 
            let relato = {  "idUsuario": logado.id,
                            "relato": mensagemRelato
            }; 
            relatos.push(relato);       
            localStorage.setItem('relatos', JSON.stringify(relatos)); 
            window.location.href = "./main.html";
        
        }
     
    });

});

