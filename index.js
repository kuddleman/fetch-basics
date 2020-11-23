console.log("hello")
console.log("This is cool")

fetch('example.txt')
.then( response => response.text()) // returns promise
.then(text => console.log(text)) // gets the text from the promise

fetch('people.json')
.then( response => response.json())
.then(json => {
  json.forEach( person => {
    const div = document.createElement('div')
    div.innerHTML = (`${person.name} is ${person.age} years old.`)
    document.body.appendChild(div)
  })
})


