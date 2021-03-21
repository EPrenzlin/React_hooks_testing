import Card from 'react-bootstrap/Card'
import React from 'react'

class Quotes extends React.Component{

render(){
    return(
       <Card border="dark">
           <Card.Text>
               {this.props.quote}
           </Card.Text>
       </Card>
    )
}

}

export default Quotes