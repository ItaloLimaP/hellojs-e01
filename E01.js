function multiplyByTen(num) {
  // retorne num depois de multiplicar por dez
  
  num = num * 10;
  return num;
}

function subtractFive(num) {
  // retorne num depois de diminuir cinco
  
  num = num - 5;
  return num;
}

function areSameLength(str1, str2) {
  // retorna true se as duas strings tem o mesmo tamanho
  // senão retorna false  
  
  if(str1.length == str2.length) {
     return true;
  }
  else {
     return false;
  }

function areEqual(x, y) {
  // retorna true se x e y são iguais
  // senão retorna false
  
  if(x == y) {
     return true;
  }
  else {
     return false;
  }
}

function lessThanNinety(num) {
  // retorna true se num é menor que noventa
  // senão retorna false
  
  if(num < 90) {
     return true;
  }
  else {
     return false;
  }
}

function greaterThanFifty(num) {
  // retorna true se num é maior que cinquenta
  // senão retorna false
  
   if(num > 50) {
     return true;
  }
  else {
     return false;
  }
}

function add(x, y) {
  // soma x e y e retorna o valor
  
   var retorno;
   
   retorno = x + y;
   return retorno;
  }
}

function subtract(x, y) {
  // subtrai y de x e retorna o resultado
  
   var retorno;
   
   retorno = y - x;
   return retorno;
}

function divide(x, y) {
  // divide x por y e retorna o valor
  
   var retorno;
   
   retorno = x / y;
   return retorno;
}

function multiply(x, y) {
  // multiplica x por y e retorna o valor
  
  var retorno;
   
   retorno = y * x;
   return retorno;
}

function getRemainder(x, y) {
  // retorna o resto da divisão de x por y
  
  var retorno;
   
   retorno = y % x;
   return retorno;
}

function isEven(num) {
  // retorna true se num é par
  // senão retorna false
  
  var retorno;
   
   total = n/num;
   if(total / 2 = 0){
		return true;
   }
   else{
		return false;
   }
}

function isOdd(num) {
  // retorna true se num é ímpar
  // senão retorna false
  
  if (num % 2 == 0){
		retun false;
  }
  else{
		retun true;
  }
}

function square(num) {
  // eleva num ao quadrado e retorna o resultado
  
  var retorno;
  retorno = math.pow(num, 2);
  
  return retorno;
}

function cube(num) {
  // eleva num ao cubo e retorna o resultado
  
  var retorno;
  retorno = math.pow(num, 3);
  
  return retorno;
}

function raiseToPower(num, exponent) {
  // eleva num a qualquer potência passada como exponent
  
  var retorno;
  retorno = math.pow(num, *);
  
  return retorno;
}

function roundNumber(num) {
  // arredonda num e retorna o resultado
  
  var retorno;
  retorno = math.roundNumber(num);
  
  return retorno;
}

function roundUp(num) {
  // arredonda num pra cima e retorna o resultado
  
  var retorno;
  retorno = math.ceil(num);
  
  return retorno;
}

function addExclamationPoint(str) {
  // adiciona um ponto de exclamação ao final de str e retorna a nova string
  //'hello world' -> 'hello world!'
  
    var retorno = str + "!";
	return retorno;
}

function combineNames(firstName, lastName) {
  // retorna firstName e lastName combinado em uma string separado por espaço
  //'Presidente', 'Vargas' -> 'Presidente Vargas'
  
	var retorno =  firstName + " " + lastName;
	retun retorno;
}

function getGreeting(name) {
  // pega a string name e concatena outra string, por exemplo:
  //'JavaScript' -> 'Estuda JavaScript!'
  
    var retorno = "Italo" + name;
	retun retorno;
}

function getRectangleArea(length, width) {
  // retorna a área do retângulo usando length e width
}

function getTriangleArea(base, height) {
  // retorna a área do triângulo usando base e height
  var base;
  var height;
  var areaRetangulo;
  
  areaRetangulo = base * height / 2;
  
  return areaRetangulo;
}

function getCircleArea(radius) {
  // retorna a área do círculo usando radius
  
  var radius;
  var areaCirculo;
  
  areaCirculo = Math.PI * radius * radius;
  
  return areaRetangulo;
}

function getRectangularPrismVolume(length, width, height) {
  // retorna a área do retângulo 3D dados length, width e height
  
  var retangulo3D;
  var length;
  var width;
  var height;
  
  retangulo3D =2((length * width) + (length * height) + (width * height))
  return retangulo3D;
}