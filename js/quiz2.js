// pos is position of where the user in the qa or which question they're up to
var pos = 0;
var correct = 0;
var answers, answer, qa, quiz_progress, question, choice, choices, chA, chB, chC;
// this is a multidimensional array with 4 inner array elements with 5 elements inside them
// if you don't want answers viewable in the code, then you should use PHP and mySQL database
var questions = [
  ["Can plastic straws be recycled?",
  "Yes",
  "No",
  "Yes, when cleaned well",
  "B",
  "Plastic straws and other items smaller than two by two inches, such as plastic utensils, fall through the machinery that sorts our recycling. They should go into your garbage."],

  ["Where should I put soiled pizza boxes?",
  "Recycling cart",
  "Compost",
  "Garbage cart",
  "B",
  "In Portland, you can throw pizza boxes in compost along with food scraps, coffee filters, tea bags, paper napkins and paper towels. Pizza boxes that are soiled should never go into your recycling bin."],

  ["Can certified compostable plastic containers be composted in Portland?",
  "Yes",
  "No",
  "Yes, when cleaned well",
  "B",
  "Labels like 'compostable' and 'biodegradable' are well-intentioned, but they are not always accurate. Many products labeled 'compostable' or 'biodegradable' do not break down at local composting facilities, so they should not go into your compost bin."],

  ["Can you recycle shredded paper?",
  "No",
  "Yes",
  "Yes, but it needs to be in a paper bag",
  "C",
  "Always put shredded paper in a paper bag. When mixed papers are sorted at the recycling facility, itty-bitty slivers tend to fall through the cracks into the trash pile or worse, clog up the machinery."],

  ["Can you recycle frozen food boxes?",
  "Yes",
  "Not in Portland",
  "Yes, when cleaned well",
  "B",
  "Frozen food boxes are made from paperboard, the same material as cereal boxes. The important difference is that the paperboard is combined with polyethylene (#4 or LDPE), a type of plastic that helps maintain the paper structure of the container when it is exposed to cold temperatures. While good for packaging food, this plastic is not easily separated from the paperboard, so it shouldn't be in your recycling bin."],

  ["Can you recycle soy milk boxes in Portland?",
  "Yes",
  "Not in Portland",
  "Yes, when cleaned well",
  "A",
  "The 'aseptic' beverage cartons designed to sit on store shelves at room temperature contain a layer of foil as well as plastic coating, so it's hard to separate the materials for recycling. Some facilities accept aseptic cartons, such as the one in Portland, but not many others."],

  ["Can you recycle plastic bags?",
  "Yes",
  "No",
  "Some kinds are OK",
  "B",
  "Plastic bags are the top nuisance at recycling facilities. They get caught in the machinery and they eat up valuable staff time, since workers have to remove them one by one. Please stop using them altogether."]
  ];
// this get function is short for the getElementById function
function get(x){
  return document.getElementById(x);
}

function renderQuestion(){
  qa = get("qa");

  if (pos >= questions.length) {
    qa.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct.</h2>";
    get("quiz_progress").innerHTML = "Quiz completed";
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }

  get("quiz_progress").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  qa.innerHTML = "<h3 class='Q'>"+question+"</h3>";
  // the += appends to the data we started on the line above
  qa.innerHTML += "<input class='R1' type='radio' name='choices' value='A'> "+chA+"<br>";
  qa.innerHTML += "<input class='R2' type='radio' name='choices' value='B'> "+chB+"<br>";
  qa.innerHTML += "<input class='R3' type='radio' name='choices' value='C'> "+chC+"<br><br>";
  qa.innerHTML += "<button class='btn btn-success' onclick='checkAnswer()'>Submit Answer</button>";

// function renderAnswer() {
//   answers = get("answers");
//
//   get("answers").innerHTML = "Why is that?";
//   answer = questions[pos][5];
//   answers.innerHTML = "<h3>"+answer+"</h3>";
//   // the += appends to the data we started on the line above
//   // qa.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
//   // qa.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
//   // qa.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
//   answers.innerHTML += "<button class='btn2 btn-success' onclick='checkAnswer()'>Next</button>";
//
// }

}
function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
      get("answers").innerHTML = questions[pos][5];

    }
  }
  // checks if answer matches the correct choice
  if (choice === questions[pos][4]){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  // renderAnswer();
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
