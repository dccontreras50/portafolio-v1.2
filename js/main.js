AOS.init();

function nodisponible(){
    alert ("The document is not yet available");
}

function temaactivo(){
    var selector = document.getElementById("cont-colores");
    var selector2 = document.getElementById("btn-tema");
    selector.classList.toggle("active");
    selector2.classList.toggle("active");
}

// INICIO DE TEMAS
// tema claro

function bgdia(){
    var selector = document.getElementById("body");
    selector.className = '';
    selector.classList.toggle("dia");
}


// tema oscuro
function bgnoche(){
    var selector = document.getElementById("body");
    selector.className = '';
    selector.classList.toggle("noche");
}
// boton menu
function menunocheact(){
    var selector = document.getElementById("body");
    selector.classList.toggle("menuoscuroactivo")
}

// tema morado

function bgmorado(){
    var selector = document.getElementById("body");
    selector.classList.toggle("morado");
}

// tema verde

function bgverde(){
    var selector = document.getElementById("body");
    selector.classList.toggle("verde");
}

// tema rosa
function bgrosa(){
    var selector = document.getElementById("body");
    selector.classList.toggle("rosa");
}

// tema azul
function bgazul(){
    var selector = document.getElementById("body");
    selector.classList.toggle("azul");
}

// TEMAS DE PAGINA DE ANIMACIONES

// tema claro 2
function bgdia2(){
    var selector = document.getElementById("boody");
    selector.className = '';
    selector.classList.toggle("dia2");
}

// tema oscuro2
function bgnoche2(){
    var selector = document.getElementById("boody");
    selector.className = '';
    selector.classList.toggle("noche2");
}
// boton menu
function menunoche(){
    var selector = document.getElementById("boody");
    selector.classList.toggle("menuoscuroactivo")
}
// tema morado
function bgmorado2(){
    var selector = document.getElementById("boody");
    selector.classList.toggle("morado");
}

// tema verde
function bgverde2(){
    var selector = document.getElementById("boody");
    selector.classList.toggle("verde");
}

// tema rosa
function bgrosa2(){
    var selector = document.getElementById("boody");
    selector.classList.toggle("rosa");
}

// tema azul
function bgazul2(){
    var selector = document.getElementById("boody");
    selector.classList.toggle("azul");
}
// FIN DE TEMAS DE PAGINAS DE ANIMACIONES

// FIN DE TEMAS
