function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

  let favoriteNumber = 42;

let instructor = {
  [favoriteNumber]: "That is my favorite!"
}

let instructor1 = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

  function createAnimal(species, verb, noise) {
    return {
        species,
        verb,
        noise
    }
  }