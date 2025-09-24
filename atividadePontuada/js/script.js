const v1 = document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');

function clique(n) {
    
if(v1.value.length == 0){
    v1.value = n;
}
else{
    v2.value = n;
}
}
function limpar() {
  v1.value = "";
  v2.value = "";
}
function confirmar() {
    v1.value = "";
    v2.value = "";
    
    alert("voto confirmado");
    console.log("voto confirmado")
}
function nulo() {
    alert("voto nulo confirmado");
    console.log("nulo")
}
function final() {

    alert("Votações finalizadas")
}
function proximoVoto() {


console.log("a")

}
