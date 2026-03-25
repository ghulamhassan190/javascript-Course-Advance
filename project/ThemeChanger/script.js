const htmlCode=`
 <button class="dark"  onclick="darkTheme()">Dark</button>
    <h1 class="light">Heading</h1>
    <p class="light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi similique consequuntur illo, quia magni culpa fugiat, nemo alias eaque voluptas magnam doloremque veniam eos fuga! Et unde necessitatibus nostrum consectetur voluptas adipisci nisi odit soluta quidem tenetur, voluptatem, inventore deserunt reprehenderit nesciunt quae, incidunt officiis quo porro ex quisquam magni? Corrupti esse numquam earum unde. Quidem nihil numquam facere? Aliquam, ad nemo? Odit quibusdam dolorem hic tempore dolorum dicta repudiandae consequuntur molestias expedita! Illo beatae iste odit ipsum magni sapiente est, similique assumenda natus fuga, voluptates laborum a quis asperiores animi repudiandae qui quos ipsa necessitatibus unde harum ratione aspernatur!</p>`


    document.body.innerHTML=htmlCode
function darkTheme(){
  document.body.classList.toggle('light')
  document.body.classList.toggle('dark')

  document.querySelector('h1').classList.toggle("light")
  document.querySelector('h1').classList.toggle("dark")

  document.querySelector('p').classList.toggle("light")
  document.querySelector('p').classList.toggle("dark")


  const btn =document.querySelector('button')
  if (btn.textContent=="Dark") {
      btn.textContent="Light"
    } else {
    btn.textContent="Dark"  
    
  }  

}  


























// function darkTheme(){
//   document.body.classList.remove('light')
//   document.body.classList.add('dark')
//   document.querySelectorAll('.light').forEach(function(item){
//     item.classList.add('dark')
//     item.classList.remove('light')
    
//   })

//   document.querySelector('button').innerText="Light"
//   document.querySelector('button').setAttribute("onclick","lightTheme()")
// }

// function lightTheme(){
//     document.body.classList.remove('dark')
//   document.body.classList.add('light')
//   document.querySelectorAll('.dark').forEach(function(item){
//     item.classList.add('light')
//     item.classList.remove('dark')
    
//   })

//   document.querySelector('button').innerText="Dark"
//   document.querySelector('button').setAttribute("onclick","darkTheme()")
// }