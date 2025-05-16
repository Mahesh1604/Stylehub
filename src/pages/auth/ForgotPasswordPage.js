import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    // This would normally call an API to send password reset email
    console.log('Password reset request for:', email);
    setSubmitted(true);
    setError('');
  };
  
  return (
    <Container className="py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Card className="shadow-sm border-0 rounded-lg">
            <Card.Header className="bg-primary text-white text-center py-3">
              <h4 className="mb-0">Forgot Password</h4>
            </Card.Header>
            
            <Card.Body className="p-4">
              {!submitted ? (
                <>
                  <p className="text-muted mb-4">
                    Enter your email address and we'll send you a link to reset your password.
                  </p>
                  
                  {error && <Alert variant="danger">{error}</Alert>}
                  
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" className="w-100 py-2 mt-3">
                      Send Reset Link
                    </Button>
                  </Form>
                  
                  <div className="text-center mt-4">
                    <Link to="/login" className="text-decoration-none">
                      Back to Login
                    </Link>
                  </div>
                </>
              ) : (
                <Alert variant="success">
                  <h5>Check your email</h5>
                  <p className="mb-0">
                    We've sent a password reset link to {email}. Please check your inbox and follow the instructions to reset your password.
                  </p>
                  <div className="text-center mt-3">
                    <Link to="/login" className="text-decoration-none">
                      Back to Login
                    </Link>
                  </div>
                </Alert>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default ForgotPasswordPage;
