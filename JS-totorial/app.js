// // loop in javascript
// for(i=0;i<100;i++){
//   console.log('hello',i);
  
// }

// var a ="Apple";
// while(a=="Apple"){
//   console.log("Apple is OK");
//   a="Banana"
// }

// ============================================
// Javascript Interivew | Loops | Palindrome
// ============================================
// var a=prompt()
// var b=a.length-1
// console.log(a,b);
// var c=''

// for ( i = b; i >=0; i--) {
//   console.log(a[i]);
//   c+=a[i]
//   console.log(c); 
// }

// if (a==c) {
//   console.log(" Palindrome value");
// }else{
//   console.log(" Not Palindrome value");
  
// }

// ==============================================
       //  Switch statement in javascript 
// ==============================================

// var day="Monday";
// switch(day){
//   case "Monday":
//     console.log("Monday is OK");
//     break;
//   case "Tuesday":
//     console.log("Tuesday is OK");
//     break;
//   case "Wednesday":
//     console.log("Wednesday is OK");
//     break;
//   case "friday":
//     console.log("friday is OK");
//     break;
//   default:
//     console.log("Invalid value");
    
// }


// ====================================================
//         While Loop & Do While Loop
// ====================================================
var resrturent="biryani"
var cash=1000
while(cash>0){
  if (resrturent=="biryani") {
    console.log('biryani khani 300rupe ki');
    cash-=300
    console.log(cash,"cash avaible after eating food");
    resrturent="andaywalaburger"
  }
  else {
    console.log('andaywalaburger khana 110rupe ka');
    cash-=110
    console.log(cash,"cash avaible after eating food");
    resrturent="biryani"
  }
}