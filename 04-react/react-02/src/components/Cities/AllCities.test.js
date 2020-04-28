import { Community } from './AllCities.js';


test("Testing createCity()", () => {
    let ct = new Community();
    let cityArray = [];
    ct.createCity('Airdrie', 51.2927, 114.0134, 700, cityArray);
    ct.createCity('Calgary', 51.0447, 548.2548, 189000, cityArray);
    ct.createCity('British Columbia', 11.2927, 554.2548, 25000, cityArray);
    ct.createCity("Halifax", 45.3658, 52.3698, 985000, cityArray);

    expect(cityArray.length).toBe(4);
    expect(cityArray[0].Population).toBe(700);
    expect(cityArray[3].Population).toBe(985000);
    expect(cityArray[0].Name).toBe("Airdrie");
    expect(cityArray[2].Latitude).toBe(11.2927);
    expect(cityArray[1].Longitude).toBe(548.2548);
    expect(cityArray[3].Name).toBe("Halifax");
    expect(cityArray[2].Population).toBe(25000);
});

test("Testing whichSphere()", () => {
    let ct = new Community();
    let cityArray = [];
    ct.createCity('Airdrie', 51.2927, 114.0134, 700, cityArray);
    ct.createCity('Calgary', 51.0447, 548.2548, 189000, cityArray);
    ct.createCity('British Columbia', 11.2927, 554.2548, 25000, cityArray);
    ct.createCity("Halifax", 45.3658, 52.3698, 985000, cityArray);

    expect(ct.whichSphere("Airdrie", cityArray)).toBe("Northern Hemisphere");
    expect(ct.whichSphere("Calgary", cityArray)).toBe("Northern Hemisphere");
    expect(ct.whichSphere("British Columbia", cityArray)).toBe("Southern Hemisphere");
    expect(ct.whichSphere("Halifax", cityArray)).toBe("Northern Hemisphere");
});

test("Testing getMostNorthern()", () => {
    let ct = new Community();
    let cityArray = [];
    ct.createCity('Airdrie', 51.2927, 114.0134, 700, cityArray);
    ct.createCity('Calgary', 51.0447, 548.2548, 189000, cityArray);
    ct.createCity('British Columbia', 11.2927, 554.2548, 25000, cityArray);
    ct.createCity("Halifax", 45.3658, 52.3698, 985000, cityArray);

    expect(ct.getMostNorthern(cityArray)[0]).toBe("Airdrie");
    expect(ct.getMostNorthern(cityArray)[1]).toBe(51.2927);

});
test("Testing getMostSouthern()", () => {
    let ct = new Community();
    let cityArray = [];
    ct.createCity('Airdrie', 51.2927, 114.0134, 700, cityArray);
    ct.createCity('Calgary', 51.0447, 548.2548, 189000, cityArray);
    ct.createCity('British Columbia', 11.2927, 554.2548, 25000, cityArray);
    ct.createCity("Halifax", 45.3658, 52.3698, 985000, cityArray);

    expect(ct.getMostSouthern(cityArray)[0]).toBe("British Columbia");
    expect(ct.getMostSouthern(cityArray)[1]).toBe(11.2927);

});
test("Testing getTotalPopulation()", () => {
    let ct = new Community();
    let cityArray = [];
    ct.createCity('Airdrie', 51.2927, 114.0134, 700, cityArray);
    ct.createCity('Calgary', 51.0447, 548.2548, 189000, cityArray);
    ct.createCity('British Columbia', 11.2927, 554.2548, 25000, cityArray);
    ct.createCity("Halifax", 45.3658, 52.3698, 985000, cityArray);

    expect(ct.getTotalPopulation(cityArray)).toBe(1199700);

});

test("Testing getPopulationofCity()", () => {
    let ct = new Community();
    let cityArray = [];
    ct.createCity('Airdrie', 51.2927, 114.0134, 700, cityArray);
    ct.createCity('Calgary', 51.0447, 548.2548, 189000, cityArray);
    ct.createCity('British Columbia', 11.2927, 554.2548, 25000, cityArray);
    ct.createCity("Halifax", 45.3658, 52.3698, 985000, cityArray);

    expect(ct.getPopulationofCity("Airdrie", cityArray)).toBe(700);
    expect(ct.getPopulationofCity("Calgary", cityArray)).toBe(189000);
    expect(ct.getPopulationofCity("British Columbia", cityArray)).toBe(25000);
    expect(ct.getPopulationofCity("Halifax", cityArray)).toBe(985000);
});

