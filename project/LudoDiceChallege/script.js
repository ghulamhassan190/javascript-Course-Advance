let totalDice = []
function lodu() {
  let randomNUmber = Math.ceil(Math.random() * 6)

  totalDice.push(randomNUmber)

  if (totalDice.length==3&& randomNUmber==6) {
    return alert('please try again')
  }
  
  if (randomNUmber == 6) {
    lodu()
  }
}
lodu()
console.log(totalDice);
