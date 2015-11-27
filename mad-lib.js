var defNouns = ["golf course", "bow and arrow", "spear", "Katnis Everdeen", "Lyft mustache", "Domo", "Hyundai Sonata", "trash can", "Marshawn Lynch", "Taylormade Driver"];
var defAdjectives = ["red", "scary", "tall", "tiny", "invisible", "clear", "bright", "intelligent", "crazy", "ridiculous"];
var defAdverbs = ["quickly", "slowly", "mightily", "wishfully", "insanely", "shyly", "occasionally", "enthusiatically", "gently"];
var defVerbs = ["force", "value", "light", "list", "time", "ran", "drove", "escape", "complicate", "influence"];

var newNouns =[];
var newAdjectives = [];
var newAdverbs = [];
var newVerbs = [];

function accessInput(newArray, idName) {
  var inputString = document.getElementById(idName).value;
  if (inputString !== '') {
    var inputArray = inputString.split(",");
    for (var i = 0; i < inputArray.length; i++) {
      newArray.push(inputArray[i]);
    }
  }
  return newArray;
}

function finishNounArray(unfinishedArray, defaultArray) {
  while(unfinishedArray.length < 5) {
    unfinishedArray.push(defaultArray[randomIndexNumber(defNouns)]);
  }
  return unfinishedArray;
}
function finishAdjectiveArray(unfinishedArray, defaultArray) {
  while(unfinishedArray.length < 5) {
    unfinishedArray.push(defaultArray[randomIndexNumber(defAdjectives)]);
  }
  return unfinishedArray;
}
function finishAdverbArray(unfinishedArray, defaultArray) {
  while(unfinishedArray.length < 5) {
    unfinishedArray.push(defaultArray[randomIndexNumber(defAdverbs)]);
  }
  return unfinishedArray;
}
function finishVerbArray(unfinishedArray, defaultArray) {
  while(unfinishedArray.length < 5) {
    unfinishedArray.push(defaultArray[randomIndexNumber(defVerbs)]);
  }
  return unfinishedArray;
}
function randomIndexNumber(anArray) {
  return Math.floor(Math.random() * anArray.length);
}

var createStory = function (n, ad, v, adv) { // nounsArray, adjectivesArray, verbsArray, adverbsArray
  console.log("Why is this not working?");
  if (document.getElementById("story_one").checked) {
    console.log("Beginning of if statement");
    var newParagraph = document.createElement('P');
    newParagraph.innerHTML = n[0]; //put story here
    document.getElementById("result").appendChild(newParagraph);
    console.log("Made it to the end of the first createStory if statement");
  }
  else if (document.getElementById("story_two").checked) {
    console.log("story two"); // create the second story
  }
  else if (document.getElementById("story_three").checked) {
    console.log("story three"); // create the third story
  }
  else {
    console.log("Checked radio box was not recognized");
  }
}

var easyPeezyLemonSqueezy = createStory (
  finishNounArray(accessInput(newNouns, "nouns"), defNouns),
  finishAdjectiveArray(accessInput(newAdjectives, "adjectives"), defAdjectives),
  finishVerbArray(accessInput(newVerbs, "verbs"), defVerbs),
  finishAdverbArray(accessInput(newAdverbs, "adverbs"), defAdverbs)
);
