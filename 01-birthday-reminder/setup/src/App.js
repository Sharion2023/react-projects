import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {

  //const[people, setPeople] = useState(items)

  return <main>
    <section className='container'>
   
    <h3>{List.length} birthdays today</h3>
    <List/>
    
    </section>
  </main>;
}

export default App;
