import Card from 'react-bootstrap/Card'
import React from 'react'

class Quotes extends React.Component{

render(){
    return(
       <Card bg="primary" border="dark">
           <Card.Text text ="primary">
            {this.props.quote}
           </Card.Text>
       </Card>
    )
    }

}

export default Quotes