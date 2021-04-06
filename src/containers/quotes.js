import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import React from 'react'

class Quotes extends React.Component{

render(){
    return(
       <Card border="dark">
           <Card.Body text ="primary">
            <p> 
            <h4 style={{textAlign :"center"}}>  {this.props.quote} </h4>
            <Button variant="success"> Like</Button>{' '}
            </p>
           </Card.Body>
       </Card>
    )
    }

}

export default Quotes