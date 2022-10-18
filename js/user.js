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
// let arrayUser=[];/
// let user_l = "user";/
// let user_new = "";/
// let user_n = 0;/
// let user_suma = "";/
// let nick = 0;/
// let gmail = 0;/
// let pass = 0;/

// function User(nick, gmail, pass) {
//     this.nick = nick;
//     this.gmail = gmail;
//     this.pass = pass;
// };/

// function data() {
//     nick = prompt("nombre de usuario");
//     gmail = prompt("ingrese su gmail");
//     pass = prompt("ingrese pass")
// }
// do {
//     data()
//     user_suma = ("_" + (user_n++));

//     if (nick !== "" || gmail !== "" || pass !== "") {
//         user_new = (user_l + user_suma)

//     }
//     arrayUser.push(user_new = new User(nick, gmail, pass))

//     console.log(arrayUser)
// } while (nick !== "" || gmail !== "" || pass !== "")