window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});

// ! cambiar de login a registro

irRegister.addEventListener("click", () => {
  buttomUser()
});
irLogin.addEventListener("click", () => {
  buttomUser()
})


// //     !   verifica los datos q sean iguales
// loginSubmit.addEventListener("click", () => {

//   if (returnNuwrLogin()) {

//     resetForm();
//     console.log("funca")
//   };
//   if (userReturnUserLogin()) {


//     alert("se encontro su usuario")
//   };
// });
// ! registro

addSubmit.addEventListener("click", () => {

  let condicion = validacionForm(formAdd, addNick, addGmail, addPass, "name", "mail", "password", "termsAndConditions");
  if (condicion) {
    enviarFormulario(formAdd);
    console.log("hola como estas 2.0")
  }
});


//     !            login


loginSubmit.addEventListener("click", () => {

  let condicion = validacionForm(formLogin, loginNick, loginGmail, loginPass, "nameLogin", "mailLogin", "passwordLogin", "termsAndConditionsLogin");
  if (condicion) {
    enviarFormulario(formLogin);
    console.log("hola como estas 2.0")

  }
  if (userReturnUserLogin()) {
    resetForm()
    console.log("hola como estas")
  }
});


function verificador(nick, gmail) {
  let user = arrayUser.find(u => u.user === nick.value);

  let email = arrayUser.find(g => g.gmail === gmail.value);

  if (user) {
    mostrarMensajeError("name", "Nombre en uso*");
    condicion = false;
  }
  if (email) {
    mostrarMensajeError("mail", "Correo ya en uso*");
    condicion = false;
  }
  if (!user && !email &&
    !(addNick.value.length < 1 || addNick.value.trim() == "") &&
    !(addGmail.value.length < 1 || addGmail.value.trim() == "") &&
    !(addPass.value.length < 1 || addPass.value.trim() == "") &&
    !(addImg.value.length < 1 || addImg.value.trim() == "")) {
    userNEW();

  }
}

function validacionForm(form, nick, gmail, pass, input1, input2, input3, input4) {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (nick.value.length < 1 || nick.value.trim() == "") {
    mostrarMensajeError(input1, "Nombre no valido*");
    condicion = false;
  }
  if (gmail.value.length < 1 || gmail.value.trim() == "") {
    mostrarMensajeError(input2, "Correo no valido*");
    condicion = false;
  }
  if (pass.value.length < 1 || pass.value.trim() == "") {
    mostrarMensajeError(input3, "Contraseña no valido*");
    condicion = false;
  }

  //imgregistro();

  if (!terminosYcondiciones.checked) {
    mostrarMensajeError(input4, "Acepte*");
    condicion = false;
  } else {
    mostrarMensajeError(input4, "");
  };
  if(userReturnUserLogin()){
    alert("hola como estas")
  }

  verificador(addNick, addGmail);
  return condicion;

};

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector("." + claseInput);
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario(terminar) {
  terminar.reset();
  terminar.lastElementChild.innerHTML = "Listo !!";
};

function imgregistro() {
  if (addImg.value.length < 1 || addImg.value.trim() == "") {
    mostrarMensajeError("imgAvatar", "img no valido");
    condicion = false;

  }
}








//       !    carrito desplegable

popUpCart.addEventListener("click", () => {
  pullOutCart()
})

trolleyX.addEventListener("click", () => {
  pullOutCart()
})
// ! productos añadidos tantyon en el main como en el carrito
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('trolley')){
      trolley = JSON.parse(localStorage.getItem('trolley'))
      actualizarCarrito()
  }
})

botonVaciar.addEventListener('click', () => {
  trolley.length = 0
  actualizarCarrito()
})
stockProductos.forEach((producto) => {
  const div = document.createElement(`div`)
  div.classList.add(`producto`)
  div.innerHTML = `
  <img src=${producto.img} alt= "">
  <h3>${producto.nombre}</h3>
  <p>${producto.desc}</p>
  <P class="precioProducto">precio: $ ${producto.precio}</p>
  <button id="agregar${producto.id}" class="botonAgregar">Agregar <i class="fas fa-shopping-cart"></i></button>
  `
  itemProducto.appendChild(div)

  const boton = document.getElementById(`agregar${producto.id}`)
  boton.addEventListener('click', () => {
    agregarAlCarrito(producto.id)
  })
});

const agregarAlCarrito = (prodId) => {

  const existe = trolley.some (prod => prod.id === prodId) 

  if (existe){ 
      const prod = trolley.map (prod => { 
          if (prod.id === prodId){
              prod.cantidad++
          }
      })
  } else { 
      const item = stockProductos.find((prod) => prod.id === prodId)
      trolley.push(item)
  }
  
  actualizarCarrito() 
}

const eliminarDelCarrito = (prodId) => {

  const item = trolley.find((prod) => prod.id === prodId)

  const indice = trolley.indexOf(item) 

  trolley.splice(indice, 1) 
  actualizarCarrito() 
  console.log(trolley)
}
const actualizarCarrito = () => {
    
  itemsTrolley.innerHTML = "" 
  
  trolley.forEach((prod) => {
      const div = document.createElement('div')
      div.className = ('productoEnCarrito')
      div.innerHTML = `
      <div class="imgDescCarruto">
      <img src=${prod.img} alt= "">
      <p>${prod.nombre}</p>
      </div>
      <p><span id="cantidad">${prod.cantidad}</span></p>
      <p>Precio:$${prod.precio}</p>
      <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
      `

      itemsTrolley.appendChild(div)
      
      localStorage.setItem('trolley', JSON.stringify(trolley))

  })
  
  contadorCarrito.innerText = trolley.length 
  console.log(trolley)
  precioTotal.innerText = trolley.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
  

}









































// function returnNuwrLogin() {
//   faltaDatosLogin.innerHTML = "";

//   let aviso = new Array();

//   let loginNick = document.getElementById("loginNick").value;
//   let loginGmail = document.getElementById("loginGmail").value;
//   let loginPass = document.getElementById("loginPass").value;

// let user = arrayUser.find(u => u.user === loginNick)

// let email = arrayUser.find(g => g.gmail === loginGmail)

// let passs = arrayUser.find(p => p.pass === loginPass)

//   if (!loginNick) {
//     aviso.push("ingresar nombre")
//   }
//   if (!loginGmail) {
//     aviso.push("ingresar gmail")
//   }
//   if (!loginPass) {
//     aviso.push("ingresar una contraseña")
//   }
//   //     !   datos de login verification
//   if (passs === email && user === email) {
//     console.log(passs)
//     //return user;
//   }
// if (passs != email && email === user && passs != "") {
//   aviso.push("contraseña incorrecta")
// }
// if (email != passs && email === user && email != "") {
//   aviso.push("gmail incorecto")
// }
// if (user != email && user != "") {
//   aviso.push("usuario incorrecto")
// }
//   if (aviso.length > 0) {
//     let list = document.createElement("ul");
//     list.textContent = "introdusca los datos faltantes";
//     aviso.forEach(element => {

//       list.appendChild(crearLi(element));
//     })
//     faltaDatosLogin.appendChild(list);
//   }

//   return aviso.length == 0;
// }

// // ! register