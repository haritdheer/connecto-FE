// src/components/layout/Header.jsx
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Navbar bg="white" className="shadow-sm mb-3">
      <Container>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          style={{ 
            color: '#1877f2',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}
        >
          Connecto
        </Navbar.Brand>

        <div className="d-flex align-items-center gap-4">
          <Nav>
            <Nav.Link 
              as={Link} 
              to="/" 
              className="d-flex align-items-center gap-2"
              style={{ color: '#1877f2' }}
            >
              <i className="bi bi-house-door-fill fs-5"></i>
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/friends" 
              className="d-flex align-items-center gap-2"
            >
              <i className="bi bi-people-fill fs-5"></i>
            </Nav.Link>
          </Nav>
          <Button 
            variant="outline-danger" 
            size="sm"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;