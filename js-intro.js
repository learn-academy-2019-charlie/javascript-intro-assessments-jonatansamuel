// Intro to Javascript Assessments

// Consider this variable:

var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.

function(mantra.charAt(0)){
    return mantra.charAt(0)
}
console.log(mantra.charAt(0))

// 2. Write the code that determines if there is a 'x' in mantra.

for(let i = 0, i<mantra.length,i++)
    if(mantraArr[i] !== x); {
        console.log(mantra);
    }


// 3. Write the code that determines if there is a 'v' in mantra.

for(let i = 0, i<mantra.length,i++)
    if(mantraArr[i] !== v); {
        console.log(mantra);
    }

// Stretch: Write the code that returns the position of 'v' in mantra.

console.log(mantra[7])


// Consider the following statement:

var codingIsEasy
var imBored

if (codingIsEasy === imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"

// Consider the following statement:

var imLost
var imFrustrated

if (imLost, imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"

// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.

// Stretch: Using a while loop.

// Super Stretch: Using forEach().

// Consider the following variable:

var message = "thisisateststring"

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.

// Stretch: Update your function to throw an exception if the argument is not a string.

// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.

// Consider the following variable:

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.

onlyCars = (arr) => {
    var newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i].toonimals === 'cat')
    }   return newArr
}
console.log(onlyCats(toonimals));