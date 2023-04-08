const argument = process.argv

function greetings(person_name){
    return `Hello ${person_name}`
}

console.log(greetings(argument[2]))