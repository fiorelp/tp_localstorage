window.onload=inicio;

//variables
var inputCuotaSocio=document.getElementById("socioCuota");
var resumenCuota=document.getElementById("resumenCuota");

//botones
var btnSocioCuota=document.getElementById("cuotaBtn");


var socio={};
var socios=[];

var socios=JSON.parse(localStorage.getItem("nnn"));

function inicio(){
    btnSocioCuota.addEventListener("click",cuota);
}

function cuota(){
var cuota=0
var err="Socio no encontrado"

var socioSearch=socios.find((socio)=>{
        if (socio.codigo === inputCuotaSocio.value)
        {return 1}
});

var nombre=socioSearch.nombre
var apellido=socioSearch.apellido
var email=socioSearch.email
var numero=socioSearch.numero
var categoria=socioSearch.categoria

if (socioSearch.categoria=="Adherente"){
    cuota=5000
} else{
    if(socioSearch.categoria=="Socio pleno"){
        cuota=6000
    } else{
        cuota=4500
    }
}

resumenCuota.innerHTML+=`
                        <tr>
                            <td>${nombre}</td>
                            <td>${apellido}</td>
                            <td>${email}</td>
                            <td>${numero}</td>
                            <td>${categoria}</td>
                            <td>$${cuota}</td>`
}

