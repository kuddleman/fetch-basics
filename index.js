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

// Fetch an image from https://jsonplaceholder.typicode.com/photos/1. The response will be in a JSON. You'll need to access the "url" property, then pass that into the img tag.

fetch('https://jsonplaceholder.typicode.com/photos/1') // Add the URL
	.then(res => res.json()) // Process the data
	.then(json => { 
		const img = document.createElement('img');
		img.src = json.url; // Set the image source to the image URL value
    document.body.appendChild(img);
    console.log(json.thumbnailUrl)
	}); 



