// const fetch = require('node-fetch');
export const getData = {
    url: 'https://uinames.com/api/?amount=10',

    getFirstName: (data) => {
        return data[0].name;
    },
    getAllFirstNames: (data) => {
        // let fNames = [];
        // for (let i = 0; i < data.length; i++) {
        //     fNames.push(data[i].name);
        // }
        // return fNames;
        return data.map((d, i, x) => d.name);
    },
    showDelayProblem: () => {
        let items = [];
        // console.log('One');
        items.push("One");
        setTimeout(() => { // Simulates a fetch
            // console.log("Two");
            items.push("Two");
        }, 1 * 1000);
        // console.log('Three');
        items.push("Three"); // We have a problem Huston
        // console.log(items);
        return items;
    },
    showDelaySolution: async() => {
        try {
            console.log('One');
            const value = await new Promise((resolve, reject) =>
                setTimeout(() => resolve("Two"),
                    1 * 2000));
            // Now that we have the value we can use it.
            console.log(value);
            console.log('Three');
        } catch (error) {
            console.log(error);
        }
    },
    getUsers: async() => {
        try {
            const response = await fetch(getData.url);
            const data = await response.json();
            //console.log(data);
            return data;
        } catch (error) {
            console.error('Error:', error);
            // throw (error);
        }
    },
    workWithData: async() => {
        const data = await getData.getUsers();
        // console.log(getData.getFirstName(data));
        // console.log(getData.getAllFirstNames(data));
        return data;
    },
};
export const me = {
    "name": "Daniel",
    "surname": "Ottah",
    "gender": "male",
    "region": "Canada"
};