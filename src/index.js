import validator from './validator.js';

const ccNumber = document.getElementById('creditCardNumber')
const numeroMaskify = document.getElementById('numeroMaskify')
const buttonValidate = document.getElementById('btn-purchase');

buttonValidate.addEventListener("click", function () {
    console.log("Click se ejecutó");

    let numerosCreditCard = document.getElementById("creditCardNumber").value;

    if (validator.isValid(numerosCreditCard)) {
        alert("Valid credit card. Thank you for your purchase! Your ticket has been sent to your email :) ");
    } else {
        alert("Your credit card isn't valid. Try again.");
    }

});
ccNumber.addEventListener("keyup",function() { //keyup: cada vez que sueltan una tecla, este evento sucede.

const traerMaskify = validator.maskify(ccNumber.value) //en esta nueva variable, en mi f maskify, entra el valor de ccNumber
numeroMaskify.textContent= traerMaskify //el string es devuelto con la propiedad maskify en la interfaz
});