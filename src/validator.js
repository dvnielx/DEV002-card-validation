const validator = {
  isValid: (creditCardNumber) => {
  const length = creditCardNumber.length;  //longitud de string
  console.log("click se ejecutó" + creditCardNumber)
  let agregarDigitos = 0;
  
  //si la cantidad de dígitos, al sacar su módulo da como resultado 0
  if(length % 2 == 0)
  {
      // Comienza al inicio del numero y duplica a partir del primer número
    
      for(let i = 0; i < length; i++)

      {
          let currentDigit = parseInt(creditCardNumber[i]);
          if (i % 2 == 0) //tomar posiciones pares
          //si el digito actual multiplicado x 2 es mayor que 9
          {
              if ((currentDigit *= 2) > 9) 
              {
                  // Separar los valores de 2 digitos para después sumarlos
                  let primerNumero = parseInt(currentDigit / 10); //identifica el primer numero de currentDigit tomando el entero, es decir 1 p. ej 16 / 10 = 1.6 = 1
                  let ultimoNumero = currentDigit % 10; //identifica el ultimo número de current digit con modulo 10 p ej, 16 mod 10 = 6
                  

                  // suma el primero y último número de currentDigit
                  currentDigit = primerNumero + ultimoNumero;
              }
          }
          //suma todos los dígitos de la tarjeta
          agregarDigitos += currentDigit; 
      }
  }
    const total = (agregarDigitos % 10) ===0
    console.log(total, agregarDigitos)
      return total
  },

  maskify: (creditCardNumber) => {
  return creditCardNumber.slice(0, -4).replace(/./g, '#') + creditCardNumber.slice(-4)
}
}

export default validator;

//5579100347228064 , 5253460008191610
