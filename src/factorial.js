const factorial = (number) => {
  // your code here
  let f =1;
  for (let i =1; i <= number;i++)
    f= f*i;

  return f;
  
}

module.exports = factorial;