import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaReact } from "react-icons/fa";


function Nav() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container className='nav'>
        <Navbar.Brand className='nav-bar' href="#home">Sub At<span className='icon'><FaReact/></span>mic</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Person McPersonface</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;