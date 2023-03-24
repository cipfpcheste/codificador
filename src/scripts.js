function recogerDatos(){

    let ArrayRegistro = [];
    ArrayRegistro.push(document.getElementById('cursoFamilia').value);
    console.log(ArrayRegistro);

    ArrayRegistro.push(document.getElementById('familiaF').value);
    console.log(ArrayRegistro);

    ArrayRegistro.push(document.getElementById('familiaCF').value);
    console.log(ArrayRegistro);

    ArrayRegistro.push(document.getElementById('familiaMod').value);
    console.log(ArrayRegistro);

    ArrayRegistro.push(document.getElementById('profEv').value);
    console.log(ArrayRegistro);

    ArrayRegistro.push(document.getElementById('profRe').value);
    console.log(ArrayRegistro);
    
    const PalArray = ArrayRegistro;
    const SplitString = PalArray.split();

    console.log(SplitString);
    
    //console.log(ArrayRegistro.toString())

        
}

function generarCodigo(){


}

