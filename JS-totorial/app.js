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
//     FONTSIZE|INCREASE|IN|JAVASCRIPT
// =============================================
// var fontSize = 16;
// function increasesize() {
//        if (fontSize<30) {
//               console.log('ok');
//               var para = document.getElementsByTagName("p")
//               fontSize += 2
//               for (let i = 0; i < para.length; i++) {
//                      console.log(para[i].style.fontSize = fontSize + "px");
//               }      
//        }else{
//               alert("Full FontSize")
//        }
// }
// function decreasesize() {
//        console.log('ok');
//        if (fontSize > 12) {
//               var para = document.getElementsByTagName("p")
//               fontSize -= 2
//               for (let i = 0; i < para.length; i++) {
//                      console.log(para[i].style.fontSize = fontSize + "px");
//               }
//        }
// }

// =============================================
//      CLICK|BALL|IN|JAVASCRIPT
// =============================================
// function ballroundho(){
//        document.getElementsByTagName("div")[0].style.borderRadius="50%"
//        document.getElementsByTagName("div")[0].style.transform="translateX(100px)"
// }

// =============================================
//      JUNK|ARTIFACTS|IN|JAVASCRIPT
// =============================================
// document.childNodes[0]


// =============================================
//      SET|ATTRIBUTE|IN|JAVASCRIPT
// =============================================
// var createElement=document.createElement("button")
// document.children[0].children[1].appendChild(createElement)
// createElement.innerText="clickme"




// =============================================
//      GET|ATTRIBUTE|IN|JAVASCRIPT
// =============================================
// var createElement=document.createElement("button")
// document.children[0].children[1].appendChild(createElement)
// createElement.innerText="clickme"
// createElement.setAttribute("style","background-color:red;")

// console.log(createElement.getAttribute("style"));
// console.log(createElement.hasAttribute("style"));
// console.log(createElement.attributes);

// =============================================
//      REMOVE|ATTRIBUTE|IN|JAVASCRIPT
// ==============================================

// var createElement=document.createElement("button")
// document.children[0].children[1].appendChild(createElement)
// createElement.innerText="clickme"
// createElement.setAttribute("style","background-color:red;")
// createElement.removeAttribute("style")

// =============================================
//     GLOBAL_LOCAL_VARIABLE|IN|JAVASCRIPT
// ==============================================

// console.log(a);
// var a="hassan"

// console.log(b);
// let b="bilal"

// console.log(c);
// const c="raza"


// global scope ===> var 
// script scope ===> let const 
// function ---> local scope ===>var 
// block scope ===> let const 

// let names='bobo';
// names='peter';

// function calculate(){
//   //some other code .....
//   console.log(names);
//   names='orange'

// }
// calculate();
// console.log(`my name is ${names} i am awosome`);


// {
//   var a="Me Abdul Basit"
//   let b="IBAD Ahmed"
// }

// locub ==> global varible | function mein us

// ====================================================
//       HIGH|ORDER|FUNCTION|CALLBACK|IN|JAVASCRIPT
// ====================================================
// EXAMPLE # 01
//------
// function first(){
//   console.log('first function');
// }
// function second(value){
//   console.log(value()); 
// }
// const a=first
// second(a)

// EXAMPLE # 02
//------

// function outer(callback){
//   console.log('outer function');
//     callback()
// }
// function inner(){
//   console.log('inner function');
// }

// outer(inner)


// EXAMPLE # 03
//------


// function foo(naam){
//   return naam.toUpperCase()
// }

// function foo2(name,callback){
//   console.log(`${callback(name)} this is callback function`);

// }
// foo2("ghulam Hassan",foo)



// EXAMPLE # 04
//------

// function makeTheCorect(firstName, lastName) {
//   return `${firstName[0].toUpperCase() + firstName.slice(1).toLowerCase()}
//   ${lastName[0].toUpperCase() + lastName.slice(1).toLowerCase()} 
//   `
// }
// function welcomePage(firstName, lastName, callback) {
//   console.log(` Hi Mr ${callback(firstName, lastName)} Welcome the personal project`);

