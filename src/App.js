import React from 'react';
import logo from './logo.svg';
import './App.css';
import { css } from '@emotion/css';
import { Input } from './components/Input';
import { ListName } from './components/ListName';
import { List } from './components/List';
import {data} from "./data.js";

function App() {
  return (
    <div className="App">
     <ListName>Name</ListName> 
    <Input/>
    {/* <br />
   {data.filter((item) =>{
              return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search);
            }).map((item) =>(
     <div key={item.id}>
       <List>{item.name}</List>
     </div>
    ))} */}
    </div>
  );
}

export default App;
