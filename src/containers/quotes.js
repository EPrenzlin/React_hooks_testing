import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { Share } from 'react-twitter-widgets'
 

import React from 'react'

class Quotes extends React.Component{

render(){
    return(
       <Card border="dark">
           <Card.Body text ="primary">
            <p> 
            <h4 style={{textAlign :"center"}}> {this.props.quote} </h4>
            <Share url={this.props.quote} />
            </p>
           </Card.Body>
       </Card>
    )
    }

}

export default Quotes