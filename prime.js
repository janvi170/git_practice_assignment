function checkPrime(num){
for(i=0;i<=num;i++){
if(num%2!==0){
return true;
}
}
return false;
}
checkPrime(7);