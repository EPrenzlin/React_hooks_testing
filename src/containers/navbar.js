import React,{Component} from 'react' 
import Nav from 'react-bootstrap/Nav'

export default class NavBar extends Component{
    render(){
        return(
            <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">All Quotes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/liked">Liked Quotes</Nav.Link>
            </Nav.Item>
          </Nav>
        )
    }
}