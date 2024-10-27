function canIterate(obj) {
  if (typeof obj === 'string' || Symbol.iterator in Object(obj)) {
    return true;
  }
  return false;
}

//Примеры использования

console.log(canIterate(new Map()));  // true
console.log(canIterate(new Set()));  // true
console.log(canIterate(null));       // false
console.log(canIterate(10));         // false
console.log(canIterate("Netology")); // true