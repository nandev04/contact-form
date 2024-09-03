import { useState } from 'react';
import './styles/App.css';

function App() {
  return (
    <div className="containerForm">
      <h1 className="contact">Contact Us</h1>
      <div>
        <label htmlFor="">wvdas</label>
        <input type="text" className="border-2 border-black" />
        <label className="block" htmlFor="">
          wvdas
        </label>
        <input className="border-2 border-black" type="text" />
      </div>
      <div>
        <label htmlFor=""></label>
        <input className="border-2 border-black" type="email" />
      </div>
      <div>
        <input className="border-2 border-black" type="radio" />
        <select name="" id=""></select>
        <select name="" id=""></select>
      </div>
      <div>
        <label htmlFor=""></label>
        <input className="border-2 border-black" type="text" />
      </div>
      <div>
        <input
          className="border-2 border-black"
          type="checkbox"
          name=""
          id=""
        />
      </div>
      <button>Submit</button>
    </div>
  );
}

export default App;
