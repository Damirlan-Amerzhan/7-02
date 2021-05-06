document.getElementById('input').addEventListener('click', compare)

let userInput = 0

function compare () {
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)

  if (userInput < 0) {
    document.getElementById('answer').innerHTML = "Negative"
  } else {
    document.getElementById('answer').innerHTML = "Positive"
  }

}