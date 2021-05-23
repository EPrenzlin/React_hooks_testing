import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import React from 'react'


class NavBar extends React.Component{

render(){
    return(
<Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="/Liked">Liked Posts</Nav.Link>
    </Nav>
</Navbar>

    )}
}

export default NavBar 