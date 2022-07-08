const campoFiltro =  $(".search-field");


campoFiltro.on("input", function(){
    var cursos = document.querySelectorAll(".curso-row a");

    if (this.value.length > 0){
        for (var i = 0; i < cursos.length; i++){
            var curso = cursos[i];
            var hNome = curso.querySelector("h5");
            var nome = hNome.textContent;
            var expressao = new RegExp(this.value, "i");
           
            if (!expressao.test(nome)){
               $(curso).fadeOut();
            } else{
                $(curso).fadeIn();
            }
        }
    } else{
        for(var i = 0; i < cursos.length; i++){
            var curso = cursos[i];
           $(curso).fadeIn(); 
        }

    }

});