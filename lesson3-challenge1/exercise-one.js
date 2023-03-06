// Create an array of dog breeds
let goatBreed = ["Pygmy", "Boer", "Fainting Goat", "Nubian", "Kiko"];
console.log(goatBreed);

// Add an element to the end of the array
goatBreed.push("Nigerian Dwarf");
console.log(goatBreed);

// Remove the third element
goatBreed.splice(2, 1);
console.log(goatBreed);

// Create a string from the elements and comma separate them
let goatBreedString = goatBreed.join(", ");	
console.log(goatBreedString);
