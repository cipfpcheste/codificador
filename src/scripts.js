

function recogerDatos() {
    let ArrayRegistro = [];

    let select = document.getElementById("cursoFamilia");
    let valorSeleccionado = select.value;
    let indiceSeleccionado = select.selectedIndex;

    if (ArrayRegistro.indexOf(valorSeleccionado) === -1) {
        // el valor seleccionado no está en el array, lo agregamos
        ArrayRegistro.push(valorSeleccionado);
        console.log(`Se ha agregado la opción ${valorSeleccionado} al array.`);
    } else {
        // el valor seleccionado ya está en el array, lo reemplazamos
        ArrayRegistro.splice(indiceSeleccionado - 1, 1, valorSeleccionado);
        console.log(`Se ha reemplazado la opción ${valorSeleccionado} en el array.`);
    }

    select = document.getElementById("familiaF");
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

    select = document.getElementById("familiaCF");
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

    select = document.getElementById("familiaMod");
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
    } else {
        // el valor seleccionado ya está en el array, lo reemplazamos
        ArrayRegistro.splice(indiceSeleccionado - 1, 1, valorSeleccionado);
        console.log(`Se ha reemplazado la opción ${valorSeleccionado} en el array de cursos.`);
    }
    console.log(ArrayRegistro);
    generarCodigo(ArrayRegistro);
}

function generarCodigo(ArrayRegistro) {

    for (var i = 0; i < ArrayRegistro.length; i++) {
    console.log(ArrayRegistro[i]);
    }
    var codigo = ArrayRegistro.join("_");
    
    document.getElementById('input1').value = codigo;
    console.log(codigo);
}




