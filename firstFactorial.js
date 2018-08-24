function FirstFactorial(num) { 

  // code goes here  
  if (num == 0) {
      return 1;
  } else {
     num *= FirstFactorial(num - 1);
  }
  return num; 
         
}
   
// keep this function call here 
FirstFactorial(readline());
