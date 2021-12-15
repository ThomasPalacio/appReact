import './App.css';
import NavBar from './components/NavBar';
import ItemsListContainer from './components/ItemsListContainer';

function App() {
  return (
        <div className="App">
           <NavBar/>
           <ItemsListContainer greeting={ "BIENVENIDO A LISBOA" }/>
        </div>       
   );
}


export default App;
