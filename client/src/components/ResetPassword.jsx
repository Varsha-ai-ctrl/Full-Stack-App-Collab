import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Eye, EyeOff, CheckCircle2 } from 'lucide-react';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword || password.length < 6) return;

    setIsResetting(true);
    setTimeout(() => {
      setIsResetting(false);
      setSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, 1500);
  };

  if (success) {
    return (
      <div className="auth-container">
        <div className="auth-card" style={{ alignItems: 'center', textAlign: 'center' }}>
          <div className="auth-icon" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#22c55e' }}>
            <CheckCircle2 size={40} />
          </div>
          <h1 className="auth-title">Password Reset Successful!</h1>
          <p className="auth-subtitle">
            Your password has been successfully updated. Redirecting you to login...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-icon">
            <Lock size={32} />
          </div>
          <h1 className="auth-title">Reset Password</h1>
          <p className="auth-subtitle">
            Please enter your new password. Must be at least 6 characters long.
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-label" htmlFor="password">New Password</label>
            <div className="input-field-wrapper">
              <Lock className="input-icon" size={20} />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className="input-field"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
              <button 
                type="button"
                className="input-icon" 
                style={{ left: 'auto', right: '16px', cursor: 'pointer', background: 'none', border: 'none' }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="confirmPassword">Confirm Password</label>
            <div className="input-field-wrapper">
              <Lock className="input-icon" size={20} />
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                className="input-field"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
              />
              <button 
                type="button"
                className="input-icon" 
                style={{ left: 'auto', right: '16px', cursor: 'pointer', background: 'none', border: 'none' }}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {password && confirmPassword && password !== confirmPassword && (
              <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>Passwords do not match</span>
            )}
          </div>

          <button 
            type="submit" 
            className="btn-primary"
            disabled={isResetting || !password || password !== confirmPassword || password.length < 6}
          >
            {isResetting ? 'Saving...' : 'Set New Password'}
          </button>
        </form>

        <Link to="/" className="back-link">
          Cancel and return to Login
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;
