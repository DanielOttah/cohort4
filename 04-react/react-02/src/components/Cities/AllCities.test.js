import { Community } from './AllCities.js';


test("Testing createCity()", () => {
    let ct = new Community();

    let newCity = ct.createCity('Airdrie', 51.2927, 114.0134, 700, 1)
    expect(newCity.Name).toBe("Airdrie");
    expect(newCity.Population).toBe(700);
    expect(newCity.Latitude).toBe(51.2927);

    let newCity2 = ct.createCity('Calgary', 51.0447, 548.2548, 189000, 2);
    expect(newCity2.Name).toBe("Calgary");
    expect(newCity2.Population).toBe(189000);
    expect(newCity2.Latitude).toBe(51.0447);

    let newCIty3 = ct.createCity('British Columbia', 11.2927, 554.2548, 25000, 3);
    expect(newCIty3.Name).not.toBe("Airdrie");
    expect(newCIty3.Population).not.toBe(700);
    expect(newCIty3.Latitude).not.toBe(51.2927);
    expect(newCIty3.key).not.toBe(51.2927);


});

test("Testing whichSphere()", () => {
    let ct = new Community();
    let cityArray = [];

    cityArray.push(ct.createCity('Airdrie', 51.2927, 114.0134, 700, 1));
    cityArray.push(ct.createCity('Calgary', 51.0447, 548.2548, 189000, 2));
    cityArray.push(ct.createCity('British Columbia', 11.2927, 554.2548, 25000, 3));
    cityArray.push(ct.createCity("Halifax", 45.3658, 52.3698, 985000, 4));

    expect(ct.whichSphere("Airdrie", cityArray)).toBe("Northern Hemisphere");
    expect(ct.whichSphere("Calgary", cityArray)).toBe("Northern Hemisphere");
    expect(ct.whichSphere("British Columbia", cityArray)).toBe("Southern Hemisphere");
    expect(ct.whichSphere("Halifax", cityArray)).toBe("Northern Hemisphere");
});

test("Testing getMostNorthern()", () => {
    let ct = new Community();
    let cityArray = [];
    cityArray.push(ct.createCity('Airdrie', 51.2927, 114.0134, 700, 1));
    cityArray.push(ct.createCity('Calgary', 51.0447, 548.2548, 189000, 2));
    cityArray.push(ct.createCity('British Columbia', 11.2927, 554.2548, 25000, 3));
    cityArray.push(ct.createCity("Halifax", 45.3658, 52.3698, 985000, 4));

    expect(ct.getMostNorthern(cityArray)[0]).toBe("Airdrie");
    expect(ct.getMostNorthern(cityArray)[1]).toBe(51.2927);

});

test("Testing getMostSouthern()", () => {
    let ct = new Community();
    let cityArray = [];
    cityArray.push(ct.createCity('Airdrie', 51.2927, 114.0134, 700, 1));
    cityArray.push(ct.createCity('Calgary', 51.0447, 548.2548, 189000, 2));
    cityArray.push(ct.createCity('British Columbia', 11.2927, 554.2548, 25000, 3));
    cityArray.push(ct.createCity("Halifax", 45.3658, 52.3698, 985000, 4));

    expect(ct.getMostSouthern(cityArray)[0]).toBe("British Columbia");
    expect(ct.getMostSouthern(cityArray)[1]).toBe(11.2927);

});

test("Testing getPopulationofCity()", () => {
    let ct = new Community();
    let cityArray = [];
    cityArray.push(ct.createCity('Airdrie', 51.2927, 114.0134, 700, 1));
    cityArray.push(ct.createCity('Calgary', 51.0447, 548.2548, 189000, 2));
    cityArray.push(ct.createCity('British Columbia', 11.2927, 554.2548, 25000, 3));
    cityArray.push(ct.createCity("Halifax", 45.3658, 52.3698, 985000, 4));

    expect(ct.getPopulationofCity("Airdrie", cityArray)).toBe(700);
    expect(ct.getPopulationofCity("Calgary", cityArray)).toBe(189000);
    expect(ct.getPopulationofCity("British Columbia", cityArray)).toBe(25000);
    expect(ct.getPopulationofCity("Halifax", cityArray)).toBe(985000);
});

