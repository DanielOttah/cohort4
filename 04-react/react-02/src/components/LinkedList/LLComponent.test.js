import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { LLComponent, LLOptions } from './LLComponent.js'


let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});
afterEach(cleanup);


it("LLComponent renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LLComponent></LLComponent>, div)
})
it("LLOptions renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LLOptions></LLOptions>, div)
})
it("renders LLComponent Correctly", () => {
    const { getByTestId } = render(<LLComponent />)
    expect(getByTestId("idBtnComplete")).toBeTruthy();
    expect(getByTestId("idBtnComplete")).toHaveTextContent("Complete");

})
