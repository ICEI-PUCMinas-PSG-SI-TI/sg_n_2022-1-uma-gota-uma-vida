$(document).ready(function(){
    let logado = JSON.parse(localStorage.getItem('logado'));  

    
    $("#sairSessao").click(function(){
        localStorage.removeItem('logado');
        window.location.reload();

    })

    $("#cadastrarNoSite").click(function(){
        window.location.href = "./index.html";
    })

    $("#cadastrarRelato").click(function(){
        window.location.href = "./formulario.html";
    })

    if(logado==null) {  
        debugger
        $("#nomeLogadoPessoa").hide();
        $("#cadastrarNoSite").show();

    }else{
        users = JSON.parse(localStorage.getItem('usuarios'))[logado.id];
        $("#nomeLogadoPessoa").text(users.nome);
        $("#nomeLogadoPessoa").show();
        $("#cadastrarNoSite").hide();


        // if($)
    }
    var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl)});


})
