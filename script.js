const quizContainer = document.getElementById("quiz");

function loadQuiz(){

quizQuestions.forEach((q,index)=>{

let html = `<div class="question">
<p>${index+1}. ${q.question}</p>`

q.options.forEach((opt,i)=>{

html += `
<label>
<input type="radio" name="q${index}" value="${i}">
${opt}
<span id="mark${index}${i}"></span>
</label><br>
`
})

html += `<p id="sol${index}" class="solution"></p>`
html += `</div>`

quizContainer.innerHTML += html

})

}

loadQuiz()

function submitQuiz(){

let score = 0

quizQuestions.forEach((q,index)=>{

let selected = document.querySelector(`input[name="q${index}"]:checked`)

if(selected){

let answer = parseInt(selected.value)

if(answer === q.correct){

score++

document.getElementById(`mark${index}${answer}`).innerHTML=" ✔"

}else{

document.getElementById(`mark${index}${answer}`).innerHTML=" ✖"
document.getElementById(`mark${index}${q.correct}`).innerHTML=" ✔"

}

}

document.getElementById(`sol${index}`).innerHTML =
"Solution: " + q.solution

})

document.getElementById("score").innerHTML =
"Your Score: " + score + " / " + quizQuestions.length

}