// }

// welcomePage("GhUlAm " ,"HaSaSAn", makeTheCorect)

// ==========================================================
//    Array|Powerful|Methods-Part 1|forEach|map|filter 
// ==========================================================
// const resrturent=["Biryani","Korma","Nahari"]
// resrturent.forEach(function (item,index) {
//   console.log(item,index);
  
// })


// const People = [
//   { name: "Ali", age: 25,city: "Karachi"},
//   {name: "Sara",age: 22,city: "Lahore"},
//   {name: "Fatima",age: 20,city: "Queta"},
  
// ];

// People.forEach((item)=>{
//   console.log(item.city.toUpperCase());
// })

//               map high order function 
// const People = [
//   { name: "Ali", age: 25,city: "Karachi"},
//   {name: "Sara",age: 22,city: "Lahore"},
//   {name: "Fatima",age: 20,city: "Queta"},
  
// ];

// const kushbhi =People.map((item)=>{
//   // console.log(item.city.toUpperCase());
//    return `<h1>${item.name}</h1>`
// })

// document.body.innerHTML=kushbhi.join(" ")


// const People = [
//   { name: "Ali", age: 25,city: "Karachi"},
//   {name: "Sara",age: 22,city: "Lahore"},
//   {name: "Fatima",age: 20,city: "Queta"},
  
// ];

// const newArr=People.filter((item)=>{
//   return item.age<25
// })

// console.log(newArr);


// repeatative element remove 
//bring repeatative element 
// const arr =["Hassan","raza","ahmed","sufiyan","ahmed","sufiyan"]
// const uniqueNames={}
// arr.forEach((name)=>{
//   if (uniqueNames.hasOwnProperty(name)) {
//     console.log('===> phly se avaible hai ');
//     uniqueNames[name]+=1
//   } else {
//     uniqueNames[name]=1
//     console.log('property nhi hai ');
    
//   }
// })

// console.log(uniqueNames,arr);

// const uniqueNames=[]
// arr.forEach((name)=>{
//   if (uniqueNames.includes(name)) {
//     console.log('===> phly se avaible hai ');
    
//   } else {
//     uniqueNames.push(name)
//   }
// })

// console.log(uniqueNames,arr);


// const resrturent=[
//   {name:"Biryani",price:200},
//   {name:"Korma",price:300},
//   {name:"Nahari",price:600},
//   {name:"labeshreen",price:500}
// ]

// const marziKaItem=resrturent.filter(function(foodItem){
//   if (foodItem.price>100) {
//     return foodItem
//   } 
// }).map(function(foodItem){
//  return foodItem.name +" with Cold Drink"
// })


  // const resrturents=[
  //   {name:"Biryani",price:200},
  //   {name:"Korma",price:300},
  //   {name:"Korma",price:300},
  //   {name:"Nahari",price:600},
  //   {name:"labeshreen",price:500}
  // ]

  // const updates=resrturents.filter(function (food){
  //   if (food.name.startsWith('K')) {
  //     return food
  //   }
  // })
  
  // const resrturent=[
  //   {name:"Biryani",price:200},
  //   {name:"Korma",price:300},
  //   {name:"Nahari",price:600},
  //   {name:"labeshreen",price:500},
  //   {name:"labeshreen",price:500},
  // ]

  // const update=resrturent.filter(function (food){
  //   if (food.name.startsWith('l')) {
  //     return food
  //   }
  // }).map(function(food){
  //    return `<h1>${food.name} is price ${food.price}</h1>`
  // })

  
  // console.log(document.body.innerHTML=update.join(''));

  


//   const student=[
//   {
//     "id": 1,
//     "name": "Ali",
//     "marks": 85,
//     "subject": "Math"
//   },
//   {
//     "id": 2,
//     "name": "Sara",
//     "marks": 90,
//     "subject": "Science"
//   },
//   {
//     "id": 3,
//     "name": "Ahmed",
//     "marks": 78,
//     "subject": "English"
//   },
//   {
//     "id": 4,
//     "name": "Ayesha",
//     "marks": 88,
//     "subject": "Computer"
//   },
//   {
//     "id": 5,
//     "name": "Bilal",
//     "marks": 92,
//     "subject": "Physics"
//   }
// ]
// const update=student.map(function(item){
//   // item.role="student"
//   // item['role']="student"
//   return {
//     ...item,
//     role:"student"
//   }
// })

