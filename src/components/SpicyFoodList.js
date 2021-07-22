import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("ALL");

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods,newFood];
    setFoods(newFoodArray)
  }

  function handleHeatlevel(id){
    let newFoodArray = foods.map(food => {
      if (food.id === id){
        food.heatLevel++
        return food
      }
      else{
        return food
      }
    })
    setFoods(newFoodArray)
  }

  function handleLiClick(id){
    const newFoodList = foods.filter(food => food.id !== id)
    setFoods(newFoodList);
  }

  function handleFilter(event){
    setFilterBy(event.target.value)
  }
  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "ALL"){
      return true;
    }
    else{
      return food.cuisine === filterBy
    }
  })

  const foodList = foodsToDisplay.map(food=>(
    <li key={food.id} onClick={() =>  handleHeatlevel(food.id)}>
       {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ))

  return (
    <div>
      <button onClick = {handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name="filter" onChange = {handleFilter}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select> 
    </div>
  );
}

export default SpicyFoodList;
