//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){ // Change to 9
      let div = document.createElement("div");
      div.className = "e";
      id_barra.appendChild(div);
    }
  }

//selecciono todas las barras generales para luego manipularlas
let powerbi = document.getElementById("powerbi");
crearBarra(powerbi);
let sql = document.getElementById("sql");
crearBarra(sql);
let python = document.getElementById("python");
crearBarra(python);
let microsoftoffice = document.getElementById("microsoftoffice");
crearBarra(microsoftoffice);
let ims = document.getElementById("ims");
crearBarra(ims);
let r = document.getElementById("r");
crearBarra(r);
let linux = document.getElementById("linux");
crearBarra(linux);
let javascript = document.getElementById("javascript");
crearBarra(javascript);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalPowerbi = setInterval(function(){
            pintarBarra(powerbi, 5, 0, intervalPowerbi);
        },100);
        const intervalSql = setInterval(function(){
            pintarBarra(sql, 5, 1, intervalSql);
        },100);
        const intervalPython = setInterval(function(){
            pintarBarra(python, 5, 2, intervalPython);
        },100);
        const intervalMicrosoftoffice = setInterval(function(){
            pintarBarra(microsoftoffice, 5, 3, intervalMicrosoftoffice);
        },100);
        const intervalIms = setInterval(function(){
            pintarBarra(ims, 5, 4, intervalIms);
        },100);
        const intervalR = setInterval(function(){
            pintarBarra(r, 5, 5, intervalR);
        },100);
        const intervalLinux = setInterval(function(){
            pintarBarra(linux, 5, 6, intervalLinux);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 5, 7, intervalJavascript);
        },100)
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){ // Change to 10
      let elementos = id_barra.getElementsByClassName("e");
      elementos[x].style.backgroundColor = "#940253";
    }else{
      clearInterval(interval)
    }
  }

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onload = function(){
    crearBarra(powerbi);
    crearBarra(sql);
    crearBarra(python);
    crearBarra(microsoftoffice);
    crearBarra(ims);
    crearBarra(r);
    crearBarra(linux);
    crearBarra(javascript);
  
    // Fill initial sections based on proficiency
    pintarBarra(powerbi, 7, 0, null); // Fill 7 sections for Power BI (70%)
    // Similarly, fill initial sections for other skills
  }

var bar = new ProgressBar.Line(container, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
  });
  
  bar.animate(1.0);  // Number from 0.0 to 1.0