// console.log(update);


// const filterValue=student.filter(function(std){
//   if (std.marks>=80) {
//     return true
//   }
// })

// console.log(filterValue);

// const findValue=student.find(function(std){
//   if (std.id===4) {
//     return true
//   }
// })

// console.log(findValue);

// reduce high order function 
// const foodItem=["Biryani","Korma ","Nahari"]


// foodItem.forEach(function(item,idxItem){
//   console.log(item);
//   console.log(idxItem);
  
// })


  
//   const foodItem=[
//     {name:"Biryani",price:200},
//     {name:"Korma",price:300},
//     {name:"Nahari",price:600},
//     {name:"labeshreen",price:500},
//     {name:"labeshreen",price:500},
//   ]
//  const uupdate =foodItem.reduce(function(item,idxItem){

//   return item + idxItem.price
// },0)
// console.log(uupdate);


//   const student=[
//   {
//     "id": 1,
//     "name": "Ali",
//     "score": 85,
//     "favSubject": "Math"
//   },
//   {
//     "id": 2,
//     "name": "Sara",
//     "score": 90,
//     "favSubject": "Science"
//   },
//   {
//     "id": 3,
//     "name": "Ahmed",
//     "score": 78,
//     "favSubject": "English"
//   },
//   {
//     "id": 4,
//     "name": "Ayesha",
//     "score": 88,
//     "favSubject": "Computer"
//   },
//   {
//     "id": 5,
//     "name": "Bilal",
//     "score": 92,
//     "favSubject": "Physics"
//   }
// ]

// const totalValue=student.reduce(function(acc,curr,indNum,arr){
//   return acc + curr.score
// },0)

// console.log(totalValue);
// const averageValue=totalValue/student.length
// console.log(averageValue);

// const update=student.reduce(function(acc,curr,idxNum,arr){
//   // console.log(acc[curr.favSubject]);
//   acc[curr.favSubject]=(acc[curr.favSubject]||0)+1
//   return acc
// },{})


// =================================================
            // DOM|IN|JAVASCRIPT
// =================================================
// document.body.style.background="red
// const hassan=document.getElementById("hassan")
// hassan.style.color="red"
// hassan.style.background="yellow"
// hassan.style.border="2px solid black"
// const hassan=document.getElementsByTagName("h1")
// const classname=document.getElementsByClassName("raza")
// const classname=document.querySelectorAll(".raza")
// // console.log(hassan.nodeName);
// // console.log(hassan.style);
// console.log(classname);


// let widthplus=250
// var img=document.querySelector('img')
// console.log(img);

// function increase(){
//   img.width+=5
  
// }

// ============================================
//JavaScript DOM Manipulation – Part 9 
//(Creating & Inserting Elements Dynamically)
// ============================================

// const bodyDiv=document.createElement('div')
// const text=document.createTextNode('A simple is web page')
// bodyDiv.appendChild(text)
// document.body.appendChild(bodyDiv)

// const heading2=document.createElement('h2');
// document.body.appendChild(heading2)
// heading2.innerText='Aftab'

// const heading2=document.createElement('h2');
// const unorderList=document.createElement('ul')
// const List=document.createElement('li')
// const achorTag=document.createElement('a')
// achorTag.innerText="Facebook"
// achorTag.setAttribute("href","http://facebook.com")


// unorderList.appendChild(List)
// const text =document.createTextNode('Aftab')
// heading2.appendChild(text)
// document.body.appendChild(heading2)
// document.body.appendChild(achorTag)

// // document.body.prepend(unorderList)
// // document.body.insertBefore(unorderList,heading2)

// List.innerText="apple"

