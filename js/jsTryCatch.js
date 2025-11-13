const form = document.getElementById("form");
const input = document.getElementById("nombre");
const msg = document.getElementById("mensaje");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    try {
        if(input.value.trim() === ""){
            throw new Error("El nombre no puede estar vacío");
        }   // === Sirve para hacer comparaciones sin importar el tipo
        msg.textContent=`Bienvenido usuario: ${input.value} a tus Sistema de inscripciones`
        msg.style.color="green"
    } catch (error) {
        msg.textContent = `Ocurrió un error: ${error.message}`;
        msg.style.color = "red";
    }

}
);