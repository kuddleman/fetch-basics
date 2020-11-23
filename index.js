console.log("hello")
console.log("This is cool")

fetch('example.txt')
.then( response => response.text()) // returns promise
.then(text => console.log(text)) // gets the text from the promise
