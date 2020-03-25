import { City } from './city_community.js';
import { Community } from './city_community.js';


let ct = new Community();
ct.createCity('Airdrie', 51.2927, 114.0134, 700);
ct.createCity('Calgary', 51.0447, 548.2548, 189000);
ct.createCity('British Columbia', 11.2927, 554.2548, 25000);

test("Testing createCity() in Community Class", () => {
    let myCity = new Community();
    myCity.createCity("Halifax", 45.3658, 52.3698, 985000);
    expect(myCity.newCt.allCities.length).toBe(1);
    let myFav = myCity;
    expect(myCity.newCt.allCities[0].population).toBe(985000);
    expect(myFav.newCt.allCities[0].population).toBe(985000);
    myCity.newCt.allCities[0].population = myCity.newCt.allCities[0].population + 5000;
    expect(myCity.newCt.allCities[0].population).toBe(990000);
    expect(myFav.newCt.allCities[0].population).toBe(990000);
    myFav.newCt.allCities[0].population = myFav.newCt.allCities[0].population - 10000;
    expect(myCity.newCt.allCities[0].population).toBe(980000);
    expect(myFav.newCt.allCities[0].population).toBe(980000);

    console.log(myCity.newCt.allCities[0].population);
    console.log(myFav.newCt.allCities[0].population);


});

test("Testing Show() in City Class", () => {
    expect(ct.newCt.show('Airdrie')).toBe('Airdrie is at latitude:51.2927 and longitude:114.0134 with a population of 700');
    expect(ct.newCt.show('Calgary')).toBe('Calgary is at latitude:51.0447 and longitude:548.2548 with a population of 189000');
    expect(ct.newCt.show('British Columbia')).toBe('British Columbia is at latitude:11.2927 and longitude:554.2548 with a population of 25000');
    expect(ct.newCt.allCities.length).toBe(3);
});

test("Testing movedIn() in City Class", () => {
    expect(ct.newCt.movedIn('Airdrie', 10)).toBe(710);
    expect(ct.newCt.movedIn('Calgary', 1000)).toBe(190000);
    expect(ct.newCt.movedIn('British Columbia', 5000)).toBe(30000);

});
test("Testing movedOut() in City Class", () => {
    expect(ct.newCt.movedOut('Airdrie', 20)).toBe(690);
    expect(ct.newCt.movedOut('Calgary', 10000)).toBe(180000);
    expect(ct.newCt.movedOut('British Columbia', 15000)).toBe(15000);

});
test("Testing howBig() in City Class", () => {
    expect(ct.newCt.howBig('Airdrie')).toBe("Village");
    expect(ct.newCt.howBig('Calgary')).toBe("City");
    expect(ct.newCt.howBig('British Columbia')).toBe("Town");

});
test("Testing whichSphere() in Community Class", () => {
    expect(ct.whichSphere('Airdrie')).toBe("Northern Hemisphere");
    expect(ct.whichSphere('Calgary')).toBe("Northern Hemisphere");
    expect(ct.whichSphere('British Columbia')).toBe("Southern Hemisphere");

});
test("Testing getMostNorthern() &  getMostSouthern() in Community Class", () => {
    expect(ct.getMostNorthern()[0]).toBe("Airdrie");
    expect(ct.getMostNorthern()[1]).toBe(51.2927);
    expect(ct.getMostSouthern()[0]).toBe("British Columbia");
    expect(ct.getMostSouthern()[1]).toBe(11.2927);

});
test("Testing getTotalPopulation() in Community Class", () => {
    expect(ct.getTotalPopulation()).toBe(195690);

});
test("Testing getPopulationofCity() in Community Class", () => {
    expect(ct.getPopulationofCity('Airdrie')).toBe(690);
    expect(ct.getPopulationofCity('Calgary')).toBe(180000);
    expect(ct.getPopulationofCity('British Columbia')).toBe(15000);

});
test("Testing deleteCity() in Community Class", () => {
    expect(ct.newCt.allCities.length).toBe(3);
    ct.deleteCity('Calgary');
    ct.deleteCity('British Columbia');
    expect(ct.newCt.allCities.length).toBe(1);
});