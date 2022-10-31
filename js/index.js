window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});


let aviso = new Array();
addSubmit.addEventListener("click", () => {

  if (returnNuwUser()) {

    resetForm();

  };
  console.log(arrayUser);
});

loginSubmit.addEventListener("click", () => {
     
     if (returnNuwrLogin()) {

      resetForm();
  
    };
  if (!userReturnUserLogin() && loginNick !== "" && loginGmail !== "" &&
    loginPass !== "") {
      

    alert("se encontro su usuario")
  };
});
// ! login
function returnNuwrLogin() {
  faltaDatosLogin.innerHTML = "";

  let aviso = new Array();

  let loginNick = document.getElementById("loginNick").value;
  let loginGmail = document.getElementById("loginGmail").value;
  let loginPass = document.getElementById("loginPass").value;

  if (loginNick == "any") {
    aviso.push("ingresar nombre")
  }
  if (loginGmail == "") {
    aviso.push("ingresar gmail")
  }
  if (loginPass == "") {
    aviso.push("ingresar una contraseña")
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

// ! reguster

function returnNuwUser() {
  faltaDatosRegister.innerHTML = "";

  let aviso = new Array();

  let addNick = document.getElementById("addNick").value;
  let addGmail = document.getElementById("addGmail").value;
  let addPass = document.getElementById("addPass").value;
  let addImg = document.getElementById("addImg").value;

  if (addNick == "any") {
    aviso.push("ingresar nombre")
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