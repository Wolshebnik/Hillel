import React, { useState} from "react";
import Button from "./components/button";
import "./App.css";
import InputField from "./components/inputField";
import ListItem from "./components/listItem";

function App() {
  const [cars, setCars] = useState([
    {
      id: 1,
      model: "Mazda",
      color: "red",
    },
    {
      id: 2,
      model: "Toyota",
      color: "red",
    },
    {
      id: 3,
      model: "WV",
      color: "blue",
    },
    {
      id: 4,
      model: "Mercedes",
      color: "red",
    },
  ]);
  const [newCar, setNewCar] = useState({ model: "", color: "" });
  const [checkFilter, setCheckFilter] = useState(0);

  const deleteItem = (id) => {
    const idx = cars.findIndex((el) => el.id === id);
    setCars([...cars.slice(0, idx), ...cars.slice(idx + 1)]);
  };
  const createItem = (event) => {
    const { placeholder, value } = event.target;

    setNewCar({
      ...newCar,
      [placeholder]: value,
    });
  };

  const addItem = (e) => {
    e.preventDefault();
    if (newCar.model === "" || newCar.color === "") return;
    const index = cars[cars.length - 1].id;
    const car = { ...newCar, id: index + 1 };
    setCars([...cars, car]);
    setNewCar({ model: "", color: "" });
  };

  const onFilter = () => {
    const allBlue = cars.filter(blue => blue.color === "blue");
    setCheckFilter(...allBlue);
    console.log(checkFilter)
  }

  return (
    <div className="App">
      <ul>
        {cars.map((car) => <ListItem key={`${car.id}_${car.model}`} carsArray={car} func={() => deleteItem(car.id)}/>)}
        <form onSubmit={addItem}>
          <InputField
            placeHolder={"model"}
            change={(event) => createItem(event)}
            value={newCar.model}
          />
          <InputField
            placeHolder={"color"}
            change={(event) => createItem(event)}
            value={newCar.color}
          />

          <Button text={"Add"} />
          <Button text={"Filter blue"} func={() => onFilter()} />
        </form>
        {checkFilter && checkFilter.map(check=> <ListItem key={`${check.id}_${check.model}`} carsArray={check}
            func={() => deleteItem(check.id)}
            />)}
      </ul>
    </div>
  );
}

export default App;