test("Testing getindexOfCity()", () => {
    let ct = new Community();
    let cityArray = [];
    ct.createCity('Airdrie', 51.2927, 114.0134, 700, cityArray);
    ct.createCity('Calgary', 51.0447, 548.2548, 189000, cityArray);
    ct.createCity('British Columbia', 11.2927, 554.2548, 25000, cityArray);
    ct.createCity("Halifax", 45.3658, 52.3698, 985000, cityArray);

    expect(ct.getindexOfCity("Airdrie", cityArray)).toBe(0);
    expect(ct.getindexOfCity("Calgary", cityArray)).toBe(1);
    expect(ct.getindexOfCity("British Columbia", cityArray)).toBe(2);
    expect(ct.getindexOfCity("Halifax", cityArray)).toBe(3);
});

test("Testing loadAPICity()", async () => {
    let ct = new Community();
    let apiCities = await ct.loadAPICity();

    expect(await apiCities.length).toBe(5);
    expect(apiCities[0].Name).toBe("Calgary");
    expect(apiCities[3].Latitude).toBe(40);
    expect(apiCities[4].Longitude).toBe(10);
});


test("Testing Show() in City Class", () => {
    let ct = new Community();
    let cityArray = [];
    ct.createCity('Airdrie', 51.2927, 114.0134, 700, false, cityArray);
    ct.createCity('Calgary', 51.0447, 548.2548, 189000, cityArray);
    ct.createCity('British Columbia', 11.2927, 554.2548, 25000, false, cityArray);

    expect(ct.newCt.show('Airdrie', cityArray)).toBe('Airdrie is at latitude:51.2927 and longitude:114.0134 with a population of 700');
    expect(ct.newCt.show('Calgary', cityArray)).toBe('Calgary is at latitude:51.0447 and longitude:548.2548 with a population of 189000');
    expect(ct.newCt.show('British Columbia', cityArray)).toBe('British Columbia is at latitude:11.2927 and longitude:554.2548 with a population of 25000');

});


test("Testing movedIn() in City Class", () => {
    let ct = new Community();
    let cityArray = [];
    ct.createCity('Airdrie', 51.2927, 114.0134, 700, false, cityArray);
    ct.createCity('Calgary', 51.0447, 548.2548, 189000, cityArray);
    ct.createCity('British Columbia', 11.2927, 554.2548, 25000, false, cityArray);

    expect(ct.newCt.movedIn('Airdrie', 300, cityArray)).toBe(1000);
    expect(ct.newCt.movedIn('Calgary', 1000, cityArray)).toBe(190000);
    expect(ct.newCt.movedIn('British Columbia', 5000, cityArray)).toBe(30000);
    expect(ct.newCt.movedIn('Airdrie', 300, cityArray)).not.toBe(1100);
    expect(ct.newCt.movedIn('Calgary', 1000, cityArray)).not.toBe(195000);
    expect(ct.newCt.movedIn('British Columbia', 5000, cityArray)).not.toBe(30700);

});

test("Testing movedOut() in City Class", () => {
    let ct = new Community();
    let cityArray = [];
    ct.createCity('Airdrie', 51.2927, 114.0134, 700, false, cityArray);
    ct.createCity('Calgary', 51.0447, 548.2548, 189000, cityArray);
    ct.createCity('British Columbia', 11.2927, 554.2548, 25000, false, cityArray);

    expect(ct.newCt.movedOut('Airdrie', 200, cityArray)).toBe(500);
    expect(ct.newCt.movedOut('Calgary', 1000, cityArray)).toBe(188000);
    expect(ct.newCt.movedOut('British Columbia', 5000, cityArray)).toBe(20000);
    expect(ct.newCt.movedOut('Airdrie', 300, cityArray)).not.toBe(1100);
    expect(ct.newCt.movedOut('Calgary', 1000, cityArray)).not.toBe(195000);
    expect(ct.newCt.movedOut('British Columbia', 5000, cityArray)).not.toBe(30700);

});

test("Testing howBig() in City Class", () => {
    let ct = new Community();
    let cityArray = [];
    ct.createCity('Airdrie', 51.2927, 114.0134, 700, false, cityArray);
    ct.createCity('Calgary', 51.0447, 548.2548, 189000, cityArray);
    ct.createCity('British Columbia', 11.2927, 554.2548, 25000, false, cityArray);
    ct.createCity("Halifax", 45.3658, 52.3698, 985000, cityArray);

    expect(ct.newCt.howBig('Airdrie', cityArray)).toBe("Village");
    expect(ct.newCt.howBig('Calgary', cityArray)).toBe("City");
    expect(ct.newCt.howBig('British Columbia', cityArray)).toBe("Large Town");
    expect(ct.newCt.howBig('Halifax', cityArray)).toBe("City");

});
