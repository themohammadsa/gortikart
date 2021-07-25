import './login.css';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/register/loginUser';
import { useProductContext } from '../../context/ProductContext';
import { useAuthContext } from '../../context/AuthProvider';
import { setupTokenHeaderForAxios } from '../../services/setupTokenHeaderForAxios';
import { Loader } from '../../components/loader/Loader';

export const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);
  const [throttle, setThrottle] = useState(false);
  const { setToastText, setToastShow } = useProductContext();
  const { setName, setToken, setEmail: setEmailContext } = useAuthContext();
  const navigate = useNavigate();
  const { state } = useLocation();

  const guestHandler = () => {
    setEmail('guest@guest.com');
    setPassword('helloguest');
  };

  const loginValidation = () => {
    !(email.length > 4) && setError('Please check the email');
    !(password.length >= 2) && setError('Please check the password');
  };

  const clickHandler = async () => {
    setError('');
    setThrottle(true);
    loginValidation();
    const checkInput = email.length > 4 && password.length >= 2;

    if (checkInput) {
      const data = await loginUser({ email, password });
      if (data.success) {
        setLoader(true);
        setTimeout(() => {
          setToastShow(true);
          setToastText('Login Successful!');
          setToken(data.token);
          setName(data.name);
          setEmailContext(email);
          setupTokenHeaderForAxios(data.token);
          window.localStorage.setItem(
            'loginStatus',
            `${JSON.stringify({
              isUserLoggedIn: true,
              token: data.token,
              name: data.name,
              email: data.email,
              userId: data.userId,
            })}`
          );
          setThrottle(false);
          return navigate(state?.from ? state.from : '/');
        }, 1000);
      } else if (data.message === '409') {
        setError('Password incorrect');
        setThrottle(false);
      } else if (data.message === '403') {
        setError('Email not found');
        setThrottle(false);
      } else {
        setError('Servor Error');
        setThrottle(false);
      }
    } else setThrottle(false);
  };

  useEffect(() => {
    async function checkUserLoginStatus() {
      const { isUserLoggedIn, token, name, email, userId } = (await JSON.parse(
        localStorage.getItem('loginStatus')
      )) ?? { isUserLoggedIn: false, token: '', name: '', email: '' };
      console.log('da', userId);
      if (isUserLoggedIn) {
        setToken(token);
        setName(name);
        setEmailContext(email);
        setupTokenHeaderForAxios(token);
        navigate(state?.from ? state.from : '/');
      }
    }
    checkUserLoginStatus();
  }, []);

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
                {!throttle ? 'Log In' : 'Loading...'}
              </button>

              <div className="divider">
                <hr />
                <span>or</span>
                <hr />
              </div>

              <button
                className="secondary-button"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </button>

              <div className="align-left">
                <span>feel free to</span>
                <span className="span-link" onClick={guestHandler}>
                  Login as a guest!
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
