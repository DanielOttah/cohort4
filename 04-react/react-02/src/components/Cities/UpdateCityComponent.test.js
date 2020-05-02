import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
// import CityInputField from './CityInputField.js'
import UpdateCityComponent from './UpdateCityComponent.js'

test('renders UpdateCityComponent', () => {
    // set up the callbacks to test later
    const onChangeUpdateCityName = jest.fn();
    const onChangeUpdateCityLat = jest.fn();
    const onChangeUpdateCityLon = jest.fn();
    const onChangeUpdateCityPop = jest.fn();

    const newCity = {
        1: { key: 'key1', cityName: 'Lethbridge', cityLat: 41, cityLon: 155, cityPop: 90000 },
        2: { key: 'key2', cityName: 'Maine', cityLat: 11, cityLon: 105, cityPop: 96000 }
    };
    const { getByText } = render(<UpdateCityComponent
        newCity={newCity}
        changeName={onChangeUpdateCityName}
        changeLat={onChangeUpdateCityLat}
        changeLon={onChangeUpdateCityLon}
        changePop={onChangeUpdateCityPop}
    />);
    screen.debug();
    // change();
    const textElement = getByText(/Update City Information/i);
    expect(textElement).toBeInTheDocument();
});

// function change() {
//     // fireEvent.click(screen.getByText(txt));
//     fireEvent.change()
// }
