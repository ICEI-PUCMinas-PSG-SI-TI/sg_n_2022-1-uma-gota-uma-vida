$(document).ready(function(){

    // o que a isabelle fez hoje
    $('#inputcepR').focusout(function(){

        
        var cep = $('#inputcepR').val();
        var viacep = 'https://viacep.com.br/ws/'+cep+'/json/'

        $.ajax({
            url:viacep,
            type:'get',
            dataType:'json',
            success: function(data){
                console.log(data)
                $('#inputestadoR').val(data.uf)
                $('#inputcidadeR').val(data.localidade)
                $('#inputbairroR').val(data.bairro)
                $('#inputruaR').val(data.logradouro)
                $("#inputcepR").removeClass("is-invalid").addClass("is-valid");
                $("#inputcidadeR").removeClass("is-invalid").addClass("is-valid");
                $("#inputestadoR").removeClass("is-invalid").addClass("is-valid");
                $("#inputbairroR").removeClass("is-invalid").addClass("is-valid");
                $("#inputruaR").removeClass("is-invalid").addClass("is-valid");
            },
            error:function(error){
                console.log(error)
                $("#inputcepR").removeClass("is-valid").addClass("is-invalid");
            }
        })
    });

    $('#inputcepD').focusout(function(){

        
        var cep = $('#inputcepD').val();
        var viacep = 'https://viacep.com.br/ws/'+cep+'/json/'

        $.ajax({
            url:viacep,
            type:'get',
            dataType:'json',
            success: function(data){
                console.log(data)
                $('#inputestadoD').val(data.uf)
                $('#inputcidadeD').val(data.localidade)
                $('#inputbairroD').val(data.bairro)
                $('#inputruaD').val(data.logradouro)
                $("#inputcepD").removeClass("is-invalid").addClass("is-valid");
                $("#inputcidadeD").removeClass("is-invalid").addClass("is-valid");
                $("#inputestadoD").removeClass("is-invalid").addClass("is-valid");
                $("#inputbairroD").removeClass("is-invalid").addClass("is-valid");
                $("#inputruaD").removeClass("is-invalid").addClass("is-valid");
            },
            error:function(error){
                console.log(error)
                $("#inputcepD").removeClass("is-valid").addClass("is-invalid");
            }
        })
    });
    // --------
    
    let logado = localStorage.getItem('logado');  
    let auxTypePage = JSON.parse(localStorage.getItem('auxTypePage')); 
    if(logado!=null) {  
        localStorage.removeItem('logado')
    }
    
    if(auxTypePage!=null) {  
        if(auxTypePage.typePage == "login")
            efeito("login",true);
        else
            efeito("cadastrar",true);
        localStorage.removeItem('auxTypePage')
    }else{
        if($("#typePage").val() == "login"){
            efeito("login",true);
        }else{
            efeito("cadastrar",true);
        }
    }

    $("#login_button").click(function(){
        efeito("login",true);
    });
    $("#registrar_button").click(function(){
        efeito("cadastrar",true);
    });

        
    $(document).on("click", "span[input-send='cadastrar']", function(){
        
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
        let cep = $("#cep"+aux).val();
        let celular = $("#celular"+aux).val();
        let estado = $('#inputestado'+aux).val();
        let cidade = $('#inputcidade'+aux).val();
        let bairro = $('#inputbairro'+aux).val();
        let rua = $('#inputrua'+aux).val();
        let senhaConfirm = $("#senhaConfirm"+aux).val();
        let users = JSON.parse(localStorage.getItem('usuarios'));

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
// aa
        // if(cep=="" || cep==null){
		// 	$("#inputcep").removeClass("is-valid").addClass("is-invalid");
		// 	pode = false;
		// }else{
		// 	$("#inputcep").removeClass("is-invalid").addClass("is-valid");
		// }
        if(estado=="" || estado==null){
			$("#inputestado"+aux).removeClass("is-valid").addClass("is-invalid");
			pode = false;
		}else{
			$("#inputestado"+aux).removeClass("is-invalid").addClass("is-valid");
		}
        if(cidade=="" || cidade==null){
			$("#inputcidade"+aux).removeClass("is-valid").addClass("is-invalid");
			pode = false;
		}else{
			$("#inputcidade"+aux).removeClass("is-invalid").addClass("is-valid");
		}
        if(bairro=="" || bairro==null){
			$("#inputbairro"+aux).removeClass("is-valid").addClass("is-invalid");
			pode = false;
		}else{
			$("#inputbairro"+aux).removeClass("is-invalid").addClass("is-valid");
		}
        if(rua=="" || rua==null){
			$("#inputrua"+aux).removeClass("is-valid").addClass("is-invalid");
			pode = false;
		}else{
			$("#inputrua"+aux).removeClass("is-invalid").addClass("is-valid");
		}
//aaa
        if(senhaConfirm=="" || senhaConfirm==null){
			$("#senhaConfirm"+aux).removeClass("is-valid").addClass("is-invalid");
			pode = false;
		}else{
			$("#senhaConfirm"+aux).removeClass("is-invalid").addClass("is-valid");
		}

        let achou = false;
        if(users != null){
            
            for(i = 0;i < users.length; i++ ){
                if(users[i].nome == nome){
                    achou = true;
                    pode = false;
                    $("#nome"+aux).removeClass("is-valid").addClass("is-invalid");
                }
                if(users[i].user == user){
                    pode = false;
                    achou = true;
                    $("#user"+aux).removeClass("is-valid").addClass("is-invalid");
                }
                if(achou)
                    break;
            }
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
                                "tipo": tipoUsuario,
                                "cep":cep,
                                "estado":estado,
                                "cidade":cidade,
                                "bairro":bairro,
                                "rua":rua,
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
        let users = JSON.parse(localStorage.getItem('usuarios'));

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
        let achou = false;
        let loginAux = -1;
        if(users != null){
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
        }

        if(!achou){ // Caso n??o ache o usuario
            $("#userLogin").removeClass("is-valid").addClass("is-invalid");
            $("#senhaLogin").removeClass("is-valid").addClass("is-invalid");                
        }

        if(pode){
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