// const element=document.createElement('h2')
// element.innerText='ghulam Hassan'
// document.body.appendChild(element)

// appendChild
// prepend
// insertBefore
// replaceChild
//remove
// const element=document.createElement('h2')
// element.innerText='ghulam Hassan'
// document.body.appendChild(element)
// element.remove()

// classname 
// classlist
// const h2=document.querySelector('h1')

// =============================================
        // ADDEVENTLISHNER|IN|JAVASCRIPT 
// =============================================
// const div=document.querySelector('h2')
// const addeventH1=document.querySelector('#Hassan')
// addeventH1.addEventListener('click',function(){
  //   console.log('h1 click ');
  //   div.style.background="red"
  
  // })
  
//   const userNameInput=document.querySelector('#userName')
//   // userNameInput.addEventListener('keyup',()=>{
//   //   console.log('keyup hoi hai');
    
//   // })
//   // userNameInput.addEventListener('keypress',(e)=>{
//   //   console.log('keyup hoi hai',e);
    
//   // })
//   userNameInput.addEventListener('click',(e)=>{
//     console.log('curruent Element using e.target',e.target);
//     console.log('curruent Element using e.target',e.currentTarget);
//     console.log('type check using e.type',e.type);
    
//   })

//   document.querySelector('#btn').addEventListener('click',(e)=>{
// console.log('ok');
// e.preventDefault()

//   })



// function add(num1,num2) {
//   return num1+num2
// }
// const a =add(2,3)
// const allPara=document.querySelectorAll('p')
// allPara.forEach((item)=>{
//   item.addEventListener('click',function(e){
//     e.target.style.background="green"
//   })
  
// })


//  ============================================================= 
//                  LOCALSTORAGE|IN|JAVASCRIPT 
//  =============================================================


// const submitBtn=document.querySelector('button')
// submitBtn.addEventListener('click',()=>{
//   const signupObj={}
//   console.log('submit per click howa ');
//   const input=document.querySelectorAll('input')
//   console.log(input);
//   input.forEach((item)=>{
//     console.log(item.value);
//     signupObj[item.placeholder]=item.value
//   })
//   console.log();
//   localStorage.setItem('userDetail',JSON.stringify(signupObj))
//   renderUi()
// })


// function renderUi(){
//   const heading=document.querySelector('#renderH1')
//   const username=localStorage.getItem('userDetail')
//   const usernameJson=JSON.parse(username)
//   console.log(usernameJson);
//   const {FirstName,SecondName,userName,email}=usernameJson
  
//   // const SecondName=localStorage.getItem('SecondName')
//   // const email=localStorage.getItem('email')
//   // const userName=localStorage.getItem('userName')
// // console.log(detail);


//   heading.textContent=`Hi,Mr ${FirstName} ${SecondName} your userName is ${usernameJson.userName} and your email ${email}`
// }

// renderUi()



//  ============================================================= 
//                  Settimeout|IN|JAVASCRIPT 
//  =============================================================
// function sayHello() {
//   const date=new Date()
//   console.log('hello',date);
  
// }

// const interval=setInterval(sayHello,1000)
// // setTimeout(sayHello,500)
// setTimeout(clearInterval,2000,interval)


//  ============================================================= 
//        Dot Notation vs Bracket Notation|IN|JAVASCRIPT 
//  =============================================================

// const student={
//   name:'ghulam hassan',
//   age:30,
//   course:'web and app development',
//   student:'martric'
// }

// console.log(student.name);
// console.log(student['name']);


//  ============================================================= 
//                     this|IN|JAVASCRIPT 
//  =============================================================
// const jonas={
//   firstName:"Jonas",
//   lastName:"Schmedt mann",
//   birthYeah:2007,
//   job:"teacher",
//   friends:["Michael","Peter","raza"],
//   hasDriversLicence:true,
//   calcAge:function(){
//     console.log(this);
//     return 2026-this.birthYeah
//   },
//   nickNameFoo:function(){
//     return console.log(this.username=this.lastName.split(' ')[1]);
    
    
//   }
// }

