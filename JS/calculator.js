const facHistory = [];    /* Aqui guardaremos el resultado del factorial */
const sumaHistory = [];   /* Aqui guardaremos el resultado de la suma */
const prodctHistory = []; /* Aqui guardaremos el resultado del producto */
const porctjHistory = []; /* Aqui guardaremos el resultado del porcentaje */
const user_info = {
  name : 'none',
  lastName : 'none',   /* Aqui almacenaremos los datos del usuario */
  dateBirth : 'none',
}
  // variables para los botones
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const result = document.getElementById('result');

  //Eventos
one.addEventListener('click', () =>{
  result.textContent = result.textContent + "1";
  e.preventDefault()
})
two.addEventListener('click', () =>{
  e.preventDefault()
  result.textContent = result.textContent + "2";
})
three.addEventListener('click', () =>{
  e.preventDefault()
  result.textContent = result.textContent + "3";
})
four.addEventListener('click', () =>{
  e.preventDefault()
  result.textContent = result.textContent + "4";
})
five.addEventListener('click', () =>{
  e.preventDefault()
  result.textContent = result.textContent + "5";
})
six.addEventListener('click', () =>{
  e.preventDefault()
  result.textContent = result.textContent + "6";
})
seven.addEventListener('click', () =>{
  e.preventDefault()
  result.textContent = result.textContent + "7";
})
eight.addEventListener('click', () =>{
  e.preventDefault()
  result.textContent = result.textContent + "8";
})
nine.addEventListener('click', () =>{
  e.preventDefault()
  result.textContent = result.textContent + "9";
})
zero.addEventListener('click', () =>{
  e.preventDefault()
  result.textContent = result.textContent + "0";
})

  


/* Mensaje para que el usaurio elija que operacion realizar */
//var msj = 'A continuacion seleccione el tipo de operacion que desea ejecutar insertando su numero correspondiente : 1. Factorial | 2. Suma | 3. Producto | 4. Porcentaje |'
/* Mensaje para que el usario ingrese sus datos */
//var user_msj = 'Ingrese sus datos a continuacion'

// function factorial() {    /* Calculo del factorial de un numero */
//   alert('Ingrese un numero para calcular su factorial');
//   let factNumber = parseInt(prompt());
//   let total = 1;
//   let cuenta = 1;                                             
//     if (factNumber == 0){
//       alert('El factorial de 0 es 1');  /* En caso de que el usuario entre el numero 0 */
//     }                                                       
//     else{
//       while (cuenta <= factNumber){
//         total = total * cuenta;
//         cuenta += 1;
//         facHistory.push(total);
//       }
//     }
//   alert('El factorial de ' + factNumber + ' es ' + total,);
// }

// function suma(){          /* Calculo de una suma */
//   alert('Ingrese dos numero para calcular su suma');
//   alert('Primer numero');
//   let number1 = parseInt(prompt());
//   alert('Segundo Numero');
//   let number2 = parseInt(prompt());
//   totalSuma = number1 + number2;
//   sumaHistory.push(totalSuma);
//   alert('La suma de ' + number1 + ' y ' + number2 + ' es ' + totalSuma);
// }

// function producto(){     /* Calculo de un producto */
//   alert('Ingrese dos numeros para calcular su producto');
//   alert('Primer numero');
//   let number1 = parseInt(prompt());
//   alert('Segundo numero')
//   let number2 = parseInt(prompt());
//   totalProduct = number1 * number2;
//   prodctHistory.push(totalProduct);
//   alert('El producto de ' + number1 + ' y ' + number2 + ' es ' + totalProduct);
// }

// function porcentaje(){   /* Calculo de un porcentaje */
//   alert('Ingrese un numero para calcular su porcentaje')
//   number = parseInt(prompt());
//   alert('Ingrese el porcentaje a calcular (solo ingrese un numero natural)');
//   ratioNumber = parseInt(prompt());
//   totalRatio = ratioNumber * number / 100;
//   porctjHistory.push(totalRatio);
//   alert('El ' + ratioNumber + ' por ciento de ' + number + ' es ' + totalRatio);
// }

//user_info.name = prompt('Ingrese nombre');
//user_info.lastName = prompt('Ingrese apellido');
//user_info.dateBirth = prompt('Ingrese fecha de nacimiento dd/mm/aaaa');
//console.lo
//alert(user_msg(user_info);

//alert(msj);

//let operation_select = parseInt(prompt());

//switch (operation_select) {
  // case 1:
  //   factorial();
  //   alert(facHistory);
  //   break;
  // case 2:
  //   suma();
  //   alert(sumaHistory);
  //   break;
  // case 3:
  //   producto();
  //   alert(prodctHistory);
  //   break;
  // case 4:
  //   porcentaje();
  //   alert(porctjHistory);
  //   break;
//}











