
function prime(number){
  let factors=0;
for(let i=1; i<=number; i++){
  if(number%i){
    factors++;
    }
  }
    if(factors==2){
        return true;
    }
      return false;
}

   let answer = prime(13);
    if(answer==true){
      console.log("Prime");
    } else {
      console.log("Not prime");
  }
      