// console.log(jonas.nickNameFoo());


// object 
// const stud1={
//   name:"Ahmed Raza",
//   batch:16,
//   courseName:"Web n App",
//   module:"2nd",
//   campus:"Bahadurabbad",
//   skills:["Html","css","javascript"],
//   isMernDeveloper:false
// }
// console.log(stud1.courseName);
// console.log(stud1.module); 


// Constructor
// function StudentData(name,batch,courseName,module,campus,skills,isMernDeveloper){
// this.name=name
// this.batch =batch
// this.courseName =courseName
// this.module =module
// this.campus =campus
// this.skills =skills
// this.isMernDeveloper =isMernDeveloper

// }

// const data1=new StudentData("Ahmed Raza",16,"web n app","2nd","Bahadurabbad",["Html","css","javascript"],false)
// console.log(data1);

// StudentData.prototype.calcAge=function (birthYear) {
//   let date=new Date();
//   return date.getFullYear()-birthYear
// }

// console.log(data1.hasOwnProperty("name"));
// window.location.href
// // 'https://chatgpt.com/'
// window.location.hostname
// // 'chatgpt.com'
// window.location.pathname
// // '/'
// document.referrer
// var window11 = window.open();

// if (window11) {
//     window11.document.write("<h1>Welcome Hello</h1>");
// } else {
//     console.log("Popup blocked!");
// }

// window.open("https://chatgpt.com/","win2","height=230,width=430,")

// var inputValue=document.querySelector('input')
// document.querySelector('form').addEventListener('submit',function(e){
// e.preventDefault()
// console.log('ok');
// // console.log(document.querySelector('select').value);
// console.log(document.querySelector('select').selectedIndex);
// if (document.querySelector('select').selectedIndex==0) {
//   alert('please correct value')
// }
// if (inputValue.value.indexOf(" ")>=0) {
//   alert("please no space ")
// }

// })


// try{
//   const userName=prompt("Hello ap kon hai ")

//   if (userName=="hassan") {
//     console.log("all Good");
    
//   }

//   if (userName=="raza") {
//     throw {
//       status:false,
//       message:"raza not allowed"
//     }
//   }
//   if (userName=="ali") {
//     throw {
//       status:true,
//       message:"ali not allowed"
//     }
//   }
//   if (userName=="hussain") {
//     throw {
//       status:false,
//       message:"hussain not allowed"
//     }
//   }
//   console.log('ol');
  
// }catch(error){
// console.log(error);
// const heading1=document.createElement('h1')
// document.body.appendChild(heading1)
// heading1.textContent=error.message

// if (error.status==true) {
//   heading1.style.background="green"
// }else{
//   heading1.style.background="red"

// }
// }


// const a="hassan"
// var b= "hassan"

// console.log(a);
// console.log(b);


// --------------------------HOISTING---------------------- 
// {
//   console.log(b);
//   let b=20
  
// }


// foo()
// function foo(){
//   let b=20
//   console.log(b);
// }
// console.log(a);
// var a ="ghulam hassan"

// console.log(a);
// let a ="ghulam hassan"

// -------|-------------
// TDZ=> Temporal Dead Zone
// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
// step 1
// var name="Ahmed RAZA"
// console.log(this.a);

// step 2
// function foo(){
//   console.log(this);
  
// }
// foo()
// step 3
// var obj={
//   name:"ghulam hassan3",
//   leaning:function(){
//     console.log(`${this.name} is final name`);

//   }
// }

// obj.leaning()

// var obj1={
  //   name:"ghulam hassan3",
  //   leaning:()=>{
//     console.log(`${this.name} is final name`);

//   }
// }

// obj1.leaning()


// document.querySelector('#renderH1').addEventListener("click",function(){
//   console.log(this);
// })


// const talha ={
//   name:"talha",
//   foo:function(){
//     console.log(this);
//     console.log(this.name);
    
    
//   }
// }
//  console.log(talha);
//  console.log(talha.foo());
 
//  const ahmed ={
//    name:"ahmed",
//   }
  
