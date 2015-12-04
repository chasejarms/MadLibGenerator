var defNouns = ["golf course", "bow and arrow", "spear", "Katnis Everdeen", "Lyft mustache", "Domo", "Hyundai Sonata", "trash can", "Marshawn Lynch", "Taylormade Driver"];
var defAdjectives = ["smelly", "sharp", "attractive", "bright pink", "ambiguous", "gold", "arrogant", "brand new", "sloppy", "sparkling"];
var defAdverbs = ["quickly", "stupidly", "loudly", "wishfully", "destructively", "shyly", "aggressively", "enthusiatically", "gently"];
var defVerbs = ["go", "buy", "talk", "text", "build", "destroy", "follow", "escape", "complicate", "understand"];

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

function createStory(n, adj, v, adv) {
    var finalStory = document.getElementById('final-story');
    var removeCreateStoryFiller = document.getElementById('display-see-story');
    if (document.getElementById('story_one').checked) {
        if (removeCreateStoryFiller) {
            removeCreateStoryFiller.parentNode.removeChild(removeCreateStoryFiller);
        }
        finalStory.innerHTML = "\t" + "Every Christmas we " + v[0] + " to a " + adj[0] + " tree farm far away. This is not just any " + adj[1] + " tree farm. My dad and I " + v[1] + " on the " + n[0] + " to " + v[2] + " for the perfect " + n[1] + ". Some people like them " + adj[2] + " , but I prefer them " +  adj[3] + ". After searching for hours I usually " + adv[0] + " exclaim \"Dad!\" The perfect tree is over there! Off we " + v[3] + " to get the tree. The problem is we alwasy forget the " + n[2] + " and the " + n[3] + ". But at end of the day we " + adv[1] + " get the tree and head home " + adv[2] + ". \"I wish it was Christmas all year round\" I " + adv[3] + " think to myself.";
        document.getElementById('final-story').style.fontSize = "15px";
    }
    else if (document.getElementById('story_two').checked) {
        if (removeCreateStoryFiller) {
            removeCreateStoryFiller.parentNode.removeChild(removeCreateStoryFiller);
        }
        finalStory.innerHTML = "\t" + "Today I went shopping. When I arrived at the store I saw a " + adj[0] + " " + n[0] + ", who upon noticing me " + adv[0] + " said \"I need to " + v[0] + ".\"  \"Well, that was " + adj[1] + "\" I thought to myself and walked in the store. The store had rearranged it\'s inventory, so I felt " + adv[1] + " lost. I walked up to the store clerk and said " + adv[2] + "\"I am looking for a " + adj[2] + " " + n[1] + " that doesn\'t " + v[1] + " as often as the last one I had.\" The store clerk looked at me with a " + adj[3] + " look in his eye and said, \"What you are looking for can be found by the " + n[2] + ", if you see a " + n[3] + " that " + adv[3] + " can " + v[2] + ", then you've gone too far\" As I tried to understand his directions, I thought to myself, \"I should have just ordered it on amazon.com, Their products seem to " + v[3] + " the perfect amount\"";
        document.getElementById('final-story').style.fontSize = "13px";
    }
    else if (document.getElementById('story_three').checked) {
        if (removeCreateStoryFiller) {
            removeCreateStoryFiller.parentNode.removeChild(removeCreateStoryFiller);
        }
        finalStory.innerHTML = "\t" + "Many say that brainstorming is " + adj[0] + " and does not " + v[0] + ". However, with the combination of the right computer and " + n[0] + " anyone can lead a good " + v[1] + ". When you have " + adv[0] + " pulled together a " + adj[1] + " group of " + n[1] + " in a big room with lots of TV\'s then magical things will happen. In the past we have " + adv[1] + " suggested participants work together to find the most " + adj[2] + " solution. The most difficult part is many " + adj[3] + " " + n[2] + " like to " + v[2] + ". This has proved to be " + adv[2] + " problematic. But in the end the most important " + n[3] + " usually is brought to light. Typically we try to encourage ideas to " + v[3] + ", and never shut ideas down. This concludes our instructions. Thanks for " + adv[3] + " listening!";
        document.getElementById('final-story').style.fontSize = "14px";
    }
}

function easyPeezyLemonSqueezy () {
    createStory (
      finishNounArray(accessInput(newNouns, "nouns"), defNouns),
      finishAdjectiveArray(accessInput(newAdjectives, "adjectives"), defAdjectives),
      finishVerbArray(accessInput(newVerbs, "verbs"), defVerbs),
      finishAdverbArray(accessInput(newAdverbs, "adverbs"), defAdverbs)
    );
    newNouns = [];
    newAdjectives = [];
    newVerbs = [];
    newAdverbs = [];
}
