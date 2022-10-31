function items(){

}
const addNick = document.getElementById("addNick");
const addGmail = document.getElementById("addGmail");
const addPass = document.getElementById("addPass");
const form = document.getElementById("form");
const faltaDatos = document.getElementById("faltaDatos");

form.addEventListener("submit",e=>{
    if(!userReturnUser){
        faltaDatos.innerHTML =`<li>nombre de usuario en uso</li>`;

    }
})