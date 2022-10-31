let arrayUser = [];
// ! REGISTER
let addNick = document.getElementById("addNick").value;
let addGmail = document.getElementById("addGmail").value;
let addPass = document.getElementById("addPass").value;
let addImg = document.getElementById("addImg").value;
let addSubmit = document.getElementById("addSubmit");
//   ! login
let loginNick = document.getElementById("loginNick").value;
let loginGmail = document.getElementById("loginGmail").value;
let loginPass = document.getElementById("loginPass").value;
let loginSubmit = document.getElementById("loginSubmit");

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
// !  LOGIN                            login completo
function userReturnUserLogin() {
    let loginNick = document.getElementById("loginNick").value;
    let loginGmail = document.getElementById("loginGmail").value;
    let loginPass = document.getElementById("loginPass").value;

    const user = arrayUser.find(u => u.user === loginNick)

    const email = arrayUser.find(g => g.gmail === loginGmail)

    const passs = arrayUser.find(p => p.pass === loginPass)
    if (passs === email && user === email){
        console.log("hola como estas");
    }
    if (passs != email && email === user){
        alert("contraseña incorrecta")
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
    document.getElementById("addNick").value = "";
    document.getElementById("addGmail").value = "";
    document.getElementById("addPass").value = "";
    document.getElementById("addImg").value = "";
}