//   ahmed.foo=talha.foo

//  console.log(ahmed);
//  console.log(ahmed.foo());


//  const c=talha.foo
//  console.log(c);
//  console.log(c());
 

// const obj={
//   name:"raza",
//   func:foo
// }
// console.log(obj.func());

// ----------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------------

// Object.assign
  // const obj={
  //   name:"hassan"
  // }
  // const objcopy=Object.assign({},obj)
  // objcopy.lastName="raza"
  // console.log(obj);
  // console.log(objcopy);
 
  // spread operator
  // const obj1={
  //   ...obj,
  //   name:"raza"
  // }
  // console.log(obj1);
  

  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // const students=['talha',"ahmed","shoaib","bilal"]
  // console.log(students[0]);
  // console.log(students[1]);
  // console.log(students[2]);
  
  // destructuring
// const [a,b,c]=students
// console.log(a);
// console.log(b);
// console.log(c);
// -----------------------------------
// const trainer={
//   name:"ghulam hassan",
//   class:[1,2,3,4,5,6,7,8,9,10],
//   course:"web n app",
//   institute:"smit",
//   profession:"web development",
//   techStack:"js"
// }
// console.log(trainer);

// // destructuring
// const {name,course,institute}=trainer
// console.log(name);
// console.log(course);
// console.log(institute);


// spread operator
// rest operator

//        rest = spread 
// const [v,z,...all]=[1,2,3,4,5]
// console.log(v,z,all);

// Array
// const students=['talha',"ahmed","shoaib","bilal"]

// const [first,second,...other]=students
// console.log(first);
// console.log(second);
// console.log(other);

// Object
// const trainer={
  //   name:"ghulam hassan",
  //   class:[1,2,3,4,5,6,7,8,9,10],
//   course:"web n app",
//   institute:"smit",
//   profession:"web development",
//   techStack:"js"
// }
// const {name,course,...others}=trainer
// console.log(name);
// console.log(course);
// console.log(others);

// function
// const add =function(...number){
//   console.log(number);
  
// }
// add(2,3,4)
// add(2,3,4,5,4,3)
// add(2,3,4,5)

// ------------------------------------------------------------------- 
// New operators (nullish, or assignment, nullassignment, andassignment)
// -------------------------------------------------------------------
// nullish
// const numberOfApplicants=null
// console.log(numberOfApplicants??"New Value");

// or assignment
// const rest1={
  //   name:"raza",
  //   age:20
// }
// const rest2={
//   name:"ahmed",
// }
// console.log(rest1);
// console.log(rest2);


// rest1.age||=100
// rest2.age||=100

// console.log(rest1);
// console.log(rest2);

// const rest1={
//   name:"raza",
//   age:20
// }
// const rest2={
  //   name:"ahmed",
  // }
// console.log(rest1);
// console.log(rest2);


// rest1.age??=100
// rest2.age??=100

// console.log(rest1);
// console.log(rest2);

// for of loop    
// const students=['talha',"ahmed","shoaib","bilal"]
// for (const student of students.entries()) {
//   console.log(student);
// }

// const rest1={
//   name:"raza",
//   age:20
// }


// console.log(Object.entries(rest1));

//                     Optional Chaining
// const obj={
//   name:"hassan",
//   course:{
//     name:"web n App"
//   },
//   student:"10"
// }

// console.log(obj?.university?.name);
// console.log(obj.course.name);

//  Object.keys & Object.values Explained
// console.log(Object.keys(obj));
// console.log(Object.values(obj));


// ------------------------------------------------------------------- 
                     //  Set | Map 
// -------------------------------------------------------------------
// const orderSet=new Set([
//   "pasta","pasta","pasta"
// ])

// console.log(orderSet.size);
// console.log(orderSet.add("hassan"));
// console.log(orderSet.add("hassan"));
// console.log(orderSet.has("pasta"));

// console.log(orderSet);

// const staff=["Waiter","Chef","Waiter","Chef","Mangers"]

// const newStaff=[...new Set(staff)]
// console.log(newStaff);


