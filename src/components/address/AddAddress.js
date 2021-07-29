import { useState } from 'react';
import './addAddress.css';
import { useHomeContext } from '../../context/HomeContext';

export const AddAddress = () => {
  const [address, setAddress] = useState({});
  const [error, setError] = useState('');
  const { dispatch } = useHomeContext();

  const inputHandler = (e) => {
    address[e.target.id] = e.target.value;
    setAddress(address);
  };

  const clickHandler = () => {
    if (Object.keys(address).length === 6) {
      setError('');
      dispatch({ type: 'ADD_ADDRESS', payload: address });
    } else setError('Please fill all the fields.');
  };

  return (
    <div className="address-page">
      <div className="address-box">
        <h1>Add a new address</h1>
        <div className="address-content">
          <label for="name">Name </label>
          <input
            className="input-address-field"
            type="text"
            id="name"
            onChange={inputHandler}
          />

          <label for="mobile">Mobile Number </label>
          <input
            className="input-address-field"
            type="number"
            placeholder="10-digit mobile number"
            id="mobile"
            onChange={inputHandler}
          />

          <label for="pin">PIN code </label>
          <input
            className="input-address-field"
            type="number"
            placeholder="6 digit"
            id="pin"
            onChange={inputHandler}
          />

          <label for="area">House Number/Area </label>
          <input
            className="input-address-field"
            type="text"
            id="area"
            onChange={inputHandler}
          />

          <label for="city">Town/City </label>
          <input
            className="input-address-field"
            type="text"
            id="city"
            onChange={inputHandler}
          />

          <label for="state">State</label>
          <input
            className="input-address-field"
            type="text"
            id="state"
            onChange={inputHandler}
          />

          <p style={{ color: 'red' }}>{error}</p>
          <button className="primary-button" onClick={clickHandler}>
            Add Address
          </button>
        </div>
      </div>
    </div>
  );
};
