const people = [
    {
        name: 'pawel',
        city: 'krakow',
        age: 39,
        hobbies: ['js']
    },
    {
        name: 'mati',
        city: 'gdansk',
        age: 23,
        hobbies: ['js']
    },
    {
        name: 'mateusz',
        city: 'gdansk',
        age: 32,
        hobbies: ['js']
    },
    {
        name: 'denys',
        city: 'warsaw',
        age: 27,
        hobbies: ['js']
    },
    {
        name: 'adas',
        city: 'szczecin',
        age: 29,
        hobbies: ['js']
    },
    {
        name: 'mikolaj',
        city: 'rozwady',
        age: 23,
        hobbies: ['js']
    },
    {
        name: 'bartek',
        city: 'bielsko',
        age: 25,
        hobbies: ['js']
    },
    {
        name: 'maciej',
        city: 'lublin',
        age: 27,
        hobbies: ['js']
    },
    {
        name: 'filip',
        city: 'torun',
        age: 26,
        hobbies: ['js']
    },
    {
        name: 'karol',
        city: 'lidzba',
        age: 32,
        hobbies: ['js']
    },
    {
        name: 'filip',
        city: 'gdansk',
        age: 28,
        hobbies: ['js']
    },
    {
        name: 'agnieszka',
        city: 'warsaw',
        age: 38,
        hobbies: ['js']
    },
    {
        name: 'vlad',
        city: 'warszawa',
        age: 19,
        hobbies: ['js']
    },
    {
        name: 'kuba',
        city: 'lodz',
        age: 21,
        hobbies: ['js']
    },
    {
        name: 'karol',
        city: 'krakow',
        age: 39,
        hobbies: ['js', 'woda']
    },
    {
        name: 'maciej',
        city: 'Zielonka',
        age: 23,
        hobbies: ['sdf']
    },
    {
        name: 'mateusz',
        city: 'Warszawa',
        age: 21,
        hobbies: ['js','python', 'python']
    }
]

// x.reduce((acc, ce) => acc + ce)
//
// data.reduce((acc, ce) => acc + ce.age , 0)
//
// function calcAvgAge2(people) {
//     return people
//         .map((person) => person.age)
//         .reduce((acc, ce) => acc + ce) / people.length
// }
//
// const calcAvgAge3 = (people) => people
//     .map((person) => person.age)
//     .reduce((acc, ce) => acc + ce) / people.length;
// const calcAvgAge4 = (people) => people
//     .reduce((acc, ce) => acc + ce.age, 0) / people.length;
//
// // policzyć średnią wieku dla osób spoza Warszawy
// function calcAvgAgeCustom(people) {
//     let totalAge = 0;
//     let counter = 0;
//
//     // for (let i = 0; i < people.length; i++) {
//     //     if (!(people[i].city.toLowerCase() === 'warsaw' || people[i].city.toLowerCase() === 'warszawa')) {
//     //         totalAge += people[i].age;
//     //         counter++;
//     //     }
//     // }
//     //
//     for (const person of people) {
//         if (!(person.city.toLowerCase() === 'warsaw' || person.city.toLowerCase() === 'warszawa')) {
//             totalAge += person.age;
//             counter++;
//         }
//     }
//
//     return totalAge / counter;
// }
//
// const calcAvgAgeCustom2 = function (people) {
//     const ageOfPeople = people
//         .filter((person) => !(person.city.toLowerCase() === 'warsaw' || person.city.toLowerCase() === 'warszawa'))
//         .map((person) => person.age);
//
//     return ageOfPeople.reduce((acc, ce) => acc + ce) / ageOfPeople.length;
// }

// czy wszyscy kochają js (includes/indexof) -> true/false

// function EveryoneJS(people) {
//     for (const item of people) {
//         if (!item.hobbies.includes("js")) {
//             return false;
//         }
//     }
//     return true;
//
// }
// console.log(EveryoneJS(people))
const isEveryoneJs = (items) => items
    .every((item) => item.hobbies.includes("js"));


const a = isEveryoneJs(people);
console.log(a);

// ile jest hobby bez powtórzeń

function SetHobbies(people) {
    let hobbies= new Set();
    for (const person of people) {
        for (const hobby of person.hobbies) {
            hobbies.add(hobby)
        }
    }
    return hobbies.size
}

//console.log(SetHobbies(people))

const UnHobbies = (items) => new Set(items.map((item) => item.hobbies).flat()).size;


const y = UnHobbies(people)
console.log(y)