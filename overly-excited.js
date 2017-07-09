console.log("Hello, world!")

// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
var sentenceLength = sentence.length;
// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.  
     */
     var poem = "";
     for (var i = 0; i < theWordArray.length; i++) {
     	poem+=" "+theWordArray[i];
     	console.log(poem); 
     }
 }

// Invoke the function and pass in the array
addExcitement(sentence);

function addExcitement (theWordArray) {
     var poem = "";
     for (var i = 0; i < theWordArray.length; i++) {
     	poem+=" "+theWordArray[i];
     	if (((i+1) % 3) ===0) {
     		poem+="!";
     	}
     	console.log(poem); 
     }
 }

// Invoke the function and pass in the array
addExcitement(sentence);

function addExcitement (theWordArray) {
     var poem = "";
     for (var i = 0; i < theWordArray.length; i++) {
     	poem+=" "+theWordArray[i];
     	if (((i+1) % 3) ===0) {
     		for (var foo = 0; foo < i/3; foo++)
     		poem+="!";
     	}

     	console.log(poem); 
     }
 }