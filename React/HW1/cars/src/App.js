import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';


import "./App.css";
import InputField from "./components/inputField";
import ListItem from "./components/listItem";
import Button from "./components/button";

export default class App extends Component {
  state = {
    filter: null,
    newCar: {model:'', color:''},
    cars: [
      {
        id: uuidv4(),
        model: "Mazda",
        color: "red",
      },
      {
        id: uuidv4(),
        model: "Toyota",
        color: "red",
      },
      {
        id: uuidv4(),
        model: "WV",
        color: "blue",
      },
      {
        id: uuidv4(),
        model: "Mercedes",
        color: "red",
      },
    ],
  };

  deleteItem = (id) => {
    const idx = this.state.cars.findIndex((el) => el.id === id);
    const cars = [...this.state.cars.slice(0, idx), ...this.state.cars.slice(idx + 1)]

    this.setState({cars});
  };
  createItem = (event) => {
    const { placeholder, value } = event.target;
    const newCar = {[placeholder]: value}

    this.setState({
      newCar: {...this.state.newCar,...newCar}
    });
  };

  addItem = (e) => {
    e.preventDefault();
    if (this.state.newCar.model === "" || this.state.newCar.color === "") return;
    const newCar = {id: uuidv4(), ...this.state.newCar}

    this.setState({cars:[...this.state.cars, newCar]})
    this.setState({newCar: {model: '', color: ''}})

  };

  onFilter = () => {
    const allBlue = this.state.cars.filter((blue) => blue.color === "blue");
   this.setState({filter:allBlue})
    console.log(this.state.filter);
  };
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.cars.map((car) => (
            <ListItem
              key={`${car.id}_${car.model}`}
              carsArray={car}
              func={() => this.deleteItem(car.id)}
            />
          ))}
          <form onSubmit={this.addItem}>
            <InputField
              placeHolder={"model"}
              change={this.createItem}
              value={this.state.newCar.model}
            />
            <InputField
              placeHolder={"color"}
              change={this.createItem}
              value={this.state.newCar.color}
            />

            <Button text={"Add"} />
            <Button text={"Filter blue"} func={() => this.onFilter()} />
          </form>
          {this.state.filter && this.state.filter.map(check=> <ListItem key={`${check.id}_${check.color}`} carsArray={check}
              btn={'no'}
              />)}
        </ul>
      </div>
    );
  }
};

