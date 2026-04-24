import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Bus, Mail, ArrowRight, ArrowLeft } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/verify-otp');
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-icon">
            <Bus size={32} />
          </div>
          <h1 className="auth-title">Forgot Password</h1>
          <p className="auth-subtitle">
            Enter your test email or username below and we'll send you a 6-digit OTP to reset your password.
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-label" htmlFor="email">Email Address or Username</label>
            <div className="input-field-wrapper">
              <Mail className="input-icon" size={20} />
              <input
                id="email"
                type="text"
                className="input-field"
                placeholder="Enter test email / username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="btn-primary"
            disabled={isSubmitting || !email}
          >
            {isSubmitting ? 'Sending OTP...' : 'Reset password'}
            {!isSubmitting && <ArrowRight size={18} />}
          </button>
        </form>

        <Link to="/" className="back-link">
          <ArrowLeft size={16} />
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
