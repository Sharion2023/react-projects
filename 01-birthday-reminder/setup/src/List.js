import React, { useEffect, useState } from 'react';
import data from './data';



const List = () => {

  const [items, setItems] = useState([]);

  useEffect(()=> {
    setItems(data);
  }, [])

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    console.log(id);
    alert("Delete button engaged!")
    setItems(newItems)
  }
  
  return (
    <>
      {items.map((person)=> {
        const {id, name, age, image} = person;
        //console.log(id)
        return (
        <article key={id} className="person">
          <img src={image} alt={name} /> <button onClick={() => deleteItem(id)} >click to remove</button>
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        </article>      
          
        );
      })} 
      <button onClick={() => setItems([])}> clear all</button>
    </>
  );
};

export default List;
