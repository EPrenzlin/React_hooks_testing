import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import React, { useState, useEffect } from 'react';

function App() {

const [quotes,getQuotes] = useState([])

useEffect(() => {
  fetch('http://burli.pythonanywhere.com/shayshay/random?limit=5')
  .then(response => response.json())
  .then(data => getQuotes(data.quotes))
},[])

const getMoreQuotes = () =>{
  fetch('http://burli.pythonanywhere.com/shayshay/random?limit=5')
  .then(response => response.json())
  .then(data => getQuotes(data.quotes))
  }
  
  return (
    <div> 
    <Container> 
    <Button onClick={() => getMoreQuotes()}><br/> 
    <h2> Get more Shay Shay quotes</h2>
    </Button>
    {quotes.map(q => <h2> {q} </h2>)}
    </Container>
    </div>
    );
}

export default App;