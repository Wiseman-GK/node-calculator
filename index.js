const rs = require('readline-sync');
const operator = ['+', '-', '*', '/'];
function operation(){
  let numOne = rs.questionInt('Enter The First Number ');
  console.log(numOne);
  
  let opInput = rs.question('Enter An Operator ');
  console.log(numOne);
  if(operator.includes(opInput)){
    console.log(opInput);
  } else{
    console.log('Invalid Operator ');
    operation();
  }

  let numTwo = rs.questionInt('Enter The Second Number ');
  console.log(numTwo);

  if(opInput === '+'){
    console.log('Result: ', Number(numOne) + Number(numTwo));
  }
  if(opInput === '-'){
    console.log('Result: ', Number(numOne) - Number(numTwo));
  }
  if(opInput === '*'){
    console.log('Result: ', Number(numOne) * Number(numTwo));
  }
  if(opInput === '/'){
    if(numTwo === 0){
      console.log('Cannot Divide By Zero');
      operation()
    } else {
      console.log('Result: ', Number(numOne) / Number(numTwo));
    }
  }
}
operation();