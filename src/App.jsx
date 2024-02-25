import Header from './components/Header.jsx';
import TabButton from './components/TabButton.jsx';
import {CORE_CONCEPTS} from './data.js';
import ClickButton from './components/TabButton.jsx';
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
            <TabButton>Monitor</TabButton>
            <TabButton>Pc</TabButton>
            <TabButton>Accessories</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
