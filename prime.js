function checkPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      flag = true;
      break;
    }
  }
  if (flag) {
    console.log("Not Prime");
  } else {
    console.log("Prime");
  }
}

checkPrime(10);
