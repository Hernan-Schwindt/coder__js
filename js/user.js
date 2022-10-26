let arrayUser = [];
let usuario = ("");
let gmail = ("");
let contraseña = ("");
let datos_ingresados = ("");
arrayUser.push({user:"hernan", gmail:"hernanschwindt1@gmail.com", pass:"123456ppmm"});
arrayUser.push({user:"jose", gmail:"herna.schwindt1@gmail.com", pass:"123456lol"});
class Users {
    constructor(user, gmail, pass) {
        this.user = user;
        this.gmail = gmail;
        this.pass = pass;
    }
}

function userReturnUser(){
    const is = arrayUser.filter(p=> p.user === usuario) 
    if(is != false){
        console.log(is)
        return true;
    }
    if(is != true){
        console.log(is)
        return false;
    }
        
}
function userReturngmail(){
    const is = arrayUser.filter(p=> p.gmail === gmail) 
    if(is != false){
        console.log(is)
        return true;
    }
    if(is != true){
        console.log(is)
        return false;
    }
        
}

function datos_ingresados_f() {

    datos_ingresados = confirm(
        "estos son tus datos?" + "\n" +
        "usuario : " + usuario + "\n" +
        "gmail : " + gmail + "\n" +
        "contraseña : " + pass)

    if (((usuario == "") && (gmail == "") && (pass == "")) ||
        ((usuario !== "") && (gmail !== "") && (pass == "")) ||
        ((usuario !== "") && (gmail == "") && (pass !== "")) ||
        ((usuario == "") && (gmail !== "") && (pass !== "")) ||
        ((usuario == "") && (gmail == "") && (pass !== "")) ||
        ((usuario !== "") && (gmail == "") && (pass == "")) ||
        ((usuario == "") && (gmail !== "") && (pass == ""))) {
        alert("ERROR \n \n falta ingresar datos para seguir con el registro")
    }
}
