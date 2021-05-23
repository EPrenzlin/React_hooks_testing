import Card from 'react-bootstrap/Card'
import { Share } from 'react-twitter-widgets'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import React from 'react'

class Quotes extends React.Component{

likeQuote = () => {
    
fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(this.props.quote),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
}

render(){
    return(
       <Card border="dark">
           <Card.Body text ="primary">
            <p> 
            <h4 style={{textAlign :"center"}}> {this.props.quote} </h4>
            <Container> 
            <Share url={this.props.quote} />
            <Button variant="outline-primary" active onClick={this.likeQuote}>Like</Button>{' '}
            </Container>
            </p>
           </Card.Body>
       </Card>
        )
    }

}

export default Quotes