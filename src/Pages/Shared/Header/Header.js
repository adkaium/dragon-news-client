import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleSignOut = () =>{
    logOut()
    .then(res=>{
      console.log(res.user);
    }).catch(err =>console.error(err))
  }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mb-3'  sticky="top">
      <Container>
        <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
            {
              user?.uid ?
              <>
               <Button onClick={handleSignOut} variant="outline-dark" className='me-2'>Sign Out</Button>
              <span><Image
              src={user?.photoURL}
              style={{height: "40px"}}
              roundedCircle
          >
          </Image></span> 
          
              </>:
            <p>
              <Button variant='outline-dark' className='me-2'><Link to='/login'>Login</Link></Button>
              <Button variant='outline-dark' className='me-2'> <Link to='/signup'>Sign Up</Link></Button>
              <FaUserAlt></FaUserAlt>

            </p>
            }
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            {user?.displayName}
            </Nav.Link>
          </Nav>
          <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;