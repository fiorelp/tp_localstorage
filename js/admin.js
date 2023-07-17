window.onload=inicio;

//Variables

//Botones
var btnSaveSocio=document.getElementById("saveSocio");
var btnDeleteSocio=document.getElementById("deleteSocio");
//Vector, objetos y Ls
var socio={};
var socios=[];


var socios=JSON.parse(localStorage.getItem("nnn"));

//Funciones

function inicio(){
    btnSaveSocio.addEventListener("click",save);
    //btnDeleteSocio.addEventListener("click",deleteSocio);
}

function save(){
socio={}
var inputCod=document.getElementById("codSocio");
var inputName=document.getElementById("nameSocio");
var inputSur=document.getElementById("surSocio");
var inputMail=document.getElementById("mailSocio");
var inputNum=document.getElementById("numSocio");
var inputCate=document.getElementById("cateSocio");

socio.codigo=inputCod.value;
socio.nombre=inputName.value;
socio.apellido=inputSur.value;
socio.email=inputMail.value;
socio.numero=inputNum.value;
socio.categoria=inputCate.value;

inputCod.value="";
inputName.value="";
inputSur.value="";
inputMail.value="";
inputNum.value="";
inputCate.value="";

socios.push(socio);

localStorage.setItem("nnn", JSON.stringify(socios));


}

//function deleteSocio(){
    //socios.splice(index,2);
    //localStorage.setItem("nnn", JSON.stringify(socios));
 //}