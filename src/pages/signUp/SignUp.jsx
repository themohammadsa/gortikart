import './signup.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/register/createUser';
import { useProductContext } from '../../context/ProductContext';
import { Loader } from '../../components/loader/Loader';

export const SignUp = () => {
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [throttle, setThrottle] = useState(false);
  const [loader, setLoader] = useState(false);
  const { setToastText, setToastShow } = useProductContext();
  const navigate = useNavigate();

  const signUpValidation = () => {
    !(name.length > 2) && setError('Please check the name');
    !(email.length > 4) && setError('Please check the email');
    !(password.length >= 2) && setError('Please check the password');
  };

  const clickHandler = async () => {
    setError('');
    setThrottle(true);
    signUpValidation();

    const checkInput =
      name.length > 2 && email.length > 4 && password.length >= 2;

    if (checkInput) {
      const data = await createUser({ name, email, password });
      if (data.success) {
        setLoader(true);
        navigate('/login');
        setToastShow(true);
        setToastText('Sign Up Successful!');
        setThrottle(false);
        navigate('/login');
      } else if (data.message === '409') {
        setError('Email already exists');
        setThrottle(false);
      } else {
        setError('Server Error!');
        setThrottle(false);
      }
    } else setThrottle(false);
  };

  return (
    <>
      {loader ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <div className="register-page">
          <div className="register-box">
            <div className="register-content">
              <div className="input-div">
                <span>Name</span>
                <input
                  className="input-field"
                  type="text"
                  value={name}
                  isRequired
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="input-div">
                <span>Email Address</span>
                <input
                  className="input-field"
                  type="email"
                  value={email}
                  isRequired
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="input-div">
                <span>Password</span>
                <input
                  className="input-field"
                  type="password"
                  value={password}
                  placeholder="More than 6 characters"
                  isRequired
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              {error && <p className="error-text"> {error} </p>}

              <button
                className="primary-button"
                disabled={!throttle ? false : true}
                onClick={clickHandler}
              >
                {!throttle ? 'Create Account' : 'Loading...'}
              </button>

              <div className="align-left">
                <span>Already have an account?</span>
                <span className="span-link" onClick={() => navigate('/login')}>
                  Log in
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
