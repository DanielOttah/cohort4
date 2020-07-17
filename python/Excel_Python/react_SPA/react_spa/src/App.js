import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectOption, setSelectOption] = useState('')
  const [selectList, setSelectList] = useState([])
  const [selectId, setSelectId] = useState('')
  const [entries, setEntries] = useState(0)

  const handleSelectChange = async (e) => {
    let url = "";
    setSelectOption(e.target.value)
    if (e.target.value === 'customers') {
      url = 'customers';
    }
    else if (e.target.value === 'invoices') {
      url = 'invoices';
    }
    else if (e.target.value === 'products') {
      url = 'products';
    }
    else if (e.target.value === 'everything') {
      url = 'all';
    }
    let rsp = await fetch(`http://127.0.0.1:3200/${url}`);
    let resp = await rsp.json()
    setEntries(Object.keys(resp).length)
    setSelectList(Object.keys(resp))
    printConsole()
    console.log(resp);
  }

  const getSelectedOPtion = async (e) => {

    setSelectId(e.target.value)
    let url = "";
    if (selectOption === 'customers') {
      url = 'client-invoice';
    }
    else if (selectOption === 'invoices') {
      url = 'an-invoice';
    }
    else if (selectOption === 'products') {
      url = 'aproduct';
    }

    let resp = await postData(`http://127.0.0.1:3200/${url}`, { 'id': e.target.value })

    printConsole()
    console.log(resp);

  }
  return (
    <div className="container">
      <fieldset>
        <legend>Single Page Application</legend>
        <div className="cont">
          <select value={selectOption} onChange={handleSelectChange}>
            <option >--Select--</option>
            <option value="customers">Customers</option>
            <option value="invoices">Invoices</option>
            <option value="products">Products</option>
            <option value="everything">Everything</option>
          </select>
          <select value={selectId} onChange={getSelectedOPtion}>
            <option>--Select--</option>
            {all_List(selectList)}
          </select>
          <span><b>Total of {entries} entries</b></span>
        </div>
        <pre className="LLDisplay" id="logger"></pre>
      </fieldset>

    </div>
  );
}

export default App;

function all_List(array) {
  return array.map((items, index) =>
    <List key={index.toString()} value={items} />
  )

}

function List(props) {
  return <option value={props.value}>{props.value}</option>

}

const postData = async (link = '', data = {}) => {

  // Default options are marked with *
  let response = await fetch(link, {
    method: 'POST',     // *GET, POST, PUT, DELETE, etc.
    mode: 'cors',       // no-cors, *cors, same-origin
    cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow',         // manual, *follow, error
    referrer: 'no-referrer',    // no-referrer, *client
    body: JSON.stringify(data)  // body data type must match "Content-Type" header
  });

  const json = await response.json();    // parses JSON response into native JavaScript objects
  // json.status = response.status;
  // json.statusText = response.statusText;
  // console.log(json, typeof(json));
  return json;
}

const printConsole = () => {
  (function () {
    // let old = console.log;
    let logger = document.getElementById('logger');

    console.log = function () {
      for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'object') {
          logger.innerHTML = (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<hr />';
        }
        else if (typeof arguments[i] !== 'object') {
          logger.innerHTML = arguments[i];
        }
      }
      // old.apply(undefined, arguments);
    }
  })();
}