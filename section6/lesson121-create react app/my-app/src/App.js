// import logo from './logo.svg';
import React from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello World!</h2>
}

const Field = () => {
  const holder = 'Enter here';
  const styledField = {
    width: '300px'
  }
  return <input type="text" 
                placeholder={holder} 
                style={styledField}/>
}

class Field2 extends React.Component {
  render(){
    const holder = 'Enter here';
    const styledField = {
      width: '300px'
    }

    return <input type="text" 
                  placeholder={holder} 
                  style={styledField}/>
  }
}

function Btn(){
  const text = 'Log in';
  const logged = true;

  // const res = () => {
  //   return 'Log in';
  // }

  return <button>{logged ? 'Enter' : text}</button>
}

function WhoAmI({name, surname, link}) {
  return(
    <div>
      <h1>My name is {name}, surname - {surname}</h1>
      {/* <h1>My name is {name.firstName}, surname - {surname}</h1>
      <h1>My name is {name()}, surname - {surname}</h1> */}
      <a href={link}>My profile</a>
    </div>
  )
}

function App() {
  return (
    <div className="App">
        <WhoAmI name="Pavel" surname="Pak" link="facebook.com"/>
        {/* <WhoAmI name={{firstName: 'Mike'}} surname="Wazowski" link="instagram.com"/>
        <WhoAmI name={() => {return 'Ralph'}} surname="Pak" link="facebook.com"/> */}
    </div>
  );
}


export {Header};
export default App;
