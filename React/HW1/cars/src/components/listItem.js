import React from 'react';
import Button from "./button";

function ListItem(props) {
	const {model, color} = props.carsArray
	return (
		<li className={"item"}>
			{`Модель: ${model} цвет: ${color}`}
			{!props.btn ? <Button func={props.func} text={"Delete me"}/>: ''}
		</li>
	);
}

export default ListItem;