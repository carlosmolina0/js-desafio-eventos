class Usuario {
    constructor(username, password) {
        this.username = username
        this.password = password
    }

}

const usuarios = []

const form = document.getElementById("idForm")
const botonLogin = document.getElementById("botonLogin")
const divUsers = document.getElementById("divUsers")
const saludo = document.getElementById("saludo")


form.addEventListener("submit", (event) => {
    event.preventDefault()

    let username = document.getElementById("idUser").value
    let password = document.getElementById("idPassword").value

    const user = new Usuario (username, password)
    usuarios.push(user)
    console.log(usuarios)

    form.reset()
    form.style.display = "none"
    saludo.innerHTML += `
        <p>Hola ${user.username}, bienvenido a la aplicación de gestión de Recursos Humanos. Ahora ya puedes seleccionar las gestiones a realizar.</p>
    `
    saludo.style.display = ""
})


botonUsers.addEventListener("click", () => {
    usuarios.forEach(usuario => {
        divUsers.innerHTML += `
        <div class="card" style="width: 18rem; margin:5px">
            <div class="card-body">
                <h5 class="card-title">${usuario.username}</h5>
                <p class="card-text">${usuario.email}</p>
        </div>
      </div>
        `
    })
})