import { getData } from './fetch.js';
import { me } from './fetch.js';
global.fetch = require('node-fetch');

const data = [{
    "name": "Megan",
    "surname": "Allen",
    "gender": "female",
    "region": "New Zealand"
},
{
    "name": "Μενοίτιος",
    "surname": "Παπάγος",
    "gender": "male",
    "region": "Greece"
},
{
    "name": "Fahir",
    "surname": "Čorbadžić",
    "gender": "male",
    "region": "Bosnia and Herzegovina"
},
{
    "name": "Lucia",
    "surname": "Laurian",
    "gender": "female",
    "region": "Romania"
},
{
    "name": "Mason",
    "surname": "Johanne",
    "gender": "male",
    "region": "New Zealand"
},
{
    "name": "Lenka",
    "surname": "Krajčo",
    "gender": "female",
    "region": "Slovakia"
},
{
    "name": "Florin",
    "surname": "Chira",
    "gender": "male",
    "region": "Romania"
},
{
    "name": "Артём",
    "surname": "Зимин",
    "gender": "male",
    "region": "Russia"
},
{
    "name": "Альберт",
    "surname": "Игнатьев",
    "gender": "male",
    "region": "Russia"
},
{
    "name": "Anastasia",
    "surname": "Nõmm",
    "gender": "female",
    "region": "Estonia"
}
]

test("Testing Fetch - first Name", () => {
    // expect(getData.getFirstName(data)).toBe('Megan');

});

test("Testing Fetch - Array of First Names", () => {
    expect(getData.getAllFirstNames(data)[0]).toBe('Megan');
    expect(getData.getAllFirstNames(data)[2]).toBe('Fahir');
    expect(getData.getAllFirstNames(data)[9]).toBe('Anastasia');
});

test("Testing Fetch - delay in settimeout", () => {
    expect(getData.showDelayProblem()[0]).toBe('One');
    expect(getData.showDelayProblem()[1]).toBe('Three');
});

test("Testing workWithData", async () => {
    let d = await getData.workWithData();
    expect(d.length).toBe(10);


});

test("Testing me", () => {
    expect(me.name).toBe("Daniel");
    expect(me.gender).toBe("male");
    expect(me.surname).toBe("Ottah");
    expect(me.region).toBe("Canada");

});