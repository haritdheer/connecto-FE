// src/pages/Register.jsx
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap'

const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({})

  // Validation function according to requirements
  const validateForm = () => {
    const newErrors = {}
    
    // First Name validation
    if (!formData.firstName) {
      newErrors.firstName = 'First name is required'
    } else if (!/^[A-Z][a-zA-Z0-9]*$/.test(formData.firstName)) {
      newErrors.firstName = 'First letter should be capital and can contain letters and numbers'
    }

    // Surname validation
    if (!formData.surname) {
      newErrors.surname = 'Surname is required'
    } else if (!/^[A-Z][a-zA-Z0-9]*$/.test(formData.surname)) {
      newErrors.surname = 'First letter should be capital and can contain letters and numbers'
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.(com|org|in)$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email with domain com, org, or in'
    }

    // Date of Birth validation
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of Birth is required'
    } else {
      const age = calculateAge(new Date(formData.dateOfBirth))
      if (age < 13) {
        newErrors.dateOfBirth = 'You must be at least 13 years old'
      }
    }

    // Gender validation
    if (!formData.gender) {
      newErrors.gender = 'Please select a gender'
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/.test(formData.password)) {
      newErrors.password = 'Password must be 8-16 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    }

    // Confirm Password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Calculate age from date of birth
  const calculateAge = (birthDate) => {
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      try {
        // Mock API call - replace with actual API call later
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Show success message
        alert('Registration successful!')
        
        // Redirect to login
        navigate('/login')
      } catch (error) {
        setErrors({
          submit: 'Registration failed. Please try again.'
        })
      }
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      
    }}>
      <div style={{ width: '100%', maxWidth: '600px', marginLeft:'600px' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h1 style={{ 
            color: '#1877f2',
            fontSize: '40px', 
            fontWeight: 'bold',
            marginBottom: '12px'
          }}>
            Connecto
          </h1>
          <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>
            Create a New Account
          </h2>
          <p style={{ color: '#606770' }}>
            It's quick and easy.
          </p>
        </div>
        
        <Card className="shadow border-0">
          <Card.Body className="p-4">
            <Form onSubmit={handleSubmit}>
              <div style={{ 
                display: 'flex', 
                gap: '16px',
                marginBottom: '16px'
              }}>
                <Form.Group style={{ flex: 1 }}>
                  <Form.Control
                    type="text"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group style={{ flex: 1 }}>
                  <Form.Control
                    type="text"
                    placeholder="Surname"
                    value={formData.surname}
                    onChange={(e) => setFormData({...formData, surname: e.target.value})}
                    isInvalid={!!errors.surname}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.surname}
                  </Form.Control.Feedback>
                </Form.Group>
              </div>

              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                  isInvalid={!!errors.dateOfBirth}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.dateOfBirth}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <div style={{ 
                  display: 'flex', 
                  gap: '16px'
                }}>
                  <Form.Check
                    type="radio"
                    label="Male"
                    name="gender"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                    isInvalid={!!errors.gender}
                  />
                  <Form.Check
                    type="radio"
                    label="Female"
                    name="gender"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                    isInvalid={!!errors.gender}
                  />
                  <Form.Check
                    type="radio"
                    label="Others"
                    name="gender"
                    value="Others"
                    checked={formData.gender === 'Others'}
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                    isInvalid={!!errors.gender}
                  />
                </div>
                {errors.gender && (
                  <div className="text-danger small">{errors.gender}</div>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="New password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  isInvalid={!!errors.confirmPassword}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword}
                </Form.Control.Feedback>
              </Form.Group>

              <p style={{ 
                fontSize: '12px',
                color: '#606770',
                marginBottom: '16px'
              }}>
                By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy.
              </p>

              <div style={{ textAlign: 'center' }}>
                <Button 
                  type="submit" 
                  variant="success" 
                  size="lg" 
                  style={{
                    fontWeight: 'bold',
                    width: '200px'
                  }}
                >
                  Sign Up
                </Button>
              </div>

              <div style={{ 
                textAlign: 'center',
                marginTop: '16px'
              }}>
                <Link 
                  to="/login" 
                  className="text-decoration-none"
                  style={{ color: '#1877f2' }}
                >
                  Already have an account?
                </Link>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Register