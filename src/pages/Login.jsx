import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false
  });

  const validateForm = () => {
    const newErrors = {
      email: !formData.email.trim(),
      password: !formData.password.trim()
    };
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched when form is submitted
    setTouched({
      email: true,
      password: true
    });
    
    if (validateForm()) {
      try {
        localStorage.setItem('token', 'dummy-token');
        navigate('/');
      } catch (error) {
        console.error('Login error:', error);
      }
    }
  };

  const handleBlur = (field) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
    validateForm();
  };

  const getInputStyle = (field) => {
    if (errors[field] && (touched[field] || errors[field])) {
      return {
        borderColor: '#dc3545',
        boxShadow: '0 0 0 0.2rem rgba(220, 53, 69, 0.25)'
      };
    }
    return {};
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#F0F2F5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1000px',
        gap: '60px'
      }}>
        {/* Left side */}
        <div style={{
          maxWidth: '500px'
        }}>
          <h1 
            style={{ 
              fontSize: '4.5rem', 
              color: '#1877f2',
              fontWeight: 'bold',
              marginBottom: '10px'
            }}
          >
            Connecto
          </h1>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'normal',
            margin: '0'
          }}>
            Weaving the world together.
          </h2>
        </div>

        {/* Right side */}
        <div style={{ width: '396px' }}>
          <Card className="shadow border-0">
            <Card.Body className="p-4">
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    size="lg"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({...formData, email: e.target.value});
                      if (touched.email) validateForm();
                    }}
                    onBlur={() => handleBlur('email')}
                    style={getInputStyle('email')}
                    isInvalid={errors.email && (touched.email || errors.email)}
                  />
                  {errors.email && (touched.email || errors.email) && (
                    <Form.Text className="text-danger">
                      Email is required
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    size="lg"
                    value={formData.password}
                    onChange={(e) => {
                      setFormData({...formData, password: e.target.value});
                      if (touched.password) validateForm();
                    }}
                    onBlur={() => handleBlur('password')}
                    style={getInputStyle('password')}
                    isInvalid={errors.password && (touched.password || errors.password)}
                  />
                  {errors.password && (touched.password || errors.password) && (
                    <Form.Text className="text-danger">
                      Password is required
                    </Form.Text>
                  )}
                </Form.Group>

                <div className="d-grid mb-3">
                  <Button 
                    type="submit" 
                    size="lg"
                    style={{ 
                      backgroundColor: '#1877f2',
                      borderColor: '#1877f2'
                    }}
                  >
                    Log In
                  </Button>
                </div>

                <div className="text-center mb-4">
                  <a 
                    href="#" 
                    className="text-decoration-none"
                    style={{ color: '#1877f2' }}
                  >
                    Forgot Password?
                  </a>
                </div>

                <hr className="my-2" />

                <div className="text-center">
                  <Button 
                    variant="success" 
                    size="lg"
                    onClick={() => navigate('/register')}
                    style={{ 
                      backgroundColor: '#42b72a',
                      borderColor: '#42b72a'
                    }}
                  >
                    Create New Account
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;