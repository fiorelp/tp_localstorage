window.onload=inicio;

//Variables
var inputCod=document.getElementById("codSocio");
var inputName=document.getElementById("nameSocio");
var inputSur=document.getElementById("surSocio");
var inputMail=document.getElementById("mailSocio");
var inputNum=document.getElementById("numSocio");
var inputCate=document.getElementById("cateSocio");
var inputBuscarSocio=document.getElementById("buscarSocio");



//Botones
var btnBuscarSocio=document.getElementById("buscador");
var btnDeleteSocio=document.getElementById("deleteSocio");
var btnModifySocio=document.getElementById("modifySocio");
//Vector, objetos y Ls
var socio={};
var socios=[];

var socios=JSON.parse(localStorage.getItem("nnn"));

//FUNCIÓN INICIO
function inicio(){
    btnBuscarSocio.addEventListener("click",search);
    btnDeleteSocio.addEventListener("click",eliminar);
    btnModifySocio.addEventListener("click",modify);
}

function search(){
    var socioSearch=socios.find((socio)=>{
        if (socio.codigo === inputBuscarSocio.value)
        {return 1}
});

inputName.value=socioSearch.nombre;
inputSur.value=socioSearch.apellido;
inputMail.value=socioSearch.email;
inputNum.value=socioSearch.numero;
inputCate.value=socioSearch.categoria;
}

function eliminar(){
    index=inputBuscarSocio.value
    socios.splice(index,1);
    localStorage.setItem("nnn", JSON.stringify(socios));

    inputBuscarSocio.value="";
    inputName.value="";
    inputSur.value="";
    inputMail.value="";
    inputNum.value="";
    inputCate.value="";
}

function modify(){

    var nameModifyInput=document.getElementById("nameModify");
    var surModifyInput=document.getElementById("surModify");
    var mailModifyInput=document.getElementById("mailModify");
    var numModifyInput=document.getElementById("numModify");
    var cateModifyInput=document.getElementById("cateModify");
    var inputModify=document.getElementById("codModify");

    socio={}
    socio.codigo=inputModify.value;
    socio.nombre=nameModifyInput.value;
    socio.apellido=surModifyInput.value;
    socio.email=mailModifyInput.value;
    socio.numero=numModifyInput.value;
    socio.categoria=cateModifyInput.value;
    

    socios.splice(inputModify.value,1,socio);

    localStorage.setItem("nnn", JSON.stringify(socios));

    inputModify.value="";
    nameModifyInput.value="";
    surModifyInput.value="";
    mailModifyInput.value="";
    numModifyInput.value="";
    cateModifyInput="";
} 