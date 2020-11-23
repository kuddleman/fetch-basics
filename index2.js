const user = {
  name: "Donny",
  age: 60,
  lovesBunnies: true,
  favoriteFoodies: ["Pizza", "Cake", "Candy"],
}

const json = JSON.stringify(user, undefined, 2)

console.log(json)