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
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </p>
           </Card.Body>
       </Card>
    )
    }

}

export default Quotes