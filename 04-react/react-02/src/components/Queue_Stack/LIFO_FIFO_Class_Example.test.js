import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { LIFOFIFOClassExample, Data, stringify } from './LIFO_FIFO_Class_Example.js'
// import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';


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

// const Data = jest.fn();
// const stringify = jest.fn();



test('Testing Data()', () => {

    expect(Data().length).not.toBe(0);
    expect(Data().length).not.toBe(2);

});

test('Testing Stringify()', () => {
    const arr = ["Nigeria", "Canada", "Germany", "China", "Russia"]
    expect(stringify(arr)).toBe("1: Nigeria 2: Canada 3: Germany 4: China 5: Russia ");
    const arr1 = ["Oman", "Iraq", "Ghana", "Brazil", "Congo"]
    expect(stringify(arr1)).toBe("1: Oman 2: Iraq 3: Ghana 4: Brazil 5: Congo ");
    const arr2 = ["1", "2", "3", "4", "5", "6", "7", "8"]
    expect(stringify(arr2)).toBe("1: 1 2: 2 3: 3 4: 4 5: 5 6: 6 7: 7 8: 8 ");

    const arr3 = []
    for (let y = 0; y < 3; y++) {
        arr3.push(Data());
    }
    expect(arr3.length).toBe(3);
});
test('Testing LIFO_FIFO_Class_Example Component', () => {

    // const handlePutIn = jest.fn();
    // const handleTakeOut = jest.fn();
    // const handleClear = jest.fn();
    // render(<LIFOFIFOClassExample
    //     onClickIn={handlePutIn}
    //     onClickOut={handleTakeOut}
    //     onClickClear={handleClear}
    // />);
    // // screen.debug();
    // const queue = screen.getByText(/QUEUE - FIFO Example/i);
    // expect(queue).toBeInTheDocument();

    // const stack = screen.getByText(/STACK - LIFO Example/i);
    // expect(stack).toBeInTheDocument();

    // const putIn = screen.queryAllByText(/Put In/i);
    // expect(putIn).toBeInTheDocument();

    // const takeOut = screen.queryAllByText(/Take Out/i);
    // expect(takeOut).toBeInTheDocument();

    // const clear = screen.getByText(/Clear/i);
    // expect(clear).toBeInTheDocument();



    // const putIn = screen.queryAllByText(/Put In/i);
    // const takeOut = screen.queryAllByText(/Take Out/i);
    // const clear = screen.getByText(/Clear/i);


    // fireEvent.click(putIn);
    // click(/Put In/i);
    // console.log(handlePutIn.mock.calls.length);

});
// function click(txt) {
//     fireEvent.click(
//         screen.getByText(txt)
//     );
// }
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LIFOFIFOClassExample></LIFOFIFOClassExample>, div)
})
it("renders LIFOFIFOClassExample Correctly", () => {
    const { getByTestId } = render(<LIFOFIFOClassExample />)
    expect(getByTestId("btn_In")).toBeTruthy();
    expect(getByTestId("btn_Out")).toBeTruthy();
    expect(getByTestId("btn_Clear")).toBeTruthy();
    expect(getByTestId("btn_In")).toHaveTextContent("Put In");
    expect(getByTestId("btn_Out")).toHaveTextContent("Take Out");
    expect(getByTestId("btn_Clear")).toHaveTextContent("Clear");

    const queue = screen.getByText(/QUEUE - FIFO Example/i);
    expect(queue).toBeInTheDocument();

    const stack = screen.getByText(/STACK - LIFO Example/i);
    expect(stack).toBeInTheDocument();

    fireEvent.click(getByTestId("btn_In"));
    // expect(handlePutIn).toHaveBeenCalledTimes(1);
    //console.log(handlePutIn.mock.calls.length);
})
// describe("Fires on click", () => {
//     it("fires on Put In click", () => {
//         //    const handlePutIn = jest.fn();
//         const { queryByTestId } = render(<LIFOFIFOClassExample />)

//         const btnIn = queryByTestId("btn_In");
//         fireEvent.click(btnIn);
//         expect(btnIn).toHaveBeenCalled();
//         console.log(btnIn.mock.calls.length);
//     });
// })



// it("matches snapshot", () => {
//     const tree = renderer.create(<LIFOFIFOClassExample />).toJSON();
//     expect(tree).toMatchSnapshot();
// })


describe("Components renders", () => {
    it("renders and fires on Put In click", () => {
        let fifo_lifo = new LIFOFIFOClassExample();
        // Test first render and componentDidMount
        // act(() => {
        //     ReactDOM.render(<LIFOFIFOClassExample />, container);
        // });
        // const btnIn = container.queryByTestId("btn_In");
        //   const spn = container.querySelector('span')

        const { queryByTestId } = render(<LIFOFIFOClassExample />)
        const btnIn = queryByTestId("btn_In");
        act(() => {
            btnIn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        })
        expect(fifo_lifo.arr.length).toBe(50);
        //   expect(document.title).toBe('You clicked 1 times');

    });
})