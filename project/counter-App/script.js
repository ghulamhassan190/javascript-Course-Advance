const number=document.querySelector('#number')
console.log(number);
console.log(number.textContent);

function decreaseHandler  (){
  // number.textContent=number.textContent-1
  if (number.textContent>0) {
    number.textContent-=1
    
  }
  // --number.textContent
}
 function increaseHandler (){
number.textContent=+number.textContent+1
 }
 function ResestHandler (){
number.textContent=0
 }
