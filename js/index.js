window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});

// ! cambiar de login a registro

irRegister.addEventListener("click", ()=>{
  buttomUser()
});
irLogin.addEventListener("click", () =>{
  buttomUser()
})

let aviso = new Array();
//      !   cargar datos de usuarios
addSubmit.addEventListener("click", () => {

  if (returnNuwUser()) {

    resetForm();

  };
  // ! console.log(arrayUser); para ver q se subio 
});
//     !   verifica los datos q sean iguales
loginSubmit.addEventListener("click", () => {

  if (returnNuwrLogin()) {

    resetForm();
    console.log("funca")
  };
  if (userReturnUserLogin()){


    alert("se encontro su usuario")
  };
});
// ! login userReturnUserLogin
function returnNuwrLogin() {
  faltaDatosLogin.innerHTML = "";

  let aviso = new Array();

  let loginNick = document.getElementById("loginNick").value;
  let loginGmail = document.getElementById("loginGmail").value;
  let loginPass = document.getElementById("loginPass").value;

  let user = arrayUser.find(u => u.user === loginNick)

  let email = arrayUser.find(g => g.gmail === loginGmail)

  let passs = arrayUser.find(p => p.pass === loginPass)

  if (!loginNick) {
    aviso.push("ingresar nombre")
  }
  if (!loginGmail) {
    aviso.push("ingresar gmail")
  }
  if (!loginPass) {
    aviso.push("ingresar una contraseña")
  }
  //     !   datos de login verification
  if (passs === email && user === email) {
    console.log(passs)
    //return user;
  }
  if (passs != email && email === user && passs !="") {
    aviso.push("contraseña incorrecta")
  }
  if (email != passs && email === user && email !="") {
    aviso.push("gmail incorecto")
  }
  if (user != email && user !="") {
    aviso.push("usuario incorrecto")
  }
  if (aviso.length > 0) {
    let list = document.createElement("ul");
    list.textContent = "introdusca los datos faltantes";
    aviso.forEach(element => {

      list.appendChild(crearLi(element));
    })
    faltaDatosLogin.appendChild(list);
  }

  return aviso.length == 0;
}

// ! register

function returnNuwUser() {
  faltaDatosRegister.innerHTML = "";

  let aviso = new Array();

  let addNick = document.getElementById("addNick").value;
  let addGmail = document.getElementById("addGmail").value;
  let addPass = document.getElementById("addPass").value;
  let addImg = document.getElementById("addImg").value;

  if (addNick == "any") {
    aviso.push("ingresar nombre")// ! usar libreria con alerta si el nombre ya esta en uso
  }
  if (addGmail == "") {
    aviso.push("ingresar gmail")
  }
  if (addPass == "") {
    aviso.push("ingresar una contraseña")
  }
  if (addImg == "") {
    aviso.push("ingresar una imagen")

  }
  if (aviso.length > 0) {
    let list = document.createElement("ul");
    list.textContent = "introdusca los datos faltantes";
    aviso.forEach(element => {

      list.appendChild(crearLi(element));
    })
    faltaDatosRegister.appendChild(list);
  }
  if (!userReturnUser(addNick) && !userReturngmail(addGmail) && addNick !== "" &&
    addGmail !== "" && addPass !== "" && addImg !== "") {
    datos_ingresados = confirm(
      "estos son tus datos?" + "\n" +
      "usuario : " + addNick + "\n" +
      "gmail : " + addGmail + "\n" +
      "contraseña : " + addPass + "\n" +
      "img : " + addImg)
    if (datos_ingresados) {
      userNEW();
    }
  };
  return aviso.length == 0;
}

function crearLi(mensaje) {

  let li = document.createElement("li");
  li.textContent = mensaje;

  return li;

}