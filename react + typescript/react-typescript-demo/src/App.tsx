import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Banner',
    },
    {
      first: 'Tony',
      last: 'Stark',
    },
    {
      first: 'Steve',
      last: 'Rojers',
    }
  ]
  return (
    <div className="App">
      <Greet name='Pavel' messageCount={20} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
