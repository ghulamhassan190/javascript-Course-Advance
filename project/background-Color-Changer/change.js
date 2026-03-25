



function change(){
  var randomColorRed=Math.round(Math.random()*255)
  var randomColorGreen=Math.round(Math.random()*255)
  var randomColorBlue=Math.round(Math.random()*255)
  // console.log(randomColor);
  
  document.body.style.background=`rgb(${randomColorRed} ${randomColorBlue} ${randomColorGreen})`
}