import Card from 'react-bootstrap/Card'
import React from 'react'

class Quotes extends React.Component{

render(){
    return(
       <Card border="dark">
           <Card.Body text ="primary">
            <p> 
        <h4 style={{textAlign :"center"}}>  {this.props.quote} </h4>
            </p>
           </Card.Body>
       </Card>
    )
    }

}

export default Quotes