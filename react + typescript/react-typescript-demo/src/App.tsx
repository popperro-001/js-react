import './App.css';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <Status status='loading'/>
      <Heading>Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet name='Pavel' messageCount={15} isLoggedIn={true}/>
    </div>
  );
}

export default App;
