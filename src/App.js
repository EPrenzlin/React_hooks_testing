import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import React, { useState, useEffect } from 'react';

import Quotes from './containers/quotes' 

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
    </Container>
    <Container> 
    {quotes.map(q => 
    <Quotes quote={q}/> 
    )}
    </Container>
    </div>
    );
}

export default App;

// add in bootstrap formatting for club shay shay