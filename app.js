document.getElementById('crear').addEventListener('click', crearUsuario)

function crearUsuario(){

    let firstNameValue = document.getElementById('firstName').value;
    let lastNameValue = document.getElementById('lastName').value;
    let emailValue = document.getElementById('email').value;
    let passwordValue = document.getElementById('password').value;


    let usuario = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        password: passwordValue,
    }

    let url = 'https://todo-app-bs.herokuapp.com/v1/user/signup';
    console.log(usuario)


    fetch(url, {
        headers:{ 
            "content-type" : "application/json"
                },

        method: 'post',
        body: JSON.stringify(usuario)
    }).then((respuesta) => respuesta.json())
        .then(resultado=>{
            if (resultado.response === 'Element Created'){
                localStorage.setItem('token', resultado.detail.token)
                window.location = 'index.html';
            }
        })
}

function validarToken (){
    let token = localStorage.getItem('token')

    let url='https://todo-app-bs.herokuapp.com/v1/user'

    fetch(url, {
        method : 'get',
        headers: {
            'Content-Type': 'application/json',
            Authorization : 'Bearer ' + token
        }
    }).then(respuesta=>respuesta.json()
        .then((resultado)=>console.log(resultado)))
}

validarToken ()




/* FUNCION DE SIDEBAR */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }