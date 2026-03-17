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
// ======================================
//  parseInt| parseFloat
//  =====================================
// var parseint="49.4"
// var parsefloat="49.4"
// var number="49.4"
// var decimalvalue=Math.random()*10
// console.log(parseInt(parseint));
// console.log(parseFloat(parsefloat));
// console.log(Number(number));
// console.log(+decimalvalue.toFixed(2));

// var ceilNumber=1.1;
// console.log(Math.ceil(ceilNumber));

// ==================================
//     lodo | in | Javascript
// ==================================
// var Lodo=Math.ceil(Math.random()*6)
// console.log(Lodo);

// ==================================
//    PIValue | in | Javascript
// ==================================
// var PIValue=Math.PI
// console.log(PIValue);

// ==================================
//   SquareRoot | in | Javascript
// ==================================
// var SqrtValue=Math.sqrt(81)
// console.log(SqrtValue);

// ==================================
//    min max | in | Javascript
// ==================================
// var minValue=Math.min(2,4,5,6,7,8,44,2)
// var maxValue=Math.max(2,4,5,6,7,8,44,2)
// console.log(minValue,maxValue);

// ==========================================
// Convert Number to Words | in | Javascript
// ==========================================

// function convertNumberToWord(num) {
//        // if (num < 1) return "Zero"
//        if (num < 0) return "Invalid value"
//        if (num == 0) return "Invalid value"

//        const arr = ["", "One", "Two", "Three", "Four", "Five",
//               "Six", "Seven", "Eight", "Nine", "Ten",
//               "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
//               "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"]
//        let tens = [
//               "",
//               "",
//               "Twenty",
//               "Thirty",
//               "Forty",
//               "Fifty",
//               "Sixty",
//               "Seventy",
//               "Eighty",
//               "Ninety",
//               "One Hundred"
//        ];
//        let hundreds = [
//               "One Hundred",
//               "Two Hundred",
//               "Three Hundred",
//               "Four Hundred",
//               "Five Hundred",
//               "Six Hundred",
//               "Seven Hundred",
//               "Eight Hundred",
//               "Nine Hundred",
//               "One Thousand"
//        ];

//        function hundredlessthen(num) {
//               if (num <= 20) return arr[num]
//               if (num % 10 === 0) {
//                      return tens[Math.floor(num / 10)]
//               }
//               return tens[Math.floor(num / 10)] + " " + arr[num % 10]
//        }
//        function thousandlessthen(num) {
//               if (num % 100 === 0) {
//                      return hundreds[Math.floor(num / 100)]
//               }
//               return hundreds[Math.floor(num / 100)] + " and " + hundredlessthen(num % 100)
//        } function tenthousandlessthen(num) {
//               if (num % 1000 === 0) {
//                      return arr[Math.floor(num / 1000)] + " thousand"
//               }

//               if ((num % 1000) < 100) {
//                      return arr[Math.floor(num / 1000)] + " thousand and " + hundredlessthen(num % 1000)
//               }

//               return arr[Math.floor(num / 1000)] + " thousand " + thousandlessthen(num % 1000)
//        }
//        if (num < 20) {
//               return arr[num]
//        }
//        if (num < 100) {
//               return hundredlessthen(num)
//        }

//        if (num < 1000) {
//               return thousandlessthen(num)

//        }

//        if (num < 10000) {
//               return tenthousandlessthen(num)

//        }

//        if (num < 100000) {
//               return arr[Math.floor(num / 10000)] + " thousand " + tenthousandlessthen(num % 10000)
//        }

// }
// console.log(convertNumberToWord(449));

// ===========================================
// Date|Time|In|JavaScript 
// ===========================================
// var curruntDate=new Date()
// console.log(curruntDate);

// console.log(curruntDate.getFullYear());
// console.log(curruntDate.getHours());
// console.log(curruntDate.getMilliseconds());
// console.log(curruntDate.getMinutes());
// console.log(curruntDate.getMonth());
// console.log(curruntDate.getSeconds());
// console.log(curruntDate.getTime());
// console.log(curruntDate.getTimezoneOffset());
// console.log(curruntDate.getUTCDate());

