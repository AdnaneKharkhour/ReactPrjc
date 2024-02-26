import { useState } from 'react';
import Header from './components/Header.jsx';
import TabButton from './components/TabButton.jsx';
import {CORE_CONCEPTS} from './data.js';
import {PRODUCTS} from './data.js';
function CoreConcept({image,title,description}){
  return(
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}
function App() {
  const [selectedTopic, setSelectedTopic]=useState();

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
          </ul>
        </section>
        <section id='products'>
          <h2>Products</h2>
          <menu>
            <TabButton 
            isSelected={selectedTopic==='monitor'} 
            onSelect={() => handleSelect('monitor')}>Monitor</TabButton>
            <TabButton 
            isSelected={selectedTopic==='pc'}  
            onSelect={() => handleSelect('pc')}>Pc</TabButton>
            <TabButton 
            isSelected={selectedTopic==='accessories'} 
            onSelect={() => handleSelect('accessories')}>Accessories</TabButton>
          </menu>
          {!selectedTopic && <p>Please select a button</p>}
          {selectedTopic && (
            <div id='tab-content'>
            <img src = {PRODUCTS[selectedTopic].img} />
            <h3>{PRODUCTS[selectedTopic].title}</h3>
            <p>{PRODUCTS[selectedTopic].description}</p>
          </div>) }
        </section>
      </main>
    </div>
  );
}

export default App;
