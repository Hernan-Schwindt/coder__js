window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
  });
// do {
//     usuario = prompt("ingrese su nombre de usuario")
//     gmail = prompt("ingrese su gmail")
//     pass = prompt("ingrese contraseña")

//     // if ((usuario !== "") && (gmail !== "") && (pass !== "")) {
//     //     datos_ingresados_f();
//     // } else if ((usuario !== "") && (gmail !== "") && (pass == "")) {
//     //     alert("no añadio una contraseña")
//     //     pass = prompt("ingrese contraseña")
//     //     datos_ingresados_f();
//     // } else if ((usuario !== "") && (gmail == "") && (pass !== "")) {
//     //     alert("no añadio el gmail")
//     //     gmail = prompt("ingrese su gmail")
//     //     datos_ingresados_f();
//     // } else if ((usuario == "") && (gmail !== "") && (pass !== "")) {
//     //     alert("no añadio el nombre de usuario")
//     //     usuario = prompt("ingrese su nombre de usuario")
//     //     datos_ingresados_f();
//     // } else if ((usuario == "") && (gmail == "") && (pass !== "")) {
//     //     alert("no añadio el nombre de usuario ni el gmail")
//     //     usuario = prompt("ingrese su nombre de usuario")
//     //     gmail = prompt("ingrese su gmail")
//     //     datos_ingresados_f();
//     // } else if ((usuario !== "") && (gmail == "") && (pass == "")) {
//     //     alert("no añadio la contraseña ni el gmail")
//     //     pass = prompt("ingrese contraseña")
//     //     gmail = prompt("ingrese su gmail")
//     //     datos_ingresados_f();
//     // } else if ((usuario == "") && (gmail !== "") && (pass == "")) {
//     //     alert("no añadio la contraseña ni su nombre de usuario")
//     //     pass = prompt("ingrese contraseña")
//     //     usuario = prompt("ingrese su nombre de usuario")
//     //     datos_ingresados_f();
//     // } else {
//     //     datos_ingresados_f();
//     // }

//     userReturnUser();
//     userReturngmail();
//     if(userReturnUser()){
//         alert("tonto user")
//     }
//     if(userReturngmail()){
//         alert("tonto gmail")
//     }
//     if(!userReturnUser() && !userReturngmail()){
//         arrayUser.push(user = new Users(usuario, gmail, pass));
//         console.log(arrayUser);
//     }
// } while (!datos_ingresados);
