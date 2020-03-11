import convertDegrees from './daily.js'
//Test for element clicked
test('Check to see click event', () => {
    expect(convertDegrees.convertToFahrenheit(0)).toBe(32);
    expect(convertDegrees.convertToFahrenheit(50)).toBe(122);
});