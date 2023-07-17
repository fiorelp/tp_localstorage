window.onload=inicio;

//Variables
var inputCod=document.getElementById("codSocio");
var inputName=document.getElementById("nameSocio");
var inputSur=document.getElementById("surSocio");
var inputMail=document.getElementById("mailSocio");
var inputNum=document.getElementById("numSocio");
var inputCate=document.getElementById("cateSocio");
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


socio.codigo=inputCod.value;
socio.nombre=inputName.value;
socio.apellido=inputSur.value;
socio.email=inputMail.value;
socio.numero=inputNum.value;
socio.categoria=inputCate.value;

socios.push(socio);

localStorage.setItem("nnn", JSON.stringify(socios));

inputCod.value="";
inputName.value="";
inputSur.value="";
inputMail.value="";
inputNum.value="";
inputCate.value="";


}

//function deleteSocio(){
    //socios.splice(index,2);
    //localStorage.setItem("nnn", JSON.stringify(socios));
 //}