import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [dummy2, setDummy2] = useState({ name: "", surname: "" });

  const [dummyArray, setArray] = useState([]);
  const [lastValue, setLastValue] = useState({});
  const increaseToDummy2 = () => {
    setArray([...dummyArray, dummy2]);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setDummy2((prevstate) => {
      let newDummy = Object.assign({}, prevstate);
      newDummy[name] = value;
      return newDummy;
    });
  };

  const deleteLast = () => {
    setArray((prevstate) => {
      let newArray = Object.assign([], prevstate);
      if (prevstate.length !== 1) newArray.pop();
      return newArray;
    });
  };

  useEffect(() => {
    setArray(dummyArray);
    setLastValue(dummyArray[dummyArray.length - 1]);
  }, [dummyArray]);

  return (
    <div className="container ">
      <input
        onChange={(e) => handleChange(e)}
        placeholder="Name giriniz"
        className="form-control"
        name="name"
        type="text"
      />
      <input
        onChange={(e) => handleChange(e)}
        placeholder="Surname giriniz"
        className="form-control"
        name="surname"
        type="text"
      />
      {dummyArray.map((d) => (
        <ul>
          <li>{`${d.name} ${d.surname}`}</li>
        </ul>
      ))}
      <button className="btn btn-primary" onClick={increaseToDummy2}>
        Arttır
      </button>
      <button onClick={deleteLast}>Delete</button>
    </div>
  );
}

export default App;
