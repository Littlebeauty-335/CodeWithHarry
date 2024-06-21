/* Create a random name generator by combining Adjectives, Shop Nmae, Another Word

Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/

let name1 = {                                                   
    1: "Crazy",                                           
    2: "Amazing",                                             
    3: "Fire"
}

const element1 = name1[Math.floor((Math.random())*3)+1];

let name2 = {
    1:"Engine",
    2:"Foods",
    3:"Garments"
}

const element2 = name2[Math.floor((Math.random())*3)+1];

let name3 = {
    1:"Bros",
    2:"Limited",
    3:"Hub"
}

const element3 = name3[Math.floor((Math.random())*3)+1];

console.log(`${element1} ${element2} ${element3}`);