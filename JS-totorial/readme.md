Javscript is a high-level, object-oriented ,multiparadigm programing language.

JAVASCRIPT IS A
HIGH-LEVEL
PROTOTYPE-BASED OBJECT-ORIENTED
MULTI-PARADIGM
INTERPRETED OR JUST-IN-TIME COMPILED
DYNAMIC SINGLE-THREADED GARBAGE-COLLECTED PROGRAMMING
LANGUAGE WITH FIRST-CLASS FUNCTIONS AND A NON-BLOCKING
EVENT LOOP CONCURRENCY MODEL

JavaScript kya hai?

JavaScript ek high-level programming language hai jo zyada tar web development mein use hoti hai (websites ko interactive banane ke liye).

Ab tumhare sentence ko tod ke samajhte hain:

High-level → Easy language hai, low-level cheezein (memory waghera) handle nahi karni padti
Prototype-based → Objects directly dusre objects se properties inherit kar sakte hain
Object-oriented → Code ko objects aur classes ke through organize kar sakte ho
Multi-paradigm → Different styles mein code likh sakte ho:
Object-oriented
Functional
Simple step-by-step (imperative)
Interpreted / JIT compiled → Browser ya engine code ko turant run karta hai aur optimize bhi karta hai

Dynamic → Variable ka type fix nahi hota:
```
let x = 10;
x = "hello"; // allowed hai
```
Single-threaded → Ek time pe ek hi kaam karta hai
Garbage-collected → Jo memory use nahi ho rahi, woh automatically clean ho jati hai

First-class functions → Functions ko variable ki tarah use kar sakte ho:

const sayHi = function() {
  console.log("Hi");
};

Non-blocking event loop → Ye sabse important hai 👇
JS async kaam (jaise API call, timer) bina rukhe handle karta hai
```
setTimeout(() => console.log("Hello"), 1000);
console.log("Done");
```
Output:

Done
Hello

Simple line mein:
JavaScript ek flexible aur powerful language hai jo web ko interactive banati hai aur async kaam bina system ko slow kiye handle karti hai.


-------------------------------------------------
-------------------------------------------------
🧠 Simple idea:

JavaScript ek time pe sirf 1 kaam karta hai (single-threaded),
lekin phir bhi wo multiple kaam handle karta hua lagta hai — ye magic event loop karta hai.

🍔 Real-life example (restaurant style)

Socho tum ek chef ho 👨‍🍳

Tum ek time pe sirf 1 dish bana sakte ho
Agar koi order aata hai jo time lega (jaise pizza 🍕 oven mein),
to tum:
usse oven mein daal dete ho (background)
aur dusra kaam start kar dete ho

Jab pizza ready hota hai → bell bajti hai 🔔 → tum serve kar dete ho

👉 Yehi system JavaScript mein hota hai

⚙️ JavaScript mein kya hota hai:

3 main cheezein hoti hain:

Call Stack → jahan normal code run hota hai
Web APIs / Background → jahan async kaam chala jata hai (timer, API call)
Event Loop → jo check karta hai kab kaunsa kaam wapas lana hai
```
💻 Example:
console.log("Start");
```
```
setTimeout(() => {
  console.log("Hello");
}, 2000);

console.log("End");
```
🔍 Step-by-step kya hota hai:
"Start" → turant print
setTimeout → background mein chala gaya (2 sec ke liye)
"End" → turant print
2 sec baad → "Hello" print
```
👉 Output:

Start
End
Hello
```
🔁 Event loop kya karta hai?

Event loop baar-baar check karta hai:

"Call stack khaali hai kya?"

Agar haan → queue se next kaam utha ke run kar deta hai
Agar nahi → wait karta hai
📌 1 line mein:

Event loop wo system hai jo async kaam complete hone ke baad unhe sahi time pe execute karwata hai, bina main code ko block kiye.



```
 #scope chain 
 #call stack 

```

```
#HEAP
#call stack
```

Set and Map
SET vs ARRAY ----> set has high value because it saves only unique elements

MAP vs OBJECT ----> map has high value because it can have any type of key and it maintains the order of insertion/boolean 