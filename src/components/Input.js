import React, { useState } from 'react';
import styled from "@emotion/styled";
import { data } from '../data';
import { List } from './List';

const StyledInput = styled.input`
   width:700px;
   height: 30px;
   margin-top: 10px;
`;


export function Input ({children}) {
    const [search, setSearch] = React.useState("");
    return(
        <>
        <StyledInput placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
        <br />
        {data.filter((item) =>{
                   return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search);
                 }).map((item) =>(
          <div key={item.id}>
            <List>{item.name}</List>
          </div>
         ))}
        </>
    )
    }