import logo from './logo.svg';
import './App.css';
import { Footbal } from './Fottbal';
import Simple from './Componets/simple';
import Info from './Componets/info';
import React from 'react';

function App() {
  const value=new Footbal("Lesha");
  const mus=["True","False","i dont know"];
  function Randstr(){
    var indx= RandInt(0,mus.length);
     return mus[indx];
  }
  const [text,Settext]=React.useState(Randstr());
  const mussiv= [new Footbal("Spartak"),new Footbal("Loko"),new Footbal("Dinamo")];
  return (
    <div className="App">
    <div>{mussiv.map(el=>{
      return(
        <div style={{margin:"5px",backgroundColor:"aqua"}}>
          <div>{el.name}</div>
          <div>{el.date}</div>
          <Info footbal={el}></Info>
        </div>
      )
    })}</div>
    <button onClick={()=>Settext(Randstr())}>
        dfbdbdfb
    </button>
    {text}

    </div>
  );
}
function RandInt(min,max)
{
   let rand = Math.floor( min + (Math.random() * (max-min)));

  return rand;
}

export default App;
