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
// var resrturent="biryani"
// var cash=1000
// while(cash>0){
//   if (resrturent=="biryani") {
//     console.log('biryani khani 300rupe ki');
//     cash-=300
//     console.log(cash,"cash avaible after eating food");
//     resrturent="andaywalaburger"
//   }
//   else {
//     console.log('andaywalaburger khana 110rupe ka');
//     cash-=110
//     console.log(cash,"cash avaible after eating food");
//     resrturent="biryani"
//   }
// }
// ========================================================
                 // Method 2 type 
  // ======================================================
// const student={
//   name:"hassan",
//   greeting:function(){
//     console.log('salam');
    
//   }
// }
// const student2={
//   name:"hassan",
//   greeting(){
//     console.log('salam');
    
//   }
// }

// =================================================
//                   string Method 
// =================================================
// let names="hassan"
// console.log(names.length);
// console.log(names.toUpperCase());
// console.log(names.toLowerCase());
// console.log(names.charAt(0));
// console.log(names.charAt(names.length-1));
// console.log(names.indexOf("n"));
// console.log(names.trim());
// console.log(names.includes("hassan"));
// let friut=["biryani","korma"].slice(1,2)[0][0]
// console.log(friut);
// ==================================================
            // Template Litertals ES6 
// ==================================================

// console.log('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' + 'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');

// console.log(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`);
// =========================
//       Solution
// =========================
// function fullName(firstName,lastName){
//     // const result1= firstName+""+lastName; //concatination in ES5
//     const result2= `${firstName} ${lastName}`; //concatination in ES6
//     return result2.toUpperCase()
// }

// console.log(fullName("ghulam","hassan"))
// =======================================
// case sensitive
// =======================================

// var name1="GHULAM"
// var name2="hassan"

// console.log(name1,name1.toLowerCase());
// console.log(name2,name2.toUpperCase());

// ======================================
//    LENGTH
// ======================================

// var names="ghulam hassan"
// var a=names.split(" ")
// console.log(a);
// var myText="GHULAM hASsan"
// var newArr=[]
// var update=myText.split(" ")
// console.log(update);

// for (let i = 0; i < update.length; i++) {
//   // console.log(update[i]);
//   var newUpdate=update[i][0].toUpperCase()+update[i].slice(1).toLowerCase()
//     console.log(newUpdate);
//     newArr.push(newUpdate)
    
    
//   }
  
//   console.log(newArr.join(" "));
// ========================================
// var myName="GHULAM HASSAN"
// var count=0

// for (let i = 0; i < myName.length; i++) {
// if (myName[i]==="S") {
//   count++;
// }  
// }

// =================================================
//            ARRAY Method | in Javascript 
// =================================================
// const names = ["Ali", "Ahmed", "Sara", "Ayesha", "Usman", "Fatima"];console.log(names.length);
// console.log(names[names.length-1]);

// const studentName = [
//   "Ali","Ahmed","Sara","Ayesha","Usman","Fatima","Hassan","Hussain","Bilal","Zain",
//   "Hamza","Saad","Umar","Taha","Abdullah","Maryam","Noor","Iqra","Hira","Sana",
//   "Danish","Farhan","Talha","Rehan","Shayan","Kashif","Arham","Areeba","Laiba","Anaya",
//   "Mehwish","Rabia","Komal","Mahnoor","Bushra","Sadia","Asad","Noman","Imran","Adnan"
// ];

// console.log(studentName);
// console.log(names);
// const update=studentName.concat(names)
// console.log(update);
// console.log(update.reverse());

// console.log(names.unshift("ahmed"));
// console.log(names.shift("ahmed"));
// console.log(names);

// console.log(names.splice(2,1));
// console.log(names);

// =================================================
//            NUMBER Method | in Javascript 
// =================================================
// var num=50.78;
// console.log(Math.round(num));
// var number=Math.round(Math.random()*5+1)
// console.log(number);

var parseint="49.4"
var parsefloat="49.4"
console.log(parseInt(parseint));
console.log(parseFloat(parsefloat));

