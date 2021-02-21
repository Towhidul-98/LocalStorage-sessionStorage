//localStorage.setItem("name" , "rafi")
//sessionStorage.setItem("name" , "rafi")  
// const nam = sessionStorage.getItem("name")
// console.log(nam)

const person= {
    name : "rafi",
    age : 23,
    id: 34,
    institute : "DU",
    salary : 0
}

localStorage.setItem("person" ,JSON.stringify(person))
const personData = localStorage.getItem("person");
console.log(personData)
const personParsed = JSON.parse(personData)
console.log(personParsed)
console.log(personParsed.name)

console.log(Object.keys(personParsed))
console.log(Object.values(personParsed))