// const obj1=new Map();
// obj1.set(1," hassan")
// obj1.set("name","ghulam hassan")

// console.log(obj1.get("name"));
// console.log(obj1.get(1));

// const names="Ahmed Raza".split(' ')[1].toUpperCase()
// console.log(names);


// =========================================================================
                  // padStart & padEnd in JavaScript
// =========================================================================
// const message="ghulam hassan!"
// console.log(message.padStart(20,"+").padEnd(30,"+"))


// const email ='ghulamhassan@gmail.com'
// console.log(email.slice(4,-4).padEnd(email.length-4,"*").padStart(email.length,"*"));


// const number="03463628863"
// console.log(number.slice(0,7).padEnd(11,"*"));


// function marksValue(number){
// const str=number +"";
// const last = str.slice(-4)
// return last.padStart(str.length,"*")
// }

// console.log(marksValue(49309404));
// console.log(marksValue(49309404589676904));
// console.log(marksValue(49309404569805060608059));

// repeat 
// const message2="ghulam hassan"
// console.log(message2.repeat(5));

// function message(n){
//   console.log(`ghulam hasssan ${n} ${"🛺".repeat(n)}`);
// }
// message(5)

// example 
// const filghts="FlightNo: PK302, From: Karachi, To: Lahore, Departure: 10:30 AM, Arrival: 12:00 PM, Status: On Time+FlightNo: PK303, From: Lahore, To: Karachi, Departure: 02:00 PM, Arrival: 03:30 PM, Status: Delayed+FlightNo: PK304, From: Islamabad, To: Karachi, Departure: 06:00 AM, Arrival: 08:00 AM, Status: On Time+FlightNo: PK305, From: Karachi, To: Dubai, Departure: 09:00 PM, Arrival: 11:30 PM, Status: Cancelled"

// // console.log(filghts.split("+"));

// for (const filght of filghts.split("+")) {
  //   // console.log(filght);
  //   const [type,from,to ,time]=filght.split(":")
  //   console.log(`${type} ${from} ${to} ${time}`);
  
  
  // }
  
// default parameter
// const bookings=[];
// const createBooking=function(flightNum,numPassengers=10,price=199*1.2){
  //   const booking={
//     flightNum,
//     numPassengers,
//     price
//   }
//   console.log(booking);
//   console.log(bookings.push(booking));
//   console.log(bookings);

// }
// createBooking("H4783")
// createBooking("H4783",9,800)

// =========================================================================
              // First-Class vs Higher-Order vs Callback vs Closure
// =========================================================================
// function foo(){
// console.log('ok ');

// }
// foo()

// (function(){
// console.log('ok');

// }())

// const foo=(name)=>{
// return name.toUpperCase()
// }
// console.log(foo("hassan"));

// const foo2=(name)=> name.toUpperCase() 
// console.log(foo2("raza"));


// function count(){
//   let counter=0;
//   return function (){
//     counter++
//   }
// }
// console.log(count());

// example
// const greet=function (greeting){
//   var a="Mern Stack"
//   return function(name){
//     console.log('===>');
//     var b="Development"
//     return function(){  
//       return name.toUpperCase()+" " + a  +  b
//     }
    
//   }
// }
// console.log(greet()("Ghulam Hassan")());


// ==================================================================
// call() & apply() in JavaScript 🔥 | THIS Keyword Control Explained
// ==================================================================
// const lufthansa={
  //   airline:"Lifthansa",
  //   iATACode:"LH",
//   bookings:[],
//   book(flights,name){
//     console.log(
//       `${name} booked a seat on ${this.airline} 
//       flight ${this.iATACode} ${flights}
//       `
//     );
    
//   }
// }

// console.log(lufthansa.book(494,"HAssan"));
// console.log(lufthansa);

// const book = lufthansa.book
// const pia={airline:"PIA",iATACode:"P2375"}
// const saudiAirline={airline:"Sudai",iATACode:"S2375"}

// book.call(pia,1,"sufiyan")
// book.call(saudiAirline,98,"HAssan")

