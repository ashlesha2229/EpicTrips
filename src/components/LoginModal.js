import React, { useState } from 'react';
import '../css/LoginModal.css';   // make sure this file exists

const LoginModall = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: false,
  });

  // Important: stop rendering if closed
  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? 'Login data:' : 'Register data:', formData);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-tabs">
          <button
            className={isLogin ? 'active' : ''}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? 'active' : ''}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username or email address <span className="required">*</span></label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder=""
              required
            />
          </div>

          <div className="form-group">
            <label>Password <span className="required">*</span></label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '🙈' : '👁'}
              </button>
            </div>
          </div>

          {isLogin && (
            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                Remember me
              </label>
              <a href="#forgot" className="forgot-password">Forgot password?</a>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        {isLogin && (
          <p className="switch-auth">
            Not registered yet?{' '}
            <button type="button" onClick={() => setIsLogin(false)}>
              Sign Up
            </button>
          </p>
        )}

        <div className="divider">
          <span>or sign up with</span>
        </div>

        <div className="social-buttons">
          <button type="button" className="social-btn facebook">
            <span className="icon">f</span> Facebook
          </button>
          <button type="button" className="social-btn google">
            <span className="icon">G</span> Google
          </button>
          <button type="button" className="social-btn twitter">
            <span className="icon">𝕏</span> Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModall;