// pos is position of where the user in the qa or which question they're up to
var pos = 0, qa, quiz_progress, question, choice, choices, chA, chB, chC, correct = 0;
// this is a multidimensional array with 4 inner array elements with 5 elements inside them
// if you don't want answers viewable in the code, then you should use PHP and mySQL database
var questions = [
  ["Can plastic straws be recycled?", "Yes", "No", "Yes, when cleaned well", "B"],
  ["Where should I put soiled pizza boxes?", "Recycling cart", "Compost", "Garbage cart", "B"],
  ["Can certified compostable plastic containers be composted in Portland?", "Yes", "No", "Yes, when cleaned well", "B"],
  ["Can you recycle shredded paper?", "No", "Yes", "Yes, but it needs to be in a paper bag", "C"],
  ["Can you recycle frozen food boxes?", "Yes", "Not in Portland", "Yes, when cleaned well", "B"],
  ["Can you recycle soy milk boxes in Portland?", "Yes", "Not in Portland", "Yes, when cleaned well", "A"],
  ["Can you recycle plastic bags?", "Yes", "No", "Some kinds are OK", "B"]
  ];
// this get function is short for the getElementById function
function get(x){
  return document.getElementById(x);
}
function renderQuestion(){
  qa = get("qa");
  if(pos >= questions.length){
    qa.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("quiz_progress").innerHTML = "Quiz completed";
    // resets the variable to allow users to restart the qa
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when qa is completed
    return false;
  }
  get("quiz_progress").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  qa.innerHTML = "<h3>"+question+"</h3>";
  // the += appends to the data we started on the line above
  qa.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  qa.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  qa.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
  qa.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == questions[pos][4]){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);



















// var position = 0;
// var correct = 0;
// var qa, quiz_progress, question, choice, choices, choiceA, choiceB, choiceC;
//
// var questions = [
  // ["Can plastic straws be recycled?", "Yes", "No", "Yes, when cleaned well", "B"],
  // ["Where should I put soiled pizza boxes?", "Recycling cart", "Compost", "Garbage cart", "B"],
  // ["Can certified compostable plastic containers be composted in Portland?", "Yes", "No", "Yes, when cleaned well", "B"],
  // ["Can you recycle shredded paper?", "No", "Yes", "Yes, but it needs to be in a paper bag", "C"],
  // ["Can you recycle frozen food boxes?", "Yes", "Not in Portland", "Yes, when cleaned well", "B"]
  // ["Can you recycle soy milk boxes in Portland?", "Yes", "Not in Portland", "Yes, when cleaned well", "A"]
  // ["Can you recycle plastic bags?", "Yes", "No", "Some kinds are OK", "B"]
// ];
//
// function get (qa) {
//   document.getElementById(qa);
// }
//
// function renderQuestion() {
//   qa = get ("qa");
//
//   if (position >= questions.length) {
//     qa.innerHTML = "<h2>You got " + correct + " of" + questions.length + " questions correct</h2>"
//     get("quiz_progress").innerHTML = "qa completed";
//     position = 0;
//     correct = 0;
//
//     return false;
//   }
//
//   get("quiz_progress").innerHTML = "Question " + (position + 1) + "of " +question.length;
//   question = questions[position][0];
//   choiceA = questions[position][1];
//   choiceB = questions[position][2];
//   choiceC = questions[position][3];
//
//   qa.innerHTML = "<h3>" + question + "</h3>";
//
//   qa.innerHTML += "<input type='radio' name='choices' value='A'> " + choiceA + "<br>";
//   qa.innerHTML += "<input type='radio' name='choices' value='B'> " + choiceB + "<br>";
//   qa.innerHTML += "<input type='radio' name='choices' value='C'> " + choiceC + "<br>";
//   qa.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
//
// }
//
// function checkAnswer() {
//   choices = document.getElementsByName("choices");
//   for(var i=0; i<choices.length; i++) {
//     if(choices[i].checked) {
//       choice = choices[i].value;
//     }
//   }
//   if(choice == questions[position][4]) {
//     correct++;
//   }
//   position++;
//
//   renderQuestion();
// }
//
// window.addEventListener("load", renderQuestion, false);
