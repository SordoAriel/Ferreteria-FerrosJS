//Variables
const IVA105 = 0.105
const IVA21 = 0.21
const TALADRO1 = 10000
const TALADRO2 = 8000
const TALADRO3 = 20000
const AMOLADORA1 = 13000
const AMOLADORA2 = 30000
const PORCENTAJEDESCUENTO = 0.1
const CICLO = 1

//Funciones
function precioConIva (precio, cantidad, iva){
    const totalParcial = parseInt((precio*cantidad)+(precio*cantidad*iva));
    return totalParcial;
};
function precioConIvaYDescuento (precio, cantidad, desc, iva){
    const totalParcial = parseInt((precio*cantidad)-(precio*desc)+(precio*iva));
    return totalParcial;
};
function carrito(){
    const articles = prompt("Por favor, ingrese el tipo de artículo que desee: 1) Taladros // 2) Amoladoras").toLowerCase();
    if (articles == 1){
        alert("Taladros disponibles: 1) Black & Decker 750W 13mm // 2) Black & Decker 500W 10mm // 3) De Walt 1100W 13mm");
        const taladro = prompt("Ingrese el número correspondiente al taladro que desea comprar:");
        if (taladro == 1){
            let cantidad = parseFloat(prompt("Usted seleccionó 1) Taladro Black & Decker 750W 13mm. Su costo es de $10.000 + IVA. Seleccione la cantidad: "));
            if(cantidad>=10){
                alert(precioConIvaYDescuento(TALADRO1,cantidad,PORCENTAJEDESCUENTO,IVA21));
            }else{
                alert(precioConIva(TALADRO1,cantidad,IVA21));
            };
        }else if (taladro == 2){
            let cantidad = parseFloat(prompt("Usted seleccionó 2) Taladro Black & Decker 500W 10mm. Su costo es de $8.000 + IVA. Seleccione la cantidad: "));
            if(cantidad>=10){
                alert(precioConIvaYDescuento(TALADRO2,cantidad,PORCENTAJEDESCUENTO,IVA21));
            }else{
                alert(precioConIva(TALADRO2,cantidad,IVA21));
            };
        }else if(taladro == 3){
            let cantidad = parseFloat(prompt("Usted seleccionó 1) Taladro DeWalt 1100W 13mm. Su costo es de $20.000 + IVA. Seleccione la cantidad: "));
            if(cantidad>=10){
                alert(precioConIvaYDescuento(TALADRO3,cantidad,PORCENTAJEDESCUENTO,IVA105));
            }else{
                alert(precioConIva(TALADRO3,cantidad,IVA105));
            }
        }else{
            alert("Código incorrecto");
            carrito();
        };
    }else if (articles == 2){
        alert("Amoladoras disponibles: 1) Amoladora Black & Decker 1100W disco 4,5mm // 2) Amoladora DeWalt 1800W disco 7mm");
        const amoladora = prompt("Ingrese el número correspondiente a la amoladora que desea comprar:");
        if (amoladora == 1){
            let cantidad = parseFloat(prompt("Usted seleccionó 1) Amoladora Black & Decker 1100W disco 4,5mm. Su costo es de $13.000 + IVA. Seleccione la cantidad: "));
            if(cantidad >= 10){
                alert(precioConIvaYDescuento(AMOLADORA1,cantidad,PORCENTAJEDESCUENTO,IVA21));
            }else{
                alert(precioConIva(AMOLADORA1,cantidad,IVA21));
            };
        }else if (amoladora == 2){
            let cantidad = parseFloat(prompt("Usted seleccionó 2) Amoladora DeWalt 1800W disco 7mm. Su costo es de $30.000 + IVA. Seleccione la cantidad: "));
            if(cantidad>=10){
                alert(precioConIvaYDescuento(AMOLADORA2,cantidad,PORCENTAJEDESCUENTO,IVA105));
            }else{
                alert(precioConIva(AMOLADORA2,cantidad,IVA105));
            };
        }
    }else{
        alert("Código incorrecto");
        carrito();
    }
}

function compraEfectuada(){
    alert("¡Muchas gracias por su compra " + welcome + ", esperamos verlo pronto!");
    welcome
}

//Código ejecutable

const welcome = prompt("Bienvenidos a Ferretería Ferros, por favor, ingrese su usuario:");
alert("Bienvenido " + welcome + "!");
const comprar = prompt("¿Comenzar compra? Si // No").toLowerCase();
while(comprar != "no"){
    carrito();
    compraEfectuada();
}
alert("¡Gracias por visitarnos!")