const questions = [{
    'que': 'which of the following is a markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct': 'a'
},
{
    'que': 'Which of the following is a correct syntax to display “Hello World" in an alert box using JavaScript?',
    'a': 'alertBox',
    'b': 'alert',
    'c': 'msgAlert',
    'd': 'displayAlert',
    'correct': 'b' 
},
{
    'que': 'Which keyword is used for declaring a variable in JavaScript that can be reassigned?', 
    'a': 'const',
    'b': 'var',
    'c': 'let',
    'd': 'Staic',
    'correct': 'c', 
}
]
let index = 0;
let total = questions.length;
let right = 0;
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options') 
const loadQuestion = () => {
if (index === total) {
    return endQuiz()
}
    reset();
    const data = questions[index]
    quesBox.innerText = ` ${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
    const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    console.log(ans, data.correct)
    if (ans === data.correct) {
        right++;
     }else {
        wrong++;
     }
    index++;
    loadQuestion();
     return;
}
   const getAnswer = () => {
    let answer;
    optionInputs.forEach(
      (input) => {
        if (input.checked) {
            answer = input.value;
        }
      }  
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
       <h3> Thank You for Playing the Quiz</h3>
       <h2> ${right} / ${total} are correct </h2>
   </div>
    `
}

loadQuestion();
