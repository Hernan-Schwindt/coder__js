let arrayUser = [];
// ! REGISTER

let addNick = document.getElementById("addNick").value;
let addGmail = document.getElementById("addGmail").value;
let addPass = document.getElementById("addPass").value;
let addImg = document.getElementById("addImg").value;
const addSubmit = document.getElementById("addSubmit");
const irLogin = document.getElementById("irLogin");

//   ! login

let loginNick = document.getElementById("loginNick").value;
let loginGmail = document.getElementById("loginGmail").value;
let loginPass = document.getElementById("loginPass").value;
const loginSubmit = document.getElementById("loginSubmit");
const irRegister = document.getElementById("irRegister");

let faltaDatosRegister = document.getElementById("faltaDatosRegister");
let faltaDatosLogin = document.getElementById("faltaDatosLogin");

const userNew = document.getElementById("userNew");

let datos_ingresados = ("");

arrayUser.push({
    user: "hernan",
    gmail: "hernanschwindt1@gmail.com",
    pass: "123456ppmm",
    img: "img/avatar/icono.png"
});
arrayUser.push({
    user: "jose",
    gmail: "herna.schwindt1@gmail.com",
    pass: "123456lol",
    img: "img/avatar/noAvatar.jpg"
});


class Users {
    constructor(user, gmail, pass, img) {
        this.user = user;
        this.gmail = gmail;
        this.pass = pass;
        this.img = img;
    }
}
// ! click de cambio login a register
function buttomUser(){
    document.getElementById("formAdd").classList.toggle ("formNone");
    document.getElementById("formLogin").classList.toggle ("formNone");
}

// !  LOGIN                            login completo
function userReturnUserLogin() {
    let loginNick = document.getElementById("loginNick").value;
    let loginGmail = document.getElementById("loginGmail").value;
    let loginPass = document.getElementById("loginPass").value;

    let user = arrayUser.find(u => u.user === loginNick)

    let email = arrayUser.find(g => g.gmail === loginGmail)

    let passs = arrayUser.find(p => p.pass === loginPass)
    if (passs === email && user === email) {
        return user;
    }
    if (passs != email && email === user) {
        return false;
    }
    if (email != passs && email != user) {
        return false;
    }
    if(user != passs && user != email){
        return false;
    }
}
// !   USER
function userReturnUser() {
    let addNick = document.getElementById("addNick").value;
    let loginNick = document.getElementById("loginNick").value;

    const is = arrayUser.filter(p => p.user === addNick)
    if (is != false) {
        console.log("ese nick ya esta en uso")
        alert("ese nick ya esta en uso")
        return true;
    }
    if (is != true) {
        console.log("el nick esta disponible")
        return false;
    }

}

// !   GMAIL

function userReturngmail() {
    let addGmail = document.getElementById("addGmail").value;

    const is = arrayUser.filter(p => p.gmail === addGmail)

    if (is != false) {
        console.log("ese gmail ya esta en uso")
        alert("ese gmail ya esta en uso")
        return true;
    }
    if (is != true) {
        console.log("el gmail esta disponible")
        return false;
    }
}

//  ! CREAR UN NUEVO OBJETO

function userNEW() {
    let addNick = document.getElementById("addNick").value;
    let addGmail = document.getElementById("addGmail").value;
    let addPass = document.getElementById("addPass").value;
    let addImg = document.getElementById("addImg").value;

    arrayUser.push(new Users(addNick, addGmail, addPass, addImg));

    resetForm();
}

function resetForm() {
    // ! registro
    document.getElementById("addNick").value = "";
    document.getElementById("addGmail").value = "";
    document.getElementById("addPass").value = "";
    document.getElementById("addImg").value = "";
    // ! login
    document.getElementById("loginNick").value = "";
    document.getElementById("loginGmail").value = "";
    document.getElementById("loginPass").value = "";
}

