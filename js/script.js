let x = 10;
x = 100;
console.log(x);

//Iteraciones
const cielo = document.getElementById("cielo");

for (let i=0; i<5; i++){
    cielo.innerHTML += '☆';
}

const planetas = ["🌍", "🪐", "🌕"] //Por alguna razón cargan pero en el navegador jaja

for(const planeta of planetas){
    cielo.innerHTML += planeta;
}

let n=0;
while(n<5){
    cielo.innerHTML += "☁️";
    n++;
}

let m=0;
do{
    cielo.innerHTML += "🚀";
    m++;
} while(m<4);

const btnEstrella = document.getElementById("btnEstrella");
btnEstrella.addEventListener("click", ()=> {
    cielo.innerHTML += "☆";
})