// const calTotal=function(){
//   console.log(this.scores[0]+this.scores[1]+this.scores[2]);
// }
// const std1={name:"jaffer",scores:[90,80,70]}
// const std2={name:"HAssan",scores:[10,70,40]}
// const std3={name:"RAza",scores:[50,0,60]}

// calTotal.call(std1)
// calTotal.call(std2)
// calTotal.call(std3)
// const filightData=[500,"HASSAN"]
// book.apply(saudiAirline,filightData)


// 👉 call() method function ko immediately call karta hai aur this ko set karta hai, jab ke arguments ko individually (comma-separated) pass kiya jata hai.

// 👉 apply() method function ko immediately call karta hai aur this ko set karta hai, jab ke arguments ko array (ya array-like object) ki form mein pass kiya jata hai.

// 👉 bind() method function ko immediately call nahi karta, balki ek naya function return karta hai jisme this set hota hai aur baad mein call kiya ja sakta hai.
// const bindnew=book.bind(saudiAirline)
// bindnew(500,"HASSAN")


// const pia={
//   airline:"PTA",
//   planes:300,
//   buyPlanes(){
//     this.planes++
//     console.log(this.planes);
//   }
// }

// document.querySelector('button').addEventListener("click",pia.buyPlanes.bind(pia))
  // ==================================================================
  // Synchronous vs Asynchronous JavaScript 🔥 | Explained with Real Example
  // ==================================================================
  //  const a="a"

  //  console.log(a,"===>");

  //  setTimeout(function(){
  //   console.log('after 3 second');
  //  },0)
  //  console.log("set time out after");
   
  // ==================================================================
  //     What is an API? 🔥 | First API Call Explained for Beginners
  // ==================================================================

  // #Promise JavaScript ka ek object hota hai jo asynchronous operation ka result represent karta hai — ya to future mein complete hoga (resolve) ya fail hoga (reject).

//   const img=document.querySelector("img")
//   const cardTitle=document.querySelector(".card-title")
//   const cardText=document.querySelector(".card-text")
  
//   const request=fetch(" https://restcountries.com/v3.1/name/pakistan")

//   request.then(function(result){
//     return result.json()
//   }).then(function(result){
//     console.log(result[0]);
//     renderitem(result)
   
//   })
  
//   console.log(request);
  
//   function renderitem(countryDetails){
//     const [countryData]=countryDetails
//     const  {flags,name}=countryData
//     const {common,official}=name
//  img.src=flags.png
//     cardTitle.textContent=common
//     cardText.textContent=official
//   }

// =========================================================================
        //  Microtask vs Callback Queue | Event Loop Deep Dive
// =========================================================================
// Microtask Queue ==> important Task 
// Callback Queue  ==> Normal Task 
// JavaScript |single-threaded| hota hai (ek time par sirf ek kaam karta hai) lekin |non-blocking| hota hai (baqi kaam rukte nahi, async tareeke se handle ho jate hain).

// Promise ----> result ----> then/cache 
// Promise -----> return -----> Promise
// Promise ====> constructor   | Higher Order Function
// new Promise(function(resolve,reject){
// })

// Interview Question 
// console.log('Test Start ');
// setTimeout(()=>console.log('0 sec timer '),0)
// Promise.resolve("Resolved").then(res=>console.log(res))
// console.log('Test end ');



// const test=new Promise(( resolve,reject)=>{
//   resolve("HAssan")
// })

// test.then((result)=>{
//   console.log(result);
  
// })


// Promise.resolve("Muhammad").then((result)=>console.log(result))
// Promise.reject(new Error("problems!")).catch((error)=>{
//   console.log(error);
  
// })

// const lotteryPromise=new Promise(( resolve,reject)=>{
//   if (Math.random()>0.5) {
//     resolve("You Win")
//   }else{
//     reject("You lose your Money")
//   }
// })

// lotteryPromise.then(res=>console.log(res))
// lotteryPromise.catch(e=>console.log(e))


// Async/Await Made EASY | Stop using .then()
