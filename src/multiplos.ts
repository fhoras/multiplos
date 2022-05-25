function esMultiplo(numero1: number, numero2: number) {
  if (numero1 % numero2 === 0) {
    return true;
  } else {
    return false;
  }
}

let resultado: boolean = esMultiplo(45, 5);

if (resultado === true) {
  console.log("son multiplos");
} else {
  console.log("NO son multiplos");
}
