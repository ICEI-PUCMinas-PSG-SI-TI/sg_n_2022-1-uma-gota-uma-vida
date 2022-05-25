$(document).ready(function(){
    
    $("#login").fadeOut();
    $("#login_button").click(function(){
        $("#registrar").fadeToggle(700);
        $("#login").fadeIn(3000);
    });
    $("#registrar_button").click(function(){
        $("#login").fadeToggle(700);
        $("#registrar").fadeIn(3000);
    });

        
    $(document).on("click", "input[input-send='cadastrar']", function(){
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
			$("#nome"+aux).parent().removeClass("was-validated").addClass("has-validation");
			pode = false;
		}else{
			$("#nome"+aux).parent().removeClass("has-validation").addClass("was-validated");
		}

        if(user=="" || user==null){
			$("#user"+aux).parent().removeClass("was-validated").addClass("has-validation");
			pode = false;
		}else{
			$("#user"+aux).parent().removeClass("has-validation").addClass("was-validated");
		}

        if(senha=="" || senha==null){
			$("#senha"+aux).parent().removeClass("was-validated").addClass("has-validation");
			pode = false;
		}else{
			$("#senha"+aux).parent().removeClass("has-validation").addClass("was-validated");
		}

        if(email=="" || email==null){
			$("#email"+aux).parent().removeClass("was-validated").addClass("has-validation");
			pode = false;
		}else{
			$("#email"+aux).parent().removeClass("has-validation").addClass("was-validated");
		}

        if(celular=="" || celular==null){
			$("#celular"+aux).parent().removeClass("was-validated").addClass("has-validation");
			pode = false;
		}else{
			$("#celular"+aux).parent().removeClass("has-validation").addClass("was-validated");
		}

        if(senhaConfirm=="" || senhaConfirm==null){
			$("#senhaConfirm"+aux).parent().removeClass("was-validated").addClass("has-validation");
			pode = false;
		}else{
			$("#senhaConfirm"+aux).parent().removeClass("has-validation").addClass("was-validated");
		}

        if(pode){
            if(senhaConfirm != senha){
                $("#senhaConfirm"+aux).parent().removeClass("was-validated").addClass("has-validation");
			    $("#senha"+aux).parent().removeClass("was-validated").addClass("has-validation");
            }else{
                $("#senhaConfirm"+aux).parent().removeClass("has-validation").addClass("was-validated");
			    $("#senha"+aux).parent().removeClass("has-validation").addClass("was-validated");

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
          
            }
     
        }
  });


});


/*
Usuarios{
    Pesss[]
}
}

*/
