// src/pages/Home.jsx
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';

const Home = () => {
  return (
    <>
      <Header />
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
        <Card className="text-center shadow-sm" style={{ maxWidth: '500px', width: '100%' }}>
          <Card.Body className="py-5">
            <h4 className="text-muted mb-3">No posts to show</h4>
            <p className="text-muted mb-4">Add friends to see posts</p>
            <Button 
              as={Link} 
              to="/friends"
              style={{
                backgroundColor: '#1877f2',
                borderColor: '#1877f2'
              }}
            >
              Find Friends
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Home;