$(document).ready(function(){
    let logado = localStorage.getItem('logado');  
    if(logado!=null) {  
        localStorage.removeItem('logado')
    }

    if($("#typePage").val() == "login"){
        efeito("login",true);
    }else{
        efeito("cadastrar",true);
    }
    $("#login_button").click(function(){
        efeito("login",true);
    });
    $("#registrar_button").click(function(){
        efeito("cadastrar",true);
    });

        
    $(document).on("click", "span[input-send='cadastrar']", function(){
        debugger
        tipo = $(this).attr("input-tipo");
        if(tipo == "doador"){
            aux = "D";
            tipoUsuario= "Doador";
        }
        else{
            aux = "R";
            tipoUsuario= "Receptor";
        }
        let nome = $("#nome"+aux).val();
        let user = $("#user"+aux).val();
        let senha = $("#senha"+aux).val();
        let email = $("#email"+aux).val();
        let celular = $("#celular"+aux).val();
        let senhaConfirm = $("#senhaConfirm"+aux).val();

        let pode = true;
        if(nome=="" || nome==null){
			$("#nome"+aux).removeClass("is-valid").addClass("is-invalid");
			pode = false;
		}else{
			$("#nome"+aux).removeClass("is-invalid").addClass("is-valid");
		}

        if(user=="" || user==null){
			$("#user"+aux).removeClass("is-valid").addClass("is-invalid");
			pode = false;
		}else{
			$("#user"+aux).removeClass("is-invalid").addClass("is-valid");
		}

        if(senha=="" || senha==null){
			$("#senha"+aux).removeClass("is-valid").addClass("is-invalid");
			pode = false;
		}else{
			$("#senha"+aux).removeClass("is-invalid").addClass("is-valid");
		}

        if(email=="" || email==null){
			$("#email"+aux).removeClass("is-valid").addClass("is-invalid");
			pode = false;
		}else{
			$("#email"+aux).removeClass("is-invalid").addClass("is-valid");
		}

        if(celular=="" || celular==null){
			$("#celular"+aux).removeClass("is-valid").addClass("is-invalid");
			pode = false;
		}else{
			$("#celular"+aux).removeClass("is-invalid").addClass("is-valid");
		}

        if(senhaConfirm=="" || senhaConfirm==null){
			$("#senhaConfirm"+aux).removeClass("is-valid").addClass("is-invalid");
			pode = false;
		}else{
			$("#senhaConfirm"+aux).removeClass("is-invalid").addClass("is-valid");
		}

        if(pode){
            if(senhaConfirm != senha){
                $("#senhaConfirm"+aux).removeClass("is-valid").addClass("is-invalid");
			    $("#senha"+aux).removeClass("is-valid").addClass("is-invalid");
            }else{
                $("#senhaConfirm"+aux).removeClass("is-invalid").addClass("is-valid");
			    $("#senha"+aux).removeClass("is-invalid").addClass("is-valid");

                let usuarios = localStorage.getItem('usuarios');  
                if(usuarios==null) { 
                    usuarios = [];  
                    localStorage.setItem('usuarios', JSON.stringify(usuarios));  
                }
                usuarios = JSON.parse(localStorage.getItem('usuarios')) 
                let pessoas = { "nome": nome,
                                "user": user,
                                "senha": senha,
                                "email": email,
                                "celular": celular,
                                "tipo": tipoUsuario
                }; 
                usuarios.push(pessoas);       
                localStorage.setItem('usuarios', JSON.stringify(usuarios)); 
                efeito("login");
            }
     
        }
    });

            
    $(document).on("click", "span[input-send='login']", function(){
        let username = $("#userLogin").val();
        let senhaLogin = $("#senhaLogin").val();
        let pode = true;

        if(username=="" || username==null){
			$("#userLogin").removeClass("is-valid").addClass("is-invalid");
			pode = false;
		}else{
			$("#userLogin").removeClass("is-invalid").addClass("is-valid");
		}

        if(senhaLogin=="" || senhaLogin==null){
			$("#senhaLogin").removeClass("is-valid").addClass("is-invalid");
			pode = false;
		}else{
			$("#senhaLogin").removeClass("is-invalid").addClass("is-valid");
        }

        if(pode){
            let logado = localStorage.getItem('logado');  
            achou = false;
            loginAux = -1;
            users = JSON.parse(localStorage.getItem('usuarios'));
            for(i = 0;i < users.length; i++ ){
                if(users[i].user == username){
                    achou = true;
                    if(users[i].senha == senhaLogin){
                        loginAux = i;
                    }else{ // senha incorreta
                        $("#senhaLogin").removeClass("is-valid").addClass("is-invalid");                
                    }
                    break;
                }
            }

            if(!achou){ // Caso não ache o usuario
                $("#userLogin").removeClass("is-valid").addClass("is-invalid");
                $("#senhaLogin").removeClass("is-valid").addClass("is-invalid");                
            }

            if(loginAux != -1){ //Verificar se pode fazer login.

                let logado = localStorage.getItem('logado');  
                if(logado!=null) {  
                    localStorage.removeItem('logado')
                }
                localStorage.setItem('logado',  JSON.stringify({"id": loginAux})); 
                window.location.href = "./main.html";
            }
        }
     
    });

});

function efeito(type,fast=false) {
    if(type == "login"){
        if(fast)
            $("#registrar").hide();
        else
            $("#registrar").fadeToggle(700);
        $("#login").fadeIn(3000);
        $("#typePage").value = "login";
    }else{
        if(fast)
            $("#login").hide();
        else
            $("#login").fadeToggle(400);
        $("#registrar").fadeIn(3000);
        $("#typePage").value = "registrar";
    }
}
