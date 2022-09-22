import './App.css';
import {UserContextProvider} from './components/context/UserContext';
import {User} from './components/context/User';



function App() {
  
  return (
    <div className="App">      
      <h2>Hello</h2>
      <UserContextProvider>
        <User/>
      </UserContextProvider>          
    </div>
  );
}

export default App;
