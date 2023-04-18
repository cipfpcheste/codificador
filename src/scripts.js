

function recogerDatos() {
    let ArrayRegistro = [];
    let ArrayRegistroTutor = [];
    let ArrayRegistroJefe = [];


    let select = document.getElementById("cursoFamilia");
    let valorSeleccionado = select.value;
    let indiceSeleccionado = select.selectedIndex;

    if (ArrayRegistro.indexOf(valorSeleccionado) === -1) {
        // el valor seleccionado no está en el array, lo agregamos
        ArrayRegistro.push(valorSeleccionado);
        ArrayRegistroTutor.push(valorSeleccionado);
        ArrayRegistroJefe.push(valorSeleccionado);

        console.log(`Se ha agregado la opción ${valorSeleccionado} al array.`);
    }

    select = document.getElementById("familiaF");
    valorSeleccionado = select.value;
    indiceSeleccionado = select.selectedIndex;

    if (ArrayRegistro.indexOf(valorSeleccionado) === -1) {
        // el valor seleccionado no está en el array, lo agregamos
        ArrayRegistro.push(valorSeleccionado);
        ArrayRegistroTutor.push(valorSeleccionado);
        ArrayRegistroJefe.push(valorSeleccionado);
        console.log(`Se ha agregado la opción ${valorSeleccionado} al array de cursos.`);
    }

    select = document.getElementById("familiaCF");
    valorSeleccionado = select.value;
    indiceSeleccionado = select.selectedIndex;

    if (ArrayRegistro.indexOf(valorSeleccionado) === -1) {
        // el valor seleccionado no está en el array, lo agregamos
        ArrayRegistro.push(valorSeleccionado);
        ArrayRegistroTutor.push(valorSeleccionado);
        ArrayRegistroJefe.push(valorSeleccionado);
        console.log(`Se ha agregado la opción ${valorSeleccionado} al array de cursos.`);
    }

    select = document.getElementById("familiaMod");
    valorSeleccionado = select.value;
    indiceSeleccionado = select.selectedIndex;

    if (ArrayRegistro.indexOf(valorSeleccionado) === -1) {
        // el valor seleccionado no está en el array, lo agregamos
        ArrayRegistro.push(valorSeleccionado);
        ArrayRegistroTutor.push(valorSeleccionado);
        ArrayRegistroJefe.push(valorSeleccionado);
        console.log(`Se ha agregado la opción ${valorSeleccionado} al array de cursos.`);
    }

    select = document.getElementById("profEv");
    valorSeleccionado = select.value;
    indiceSeleccionado = select.selectedIndex;

    if (ArrayRegistro.indexOf(valorSeleccionado) === -1) {
        // el valor seleccionado no está en el array, lo agregamos
        ArrayRegistro.push(valorSeleccionado);
        console.log(`Se ha agregado la opción ${valorSeleccionado} al array de cursos.`);
    } else {
        // el valor seleccionado ya está en el array, lo reemplazamos
        ArrayRegistro.splice(indiceSeleccionado - 1, 1, valorSeleccionado);
        console.log(`Se ha reemplazado la opción ${valorSeleccionado} en el array de cursos.`);
    }

    select = document.getElementById("profRe");
    valorSeleccionado = select.value;
    indiceSeleccionado = select.selectedIndex;

    if (ArrayRegistro.indexOf(valorSeleccionado) === -1) {
        // el valor seleccionado no está en el array, lo agregamos
        ArrayRegistro.push(valorSeleccionado);
        console.log(`Se ha agregado la opción ${valorSeleccionado} al array de cursos.`);
    }

    select = document.getElementById("tutEv");
    valorSeleccionado = select.value;
    indiceSeleccionado = select.selectedIndex;

    if (ArrayRegistroTutor.indexOf(valorSeleccionado) === -1) {
        // el valor seleccionado no está en el array, lo agregamos
        ArrayRegistroTutor.push(valorSeleccionado);
        console.log(`Se ha agregado la opción ${valorSeleccionado} al array de cursos.`);
    }

    select = document.getElementById("tutAc");
    valorSeleccionado = select.value;
    indiceSeleccionado = select.selectedIndex;

    if (ArrayRegistroTutor.indexOf(valorSeleccionado) === -1) {
        // el valor seleccionado no está en el array, lo agregamos
        ArrayRegistroTutor.push(valorSeleccionado);
        console.log(`Se ha agregado la opción ${valorSeleccionado} al array de cursos.`);
    }
    select = document.getElementById("jefCal");
    valorSeleccionado = select.value;
    indiceSeleccionado = select.selectedIndex;

    if (ArrayRegistroJefe.indexOf(valorSeleccionado) === -1) {
        // el valor seleccionado no está en el array, lo agregamos
        ArrayRegistroJefe.push(valorSeleccionado);
        console.log(`Se ha agregado la opción ${valorSeleccionado} al array de cursos.`);
    }


    generarCodigo(ArrayRegistro);
    generarCodigoTutor(ArrayRegistroTutor);
    generarCodigoJefe(ArrayRegistroJefe);
    console.log(ArrayRegistroTutor);
    console.log(ArrayRegistro);
    console.log(ArrayRegistroJefe);
}

function generarCodigo(ArrayRegistro) {

    for (var i = 0; i < ArrayRegistro.length; i++) {
        console.log(ArrayRegistro[i]);
    }
    var codigo = ArrayRegistro.join("_");

    document.getElementById('input1').value = codigo;
    console.log(codigo);
}

function generarCodigoTutor(ArrayRegistroTutor) {

    for (var i = 0; i < ArrayRegistroTutor.length; i++) {
        console.log(ArrayRegistroTutor[i]);
    }
    var codigo = ArrayRegistroTutor.join("_");

    document.getElementById('input2').value = codigo;
    console.log(codigo);
}
function generarCodigoJefe(ArrayRegistroJefe) {

    for (var i = 0; i < ArrayRegistroJefe.length; i++) {
        console.log(ArrayRegistroJefe[i]);
    }
    var codigo = ArrayRegistroJefe.join("_");

    document.getElementById('input3').value = codigo;
    console.log(codigo);
}


function resetSelect() {
    // Habilitar el select temporalmente
    document.getElementById('jefCal').disabled = false;

    // Restablecer el valor predeterminado
    document.getElementById('jefCal').selectedIndex = 0;
}

function ocultarDiv() {
    const rolSeleccionado = document.getElementById("cargo").value;
    const divAocultar = document.getElementById("izquierda");
    const divAocultar2 = document.getElementById("centro");
    const divAocultar3 = document.getElementById("derecha");
    
    divAocultar.style.opacity = 1;
    divAocultar2.style.opacity = 1;
    divAocultar3.style.opacity = 1;

    divAocultar.style.pointerEvents = "auto";
    divAocultar2.style.pointerEvents = "auto";
    divAocultar3.style.pointerEvents = "auto";
        

    if (rolSeleccionado === "profesor") {
        divAocultar2.style.opacity = 0.5;
        divAocultar3.style.opacity = 0.5;
        divAocultar2.style.pointerEvents = "none";
        divAocultar3.style.pointerEvents = "none";
        
      } else if (rolSeleccionado === "tutor") {
        divAocultar.style.opacity = 0.5;
        divAocultar3.style.opacity = 0.5;
        divAocultar2.style.pointerEvents = "none";
        divAocultar3.style.pointerEvents = "none";
        
      } else if (rolSeleccionado === "jefe") {
        divAocultar.style.opacity = 0.5;
        divAocultar2.style.opacity = 0.5;
        divAocultar2.style.pointerEvents = "none";
        divAocultar3.style.pointerEvents = "none";
        
        
      }
  }