// ===============================================
//         Day|Check|In|Javascript
// ===============================================
// var curruntDate=new Date()
// var Day=curruntDate.getDay()
// var arr=["sun","mon","tues","wednes","fri","sat"]
// console.log(arr[Day])


// ===============================================
//         MONTH|Check|In|Javascript
// ===============================================
// var curruntDate=new Date()
// var monthsCheck=curruntDate.getMonth()
// const months = ["January","February","March","April","May","June","July", "August","September", "October","November", "December"
// ];
// console.log(months[monthsCheck])

// =================================================
//           AM|PM|CHANGE|IN|JAVASCRIPT
// =================================================
// var curruntDate=new Date()
// curruntDate.setHours("23")
//   if (curruntDate.getHours()>12) {
//        document.writeln(`It is Hours ${curruntDate.getHours() - 12 } PM`)
// } else {
//          document.writeln(`It is Hours ${curruntDate.getHours() } AM`)

//   }
// ==================
//     EXAMPLE
// ==================
// const months = ["January","February","March","April","May","June","July", "August","September", "October","November", "December"
// ];
// document.writeln("Our Quiz and happens in " + " " +curruntDate.getDate() + " "+
// months[curruntDate.getMonth()] +" "+ curruntDate.getFullYear())

// =============================================
//             EVENT|IN|JAVASCRIPT  
// =============================================
//   onclick
//   mouseOver
//   mouseout
//   mouseLeave

// =============================================
//         EVENT|INPUT|FIELD|IN|JAVASCRIPT  
// =============================================
// function nameFocus() {
//        console.log("nameFocus");
// }
// function nameblur() {
//        console.log("nameblur se hata ");
// }
// function emailFocus() {
//        console.log("emailFocus");
// }
// function passwordFocus() {
//        console.log("passwordFocus");
// }

// =============================================
//SIGNUP|FORM|IN|JAVASCRIPT
// =============================================


// function signupHandle(){
//        console.log("signuup Button ready");  
//        var firstName=document.getElementById("firstName").value 
//        var lastName=document.getElementById("lastName").value 
//        var email=document.getElementById("email").value 
//        var password=document.getElementById("password").value 
//        var confirmPassword=document.getElementById("confirmPassword").value 
//        console.log(firstName,lastName,email,password,confirmPassword);

// }


// complete text visible 
// var aboutMe=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quasi fugit quas obcaecati. Repellendus velit alias vel amet laboriosam nostrum ut, natus, veritatis quod cumque labore quo, magni distinctio ea enim harum minus? Placeat nobis, fugiat et, dolorem laboriosam similique natus ipsa dignissimos asperiores expedita magni. Aliquid, impedit laboriosam? Ad.`
// var para=document.getElementById("para")
// para.innerText=aboutMe.slice(0,55)+ "..."


// function Change(){
//        para.innerText=aboutMe.slice(0)
// }
// function ChangeLess(){
//        para.innerText=aboutMe.slice(0,55)
// }


// =============================================
//CHANGE|THEME|IN|JAVASCRIPT
// =============================================

// function ChnageTheme(){
//        // document.getElementsByTagName("div")[0].className="dark"
//        if (document.getElementsByTagName("div")[0].className=="dark") {
//               document.getElementsByTagName("div")[0].className="light"
//        } else {
//               document.getElementsByTagName("div")[0].className="dark"
//        }
// }
// =============================================
//FONTSIZE|INCREASE|IN|JAVASCRIPT
// =============================================
var fontSize = 16;
function increasesize() {
       if (fontSize<40) {
              console.log('ok');
              var para = document.getElementsByTagName("p")
              fontSize += 2
              for (let i = 0; i < para.length; i++) {
                     console.log(para[i].style.fontSize = fontSize + "px");
              }
              
       }


}
function decreasesize() {
       console.log('ok');
       if (fontSize > 16) {
              var para = document.getElementsByTagName("p")
              fontSize -= 2
              for (let i = 0; i < para.length; i++) {
                     console.log(para[i].style.fontSize = fontSize + "px");
              }
       }


}