test("Testing getindexOfCity()", () => {
    let ct = new Community();
    let cityArray = [];
    cityArray.push(ct.createCity('Airdrie', 51.2927, 114.0134, 700, 1));
    cityArray.push(ct.createCity('Calgary', 51.0447, 548.2548, 189000, 2));
    cityArray.push(ct.createCity('British Columbia', 11.2927, 554.2548, 25000, 3));
    cityArray.push(ct.createCity("Halifax", 45.3658, 52.3698, 985000, 4));

    expect(ct.getindexOfCity("Airdrie", cityArray)).toBe(0);
    expect(ct.getindexOfCity("Calgary", cityArray)).toBe(1);
    expect(ct.getindexOfCity("British Columbia", cityArray)).toBe(2);
    expect(ct.getindexOfCity("Halifax", cityArray)).toBe(3);
});

test("Testing loadAPICity()", async () => {
    let ct = new Community();
    let apiCities = await ct.loadAPICity();

    expect(await apiCities.length).toBe(5);
    expect(await apiCities.length).not.toBe(7);
    expect(await apiCities[0].Name).toBe("Calgary");
    expect(await apiCities[3].Location[0]).toBe(41);
    expect(await apiCities[4].Location[1]).toBe(10);
    expect(await apiCities[1].Population).toBe(972223);
    expect(await apiCities[2].Name).toBe("Red Deer");
    expect(await apiCities[3].CountryName).toBe("Albania");
    expect(await apiCities[4].Area).toBe(323802);
});


test("Testing Show() in City Class", () => {
    let ct = new Community();
    let cityArray = [];
    cityArray.push(ct.createCity('Airdrie', 51.2927, 114.0134, 700, 1));
    cityArray.push(ct.createCity('Calgary', 51.0447, 548.2548, 189000, 2));
    cityArray.push(ct.createCity('British Columbia', 11.2927, 554.2548, 25000, 3));

    expect(ct.newCt.show('Airdrie', cityArray)).toBe('Airdrie is at latitude:51.2927 and longitude:114.0134 with a population of 700');
    expect(ct.newCt.show('Calgary', cityArray)).toBe('Calgary is at latitude:51.0447 and longitude:548.2548 with a population of 189000');
    expect(ct.newCt.show('British Columbia', cityArray)).toBe('British Columbia is at latitude:11.2927 and longitude:554.2548 with a population of 25000');
    expect(ct.newCt.show('Calgary', cityArray)).not.toBe('Canada is at latitude:51.0447 and longitude:548.2548 with a population of 189000');
    expect(ct.newCt.show('British Columbia', cityArray)).not.toBe('Columbia is at latitude:11.2927 and longitude:554.2548 with a population of 25000');

});


test("Testing movedIn() in City Class", () => {
    let ct = new Community();
    let cityArray = [];
    cityArray.push(ct.createCity('Airdrie', 51.2927, 114.0134, 700, 1));
    cityArray.push(ct.createCity('Calgary', 51.0447, 548.2548, 189000, 2));
    cityArray.push(ct.createCity('British Columbia', 11.2927, 554.2548, 25000, 3));

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
    cityArray.push(ct.createCity('Airdrie', 51.2927, 114.0134, 700, 1));
    cityArray.push(ct.createCity('Calgary', 51.0447, 548.2548, 189000, 2));
    cityArray.push(ct.createCity('British Columbia', 11.2927, 554.2548, 25000, 3));

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
    cityArray.push(ct.createCity('Airdrie', 51.2927, 114.0134, 700, 1));
    cityArray.push(ct.createCity('Calgary', 51.0447, 548.2548, 189000, 2));
    cityArray.push(ct.createCity('British Columbia', 11.2927, 554.2548, 25000, 3));
    cityArray.push(ct.createCity('Halifax', 45.3658, 52.3698, 985000, 4));

    expect(ct.newCt.howBig('Airdrie', cityArray)).toBe("Village");
    expect(ct.newCt.howBig('Calgary', cityArray)).toBe("City");
    expect(ct.newCt.howBig('British Columbia', cityArray)).toBe("Large Town");
    expect(ct.newCt.howBig('Halifax', cityArray)).toBe("City");

});

test("Testing apiPostData()", async () => {
    let ct = new Community();
    const newCity = ct.createCity('Airdrie', 51.2927, 114.0134, 700, 6);
    const savedCity = await ct.apiPostData(false, newCity);

    expect(savedCity.length).toBe(6);
    expect(savedCity.length).not.toBe(5);
    expect(savedCity[5].Name).toBe("Airdrie");
    expect(savedCity[5].Latitude).toBe(51.2927);
    expect(savedCity[5].Population).toBe(700);

});
test("Testing getCityTemp()", async () => {
    let ct = new Community();
    const cityTemp = await ct.getCityTemp("Airdrie");

    expect(cityTemp.length).toBe(2);
    expect(cityTemp.length).not.toBe(5);
    expect(typeof (cityTemp)).toBe("object");

});
