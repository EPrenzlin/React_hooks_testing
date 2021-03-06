import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import React, { useState, useEffect } from 'react';

function App() {

const [count, setCount] = useState(0) 

const [quotes,getQuotes] = useState([])

useEffect(() => {
  // this updates the document, kind of like how componentdidmount or component did update does. 
  fetch('http://burli.pythonanywhere.com/shayshay/random?limit=20')
  .then(response => response.json())
  .then(data => getQuotes(data.quotes))
},[])

const getMoreQuotes = () =>{
  fetch('http://burli.pythonanywhere.com/shayshay/random?limit=20')
  .then(response => response.json())
  .then(data => getQuotes(data.quotes))
  }
  
  return (
    <div> 
    <Container> 
    <Button onClick={() => setCount(count + 1 )}> 
      {count}
    </Button>
    <Button onClick={() => getMoreQuotes()}><br/> 
    <h2> Get more Shay Shay quotes</h2>
    </Button>
    <h1> You have pressed {count} many times </h1> <br/> 
    {quotes.map(q => <h2> {q} </h2>)}
    </Container>
    </div>
    );
}

export default App;
// test test
// more 