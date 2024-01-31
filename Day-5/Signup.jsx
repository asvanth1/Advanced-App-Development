import  { useState } from 'react';
import './Sign'
const MyComponent = () => {
  const [isSignup, setIsSignup] = useState(true);

  const handleSignupClick = () => {
    setIsSignup(true);
  };

  const handleLoginClick = () => {
    setIsSignup(false);
  };

  return (
    <div>
      <button className="signup" onClick={handleSignupClick}>
        Signup
      </button>
      <button className="login" onClick={handleLoginClick}>
        Login
      </button>
      <div className={`slider ${isSignup ? 'moveslider' : ''}`}></div>
      <div className={`form-section ${isSignup ? 'form-section-move' : ''}`}></div>
    </div>
  );
}

export default MyComponent;
