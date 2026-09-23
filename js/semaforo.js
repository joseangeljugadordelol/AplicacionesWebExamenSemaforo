const botonrojo = document.getElementById("btnrojo");
const botonamarrillo = document.getElementById("btnamarrillo");
const botonverde = document.getElementById("btnverde");
const botonmisterioso= document.getElementById("btnmisterioso");
const botondiosito= document.getElementById("btndiosito");
const botonapagar= document.getElementById("btnapagar");

let acumuladorrojo = 0;
let acumuladoramarrillo = 0;
let acumuladorverde = 0;
let acumuladormisterioso = 3;

const diosito = document.querySelector("body");
const mantenimiento = document.querySelector("body");

const luzroja = document.querySelector(".luz.rojo");
const luzamarilla = document.querySelector(".luz.amarillo");
const luzverde = document.querySelector(".luz.verde");

botonrojo.addEventListener("click", function(){

    const rojo = document.getElementById("tfrojo");

    acumuladorrojo= acumuladorrojo + 1;

    rojo.textContent = acumuladorrojo;
    acumuladormisterioso = 3;
    mantenimiento.classList.remove("mantenimiento");
    diosito.classList.remove("diosito");
    luzroja.classList.add("encendida");
    luzamarilla.classList.remove("encendida");
    luzverde.classList.remove("encendida");
    
})
botonamarrillo.addEventListener("click", function(){

    const amarrillo = document.getElementById("tfamarrillo");

    acumuladoramarrillo= acumuladoramarrillo + 1;

    amarrillo.textContent =  acumuladoramarrillo;
    acumuladormisterioso = 2;
    mantenimiento.classList.remove("mantenimiento");
    diosito.classList.remove("diosito");
    luzroja.classList.remove("encendida");
    luzamarilla.classList.add("encendida");
    luzverde.classList.remove("encendida");
})
botonverde.addEventListener("click", function(){

    const verde = document.getElementById("tfverde");

    acumuladorverde= acumuladorverde + 1;

    verde.textContent = acumuladorverde;
    acumuladormisterioso = 1;
    mantenimiento.classList.remove("mantenimiento");
    diosito.classList.remove("diosito");
    luzroja.classList.remove("encendida");
    luzamarilla.classList.remove("encendida");
    luzverde.classList.add("encendida"); 
})
botonmisterioso.addEventListener("click", function(){
    if (acumuladormisterioso==3){
        botonverde.click();
        return
    }
    if (acumuladormisterioso==2){
        botonrojo.click();
        return
    }
    if (acumuladormisterioso==1){
        botonamarrillo.click();
        return
    }

})
botondiosito.addEventListener("click", function(){

    const rojo = document.getElementById("tfrojo");
    const amarrillo = document.getElementById("tfamarrillo");
    const verde = document.getElementById("tfverde");

    acumuladorrojo= acumuladorrojo + 1;
    acumuladoramarrillo= acumuladoramarrillo + 1;
    acumuladorverde= acumuladorverde + 1;

    rojo.textContent = acumuladorrojo;
    amarrillo.textContent = acumuladoramarrillo;
    verde.textContent = acumuladorverde;

    acumuladormisterioso = 3;
    mantenimiento.classList.remove("mantenimiento");
    luzroja.classList.add("encendida");
    luzamarilla.classList.add("encendida");
    luzverde.classList.add("encendida");
    diosito.classList.add("diosito");
})
botonapagar.addEventListener("click", function(){

    
    diosito.classList.remove("diosito");
    luzroja.classList.remove("encendida");
    luzamarilla.classList.remove("encendida");
    luzverde.classList.remove("encendida");
    mantenimiento.classList.add("mantenimiento");
    acumuladormisterioso = 3;
})
