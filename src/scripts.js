

const ArrayRegistro = [];
const ArrayRegistro1 = [];


function recogerDatos(){

    //while (ArrayRegistro.length > 0){
    //    ArrayRegistro.pop();
    //}
    console.log(ArrayRegistro);   
    ArrayRegistro.push(document.getElementById('cursoFamilia').value);
    
    ArrayRegistro.push(document.getElementById('familiaF').value);
   

    ArrayRegistro.push(document.getElementById('familiaCF').value);
    

    ArrayRegistro.push(document.getElementById('familiaMod').value);
   

    ArrayRegistro.push(document.getElementById('profEv').value);
    

    ArrayRegistro.push(document.getElementById('profRe').value);
    console.log(ArrayRegistro);   
    
   
}

function generarCodigo(){

    const codigoGenerado = ArrayRegistro.join(",");
    //codigoGenerado.split(" ");

    document.getElementById('input1').value = codigoGenerado;
    console.log(codigoGenerado);

    for (let i=0; i<codigoGenerado.length;i++){
        const element = codigoGenerado[i].toString().substring(0, 4);
        ArrayRegistro1.push(element);   
    }
    console.log(ArrayRegistro1);
    
   
const array = ["Juan,25,Madrid", "María,30,Barcelona", "Pedro,40,Sevilla"];
const newArray = [];

for (let i = 0; i < array.length; i++) {
  const element = array[i].substring(0, 4); // Obtener los primeros cuatro caracteres de cada string
  newArray.push(element);
}

console.log(newArray);
// Output: ["Juan", "Marí", "Pedr"]



}



