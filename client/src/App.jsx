import React, { useState, useRef } from 'react';
import './index.css';

const GoogleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const AppleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.63 11.23c-.02-2.5 2.03-3.69 2.13-3.74-1.15-1.68-2.95-1.91-3.61-1.94-1.53-.15-2.98.9-3.77.9-.78 0-1.98-.88-3.23-.85-1.64.03-3.16.95-4.01 2.42-1.72 2.99-.44 7.42 1.25 9.85.83 1.2 1.83 2.53 3.12 2.48 1.25-.05 1.74-.8 3.25-.8 1.5 0 1.95.8 3.28.78 1.35-.03 2.22-1.2 3.03-2.38 1.05-1.53 1.48-3.01 1.5-3.08-.03-.02-2.92-1.12-2.94-3.64zm-2.31-7.24c.68-.82 1.13-1.96 1.01-3.11-1.02.04-2.22.68-2.92 1.5-.56.65-1.1 1.82-.95 2.95 1.14.09 2.18-.53 2.86-1.34z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const BusIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 6v6"/>
    <path d="M15 6v6"/>
    <path d="M2 12h19.6"/>
    <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/>
    <circle cx="7" cy="18" r="2"/>
    <path d="M9 18h5"/>
    <circle cx="16" cy="18" r="2"/>
  </svg>
);

const Header = () => (
  <header className="site-header">
    <div className="header-container">
      <div className="header-logo">
        <BusIcon />
        <span className="brand-name">City Link</span>
      </div>
      <nav className="header-nav">
        <a href="#">Support</a>
        <a href="#">English (US)</a>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-container">
      <p>&copy; {new Date().getFullYear()} City Link Inc.</p>
      <div className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Sitemap</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [tab, setTab] = useState('phone'); // 'email' | 'phone' | 'social'
  
  // OTP state
  const [showOtp, setShowOtp] = useState(false);
  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const [phoneNumber, setPhoneNumber] = useState('');
  const otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const toggleMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
    setShowOtp(false);
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    if(phoneNumber.length > 5) {
      setShowOtp(true);
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) {
      value = value.slice(value.length - 1);
    }
    const newOtp = [...otpValues];
    newOtp[index] = value;
    setOtpValues(newOtp);

    if (value !== '' && index < 3) {
      otpRefs[index + 1].current.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && otpValues[index] === '' && index > 0) {
      otpRefs[index - 1].current.focus();
    }
  };

  return (
    <div className="app-layout">
      <Header />
      
      <main className="main-content">
        <div className="auth-split">
          {/* Left Side: Visual Inspiration */}
          <div className="auth-visual">
            <div className="visual-content">
              <div className="slogan-section">
                <h2>Connecting Cities Seamlessly.</h2>
                <p>Fast, reliable, and comfortable city-to-city travel with City Link.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Form */}
          <div className="auth-panel-wrapper">
            <div className="auth-panel">
              <div className="mobile-logo-section">
                <BusIcon />
                <h1 className="brand-name">City Link</h1>
              </div>
              
              <h2 className="panel-title">{mode === 'login' ? 'Welcome back' : 'Create an account'}</h2>
              <p className="panel-subtitle">
                {mode === 'login' ? 'Enter your details to log in to your account.' : 'Sign up today to start booking your rides.'}
              </p>

              <div className="tab-switcher">
                <button className={`tab ${tab === 'phone' ? 'active' : ''}`} onClick={() => setTab('phone')}>Phone</button>
                <button className={`tab ${tab === 'email' ? 'active' : ''}`} onClick={() => setTab('email')}>Email</button>
                <button className={`tab ${tab === 'social' ? 'active' : ''}`} onClick={() => setTab('social')}>Social</button>
              </div>

              {tab === 'phone' && (
                <form className="auth-form" onSubmit={showOtp ? (e) => { e.preventDefault(); alert("Logged in successfully!"); } : handleSendOtp}>
                  {!showOtp ? (
                    <>
                      <div className="input-group">
                        <label>Phone Number</label>
                        <div className="phone-input-wrapper">
                          <select className="country-code" defaultValue="+1">
                            <option value="+1">🇺🇸 +1</option>
                            <option value="+44">🇬🇧 +44</option>
                            <option value="+91">🇮🇳 +91</option>
                          </select>
                          <input 
                            type="tel" 
                            placeholder="e.g. 555 123 4567" 
                            required 
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                        </div>
                      </div>
                      <button type="submit" className="primary-btn">
                        {mode === 'login' ? 'Send OTP' : 'Verify Phone'}
                      </button>
                    </>
                  ) : (
                    <div className="inline-otp-section">
                      <p className="inline-otp-msg">
                        Code sent to <strong>{phoneNumber}</strong>.{' '}
                        <button type="button" className="link-btn" onClick={() => setShowOtp(false)}>Edit</button>
                      </p>
                      
                      <div className="otp-inputs">
                        {otpValues.map((value, index) => (
                          <input
                            key={index}
                            ref={otpRefs[index]}
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength="1"
                            value={value}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                            onKeyDown={(e) => handleOtpKeyDown(index, e)}
                            className="otp-digit-input"
                            required
                          />
                        ))}
                      </div>
                      <button type="submit" className="primary-btn">Verify code</button>
                    </div>
                  )}
                </form>
              )}

              {tab === 'email' && (
                <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="input-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="you@example.com" required />
                  </div>
                  <div className="input-group">
                    <label>Password</label>
                    <input type="password" placeholder="••••••••" required />
                  </div>
                  {mode === 'login' && (
                    <div className="forgot-password">
                      <a href="#">Forgot password?</a>
                    </div>
                  )}
                  <button type="submit" className="primary-btn">
                    {mode === 'login' ? 'Log In' : 'Sign Up'}
                  </button>
                </form>
              )}

              {tab === 'social' && (
                <div className="social-opts-full">
                  <button className="social-btn"><GoogleIcon /> Continue with Google</button>
                  <button className="social-btn"><AppleIcon /> Continue with Apple</button>
                  <button className="social-btn"><FacebookIcon /> Continue with Facebook</button>
                </div>
              )}

              {(tab === 'phone' || tab === 'email') && (
                <>
                  <div className="divider">
                    <span>or continue with</span>
                  </div>
                  <div className="social-quick-login">
                    <button className="social-circle-btn" title="Google"><GoogleIcon /></button>
                    <button className="social-circle-btn" title="Apple"><AppleIcon /></button>
                    <button className="social-circle-btn" title="Facebook"><FacebookIcon /></button>
                  </div>
                </>
              )}

              <div className="bottom-links">
                <p>
                  {mode === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
                  <button className="link-btn" onClick={toggleMode}>
                    {mode === 'login' ? 'Sign up' : 'Log in'}
                  </button>
                </p>
                <button className="guest-btn">Continue as Guest →</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-logo">
            &copy; {new Date().getFullYear()} City Link Inc.
          </div>
          <div className="footer-links">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
